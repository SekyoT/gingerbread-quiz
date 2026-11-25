// POST /api/submit  { name, scores: { personalityId: number, ... } }
// Picks the personality with the highest score. If there's a tie, the person
// goes to whichever of the tied teams currently has the fewest members, which
// keeps the teams a bit more even.

const crypto = require("crypto");
const { listEntries, addEntry } = require("../lib/store");
const { send, getBody } = require("../lib/http");

const ID_RE = /^[a-z0-9-]{1,40}$/;

module.exports = async (req, res) => {
  if (req.method !== "POST") return send(res, 405, { error: "Use POST" });

  const { name, scores } = getBody(req);
  const cleanName = String(name || "").trim().slice(0, 40);
  if (!cleanName) return send(res, 400, { error: "Please enter your name" });
  if (!scores || typeof scores !== "object") return send(res, 400, { error: "Missing answers" });

  const valid = Object.entries(scores).filter(
    ([id, v]) => ID_RE.test(id) && Number.isFinite(v) && v >= 0 && v <= 100
  );
  if (!valid.length) return send(res, 400, { error: "Missing answers" });

  try {
    const best = Math.max(...valid.map(([, v]) => v));
    const tied = valid.filter(([, v]) => v === best).map(([id]) => id);

    let personality = tied[0];
    if (tied.length > 1) {
      const entries = await listEntries();
      const size = (id) => entries.filter((e) => e.personality === id).length;
      const smallest = Math.min(...tied.map(size));
      const options = tied.filter((id) => size(id) === smallest);
      personality = options[Math.floor(Math.random() * options.length)];
    }

    const entry = {
      id: crypto.randomUUID(),
      name: cleanName,
      personality,
      scores: Object.fromEntries(valid),
      createdAt: Date.now(),
    };
    await addEntry(entry);
    return send(res, 200, { personality, id: entry.id });
  } catch (err) {
    console.error(err);
    return send(res, 500, { error: err.message });
  }
};
