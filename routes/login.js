function get(request, response) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dog or Frog</title>
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

module.exports = { get };
