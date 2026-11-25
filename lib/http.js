// Small helpers shared by the API routes.

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function getBody(req) {
  const b = req.body;
  if (!b) return {};
  if (typeof b === "string") {
    try {
      return JSON.parse(b);
    } catch {
      return {};
    }
  }
  return b;
}

// Organiser password. Set ADMIN_PASSWORD in Vercel → Settings → Environment Variables.
// Locally it defaults to "gingerbread" so you can test straight away.
function isAdmin(req) {
  const expected = process.env.ADMIN_PASSWORD || (process.env.VERCEL ? null : "gingerbread");
  if (!expected) return false;
  return req.headers["x-admin-key"] === expected;
}

module.exports = { send, getBody, isAdmin };
