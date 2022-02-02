const model = require("../database/model");

function post(request, response) {
  const sid = request.signedCookies.sid;
  model
    .deleteCurSession(sid)
    .then(() => {
      response.clearCookie("sid");
      response.redirect("/");
    })
    .catch((error) => {
      console.error(error);
      response.send(`
      <h1> Oh no! Something went wrong!</h1>
      <a href="/homepage" id="return" class="button"> Back to home</a>
      `);
    });
}

module.exports = { post };
