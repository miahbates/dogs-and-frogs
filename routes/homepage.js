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
      <h1>Dog or Frog</h1>
      <a href="/signup" id="sign-up" class="button"> Sign up </a>
      <a href="/login" id="log-in" class="button"> Log in</a>
    </section>
  </body>
</html> 
    `;

  response.send(html);
}

module.exports = { get };
