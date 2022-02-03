const express = require("express");
const server = express();

const cookieParser = require("cookie-parser");
const bodyParser = express.urlencoded();

const PORT = 3000;

const staticHandler = express.static("public");

const multer = require("multer");
const imageUpload = multer();

server.use(cookieParser(process.env.COOKIE_SECRET));
server.use(staticHandler);

const home = require("./routes/homepage");
const signup = require("./routes/signup");
const login = require("./routes/login");
const newsfeed = require("./routes/newsfeed");
const signout = require("./routes/signout");
const middleware = require("./middleware");
const addPosts = require("./routes/addposts");
const getimage = require("./routes/getimage");

//GET requests
server.get("/", home.get);
server.get("/signup", signup.get);
server.get("/login", login.get);
server.get("/newsfeed", middleware.checkAuth, newsfeed.get);
server.get("/posts/:id/image", getimage.get);

//POST requests
server.post("/signup", bodyParser, signup.post);
server.post("/login", bodyParser, login.post);
server.post("/signout", bodyParser, signout.post);
server.post(
  "/addposts",
  bodyParser,
  imageUpload.single("image"),
  addPosts.post
);

//error handling
server.use((request, response) => {
  const htmlError = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dog or Frog</title>
        <link rel="stylesheet" type="text/css" href="/styles.css">   
    </head>
    <body>
    <h1>Woof! Ribbit! This page is not found</h1>
    </body>
    </html>`;

  response.status(404).send(htmlError);
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
