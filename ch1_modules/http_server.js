// http_server.js
const http = require("http");

function httpMain(content) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
      res.statusCode = 200;
      res.end("<h1>Home Page</h1> <br/> <p>" + content + "</p>");
    } else if (req.url === "/about") {
      res.statusCode = 200;
      res.end("<h1>About Page</h1>");
    } else {
      res.statusCode = 404;
      res.end("<h1>404 - Page Not Found</h1>");
    }
  });

  server.listen(3000, () =>
    console.log("Server running at http://localhost:3000")
  );
}

exports.module = {
  httpMain,
};
