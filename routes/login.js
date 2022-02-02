const auth = require("../auth");

function get(request, response) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dog or Frog</title>
    <link rel="stylesheet" type="text/css" href="/styles.css">
    </head>
    <body>
      <section>
        <h1>Login</h1>
        <form action="/login" method="POST">
          <label for="email">Email<span aria-hidden="true">*</span></label>
          <input type="email" name="email" required />
          <label for="password">Password<span aria-hidden="true">*</span></label>
          <input type="password" name="password" required />
          <button type="submit">Log in!</button>
        </form>
        <p>Haven't signed up yet? It only takes 10 seconds!</p>
        <a href="/signup" id="sign-in" class="button">Sign up</a>
      </section>
    </body>
  </html>
    `;

  response.send(html);
}

function post(request, response) {
  const { email, password } = request.body;
  // const sid = request.signedCookied.sid;
  auth
    .verifyUser(email, password)
    .then(auth.saveUserSession)
    .then((sid) => {
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/newsfeed");
    })
    .catch((error) => {
      console.error(error);
      response.send(`
      <h1>User does not exist, please sign-up</h1>
      <a href="/newsfeed" id="return" class="button"> Back to home</a>
      `);
    });
}

module.exports = { get, post };
