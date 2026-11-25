// Local test server: `npm run dev`, then open http://localhost:3000
// (Vercel doesn't use this file. It serves /public and /api automatically.)

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, "public");
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

http
  .createServer(async (req, res) => {
    const { pathname } = new URL(req.url, "http://localhost");

    if (pathname.startsWith("/api/")) {
      const file = path.join(__dirname, "api", path.basename(pathname) + ".js");
      if (!fs.existsSync(file)) {
        res.statusCode = 404;
        return res.end("Not found");
      }
      let raw = "";
      for await (const chunk of req) raw += chunk;
      req.body = raw;
      return require(file)(req, res);
    }

    let file = path.normalize(path.join(PUBLIC, pathname === "/" ? "index.html" : pathname));
    if (!file.startsWith(PUBLIC)) file = path.join(PUBLIC, "index.html");
    if (!path.extname(file) && fs.existsSync(file + ".html")) file += ".html";
    fs.readFile(file, (err, data) => {
      if (err) {
        res.statusCode = 404;
        return res.end("Not found");
      }
      res.setHeader("Content-Type", TYPES[path.extname(file)] || "application/octet-stream");
      res.end(data);
    });
  })
  .listen(PORT, () => {
    console.log(`Quiz:      http://localhost:${PORT}`);
    console.log(`Organiser: http://localhost:${PORT}/admin   (password: gingerbread)`);
  });
