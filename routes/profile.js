const model = require("../database/model");

async function get(request, response) {
  const sid = request.signedCookies.sid;
  const userId = await model.getSessionInfo(sid).then((result) => {
    return result["user_info"].user.id;
  });

  const profilePosts = await model.getProfilePosts(userId).then((result) => {
    return result;
  });

  const allListElems = profilePosts.map((post) => {
    return `<li class="post"><div class="space-between"><h3>${post["animal_name"]}</h3><p id="animal-type">${post.type}</p></div>
    <div class="column"><img id="img-post" src="/posts/${post.id}/image" alt="A ${post.type} called ${post["animal_name"]}"></div>
    <p>${post.description}
    <form action="/deletepost" method="POST">
    <input type="hidden" name="postID" value="${post.id}"/>
    <button class="link" id="remove" type="submit">Delete<span class="far fa-trash-alt"></span></button>
    </form>
    </li>`;
  });

  const html = `
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dog or Frog</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@200&display=swap"
      rel="stylesheet"
    />
    <script src="https://kit.fontawesome.com/288a4a188a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="/styles.css" />
  </head>
  <body>
  <section>
    <form action="/signout" method="POST" id="log-out">
      <button class="link" type="submit" id="log-out" >Log Out</button>
      <a class="link" href="/newsfeed" id="newsfeed">Newsfeed</a>
    </form>
    </section>
    <section class="column">
    <img src="../images/logo.png" alt="dog and frog logo" id="logo">
      <h1>Dogs and Frogs</h1>
      <h2>Your profile</h2>
      <section id="post">
      <ul class="column" id="post-ul">${allListElems}</ul>
    </section>
  </body>
</html>
`;
  response.send(html);
}
//.log("profileposts variable line 13", profilePosts);

// function post(request, response) {
//   response.redirect("/profile");
// }
module.exports = { get };
