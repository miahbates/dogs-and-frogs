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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@200&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <section class="column">
      <img src="../images/logo.png" alt="dog and frog logo" id="logo">
      <h1>Dogs and Frogs</h1>
      <div class="row">
      <a href="/signup" id="sign-up" class="link"> Sign up </a>
      <a href="/login" id="log-in" class="link"> Log in</a>
      </div>
    </section>
  </body>
</html> 
    `;

  response.send(html);
}

module.exports = { get };
