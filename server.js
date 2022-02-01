const express = require("express");
const cookieParser = require("cookie-parser");

const server = express();
const PORT = 3000;

const staticHandler = express.static("public");

server.use(cookieParser(process.env.COOKIE_SECRET));
server.use(staticHandler);

const home = require("./routes/homepage");
const signup = require("./routes/signup");
const login = require("./routes/login");

//GET requests
server.get("/", home.get);
server.get("/signup", signup.get);
server.get("/login", login.get);

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
