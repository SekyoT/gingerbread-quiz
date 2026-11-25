// GET /api/results            (header x-admin-key) -> all entries
// DELETE /api/results?id=...  (header x-admin-key) -> remove one entry
// DELETE /api/results?all=1   (header x-admin-key) -> remove everything

const { listEntries, deleteEntry, deleteAll } = require("../lib/store");
const { send, isAdmin } = require("../lib/http");

module.exports = async (req, res) => {
  if (!isAdmin(req)) return send(res, 401, { error: "Wrong password" });

  const url = new URL(req.url, "http://localhost");
  try {
    if (req.method === "GET") {
      return send(res, 200, { entries: await listEntries() });
    }
    if (req.method === "DELETE") {
      if (url.searchParams.get("all") === "1") await deleteAll();
      else if (url.searchParams.get("id")) await deleteEntry(url.searchParams.get("id"));
      else return send(res, 400, { error: "Pass ?id= or ?all=1" });
      return send(res, 200, { ok: true });
    }
    return send(res, 405, { error: "Method not allowed" });
  } catch (err) {
    console.error(err);
    return send(res, 500, { error: err.message });
  }
};
