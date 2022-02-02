function get(request, response) {
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
    <form action="/logout" method="POST">
      <button id="log-out" class="button" type="submit">Log Out</button>
    </form>
    <section>
      <h1>Frog or Dog Newsfeed</h1>
      <ul></ul>
    </section>
  </body>
</html>
  
  `;

  response.send(html);
}

module.exports = { get };
