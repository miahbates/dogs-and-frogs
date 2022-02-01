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
    <h1>Sign up</h1>
    <form action="/signup" method="POST">
      <label for="username">Username<span aria-hidden="true">*</span></label>
      <input type="text" name="username" required />
      <label for="email">Email<span aria-hidden="true">*</span></label>
      <input type="email" name="email" required />
      <label for="password">Password<span aria-hidden="true">*</span></label>
      <input type="password" name="password" required />
      <button type="submit">Sign up!</button>
    </form>
    <p>Signed up already? Log in below with your details...</p>
    <a href="/login" id="log-in" class="button"> Log in</a>
    </section>
  </body>
</html>
  `;

  response.send(html);
}

module.exports = { get };
