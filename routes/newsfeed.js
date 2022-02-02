const db = require("../database/connection");
const model = require("../database/model");

async function get(request, response) {
  //db query to get all posts
  const allposts = await model.getAllposts().then((result) => {
    return result;
  });

  const allListElems = allposts
    .map((post) => {
      //add hidden input in delete post form
      return `<li class="post"><h3>${post["animal_name"]}</h3><p>${post.type}</p><img src="https://iconarchive.com/download/i107326/google/noto-emoji-animals-nature/22215-dog.ico" alt="A ${post.type} called ${post["animal_name"]}"><p>${post.description}</p></li>`;
    })
    .reverse()
    .join("");

  //model.getAllposts()
  //map over all items and insert into ul as li

  // const allposts = "allposts";
  const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dog or Frog</title>
    <link rel="stylesheet" type="text/css" href="/styles.css" />
  </head>
  <body>
    <form action="/signout" method="POST">
      <button class="button" type="submit" id="log-out" >Log Out</button>
    </form>
    <section>
      <h1>Frog or Dog Newsfeed</h1>
      <ul>${allListElems}</ul>
    </section>
  </body>
</html>
  
  `;

  response.send(html);
}

module.exports = { get };
