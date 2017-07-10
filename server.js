'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

var request = require("request");

// App
const app = express();

app.get('/', (req, res) => {
  request("http://localhost:9000/api/person", function(error, response, body) {
    // console.log(body);
    res.send(body);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);