const express = require("express");

const server = express();

const PORT = 3000;

server.get("/", (request, response) => {
  response.send("hellooooooo");
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
