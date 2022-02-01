const express = require("express");
const cookieParser = require("cookie-parser");

const server = express();

server.use(cookieParser(process.env.COOKIE_SECRET));

const PORT = 3000;

const staticHandler = express.static("public");

server.use(staticHandler);

server.get("/", (request, response) => {
  response.send("hellooooooo");
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
