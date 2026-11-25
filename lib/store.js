// Storage layer.
// - On Vercel: uses Upstash Redis over its REST API (no npm packages needed).
//   Add the free "Upstash for Redis" integration in your Vercel project and the
//   env vars below are filled in for you.
// - Locally (npm run dev): falls back to a JSON file in ./data so you can test
//   without setting anything up.

const fs = require("fs");
const path = require("path");

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const ENTRIES_KEY = "quiz:entries"; // hash: id -> JSON entry

const useRedis = Boolean(REDIS_URL && REDIS_TOKEN);

async function redis(command) {
  const res = await fetch(REDIS_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
  });
  const data = await res.json();
  if (!res.ok || data.error) throw new Error(data.error || `Redis error ${res.status}`);
  return data.result;
}

// ---------- local file fallback ----------
const DATA_FILE = path.join(__dirname, "..", "data", "entries.json");

function readFile() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return {};
  }
}
function writeFile(obj) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(obj, null, 2));
}

function assertConfigured() {
  if (!useRedis && process.env.VERCEL) {
    throw new Error(
      "Storage is not set up. In Vercel, open your project → Storage → add Upstash for Redis, then redeploy."
    );
  }
}

// ---------- public API ----------
async function listEntries() {
  assertConfigured();
  let raw;
  if (useRedis) {
    const flat = (await redis(["HGETALL", ENTRIES_KEY])) || [];
    raw = [];
    for (let i = 1; i < flat.length; i += 2) raw.push(JSON.parse(flat[i]));
  } else {
    raw = Object.values(readFile());
  }
  return raw.sort((a, b) => a.createdAt - b.createdAt);
}

async function addEntry(entry) {
  assertConfigured();
  if (useRedis) {
    await redis(["HSET", ENTRIES_KEY, entry.id, JSON.stringify(entry)]);
  } else {
    const all = readFile();
    all[entry.id] = entry;
    writeFile(all);
  }
}

async function deleteEntry(id) {
  assertConfigured();
  if (useRedis) {
    await redis(["HDEL", ENTRIES_KEY, id]);
  } else {
    const all = readFile();
    delete all[id];
    writeFile(all);
  }
}

async function deleteAll() {
  assertConfigured();
  if (useRedis) await redis(["DEL", ENTRIES_KEY]);
  else writeFile({});
}

module.exports = { listEntries, addEntry, deleteEntry, deleteAll, useRedis };
