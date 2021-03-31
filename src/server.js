const PORT = 8080;

const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    let filePath = req.url;
    if (filePath === "/" || filePath === "/index.html")
      filePath = "/public/index.html";

    console.log(`${req.method} ${req.url}`);

    fs.readFile(`.${filePath}`, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }

      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(PORT);

// const express = require('express');
// const app = express();

// app.use('/public', express.static('public'));
// app.use('/', express.static('public'));

// app.listen(PORT, function() {});
