const express = require("express");
const next = require("next");

const port = 9000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // create instance of express
  const server = express();

  // define custom routes
  server.get("/home", (req, res) => {
    return app.render(req, res, "/home");
  });

  // default route
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // create server at port
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${port}`);
  });
});
