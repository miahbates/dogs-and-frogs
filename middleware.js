const model = require("./database/model");

function checkAuth(request, response, next) {
  // get sid from cookie
  const sid = request.signedCookies.sid;
  // getSessionInfo function queries DB to check if there is a session which matches
  // the cookie SID and user data
  model.getSessionInfo(sid).then((userInfo) => {
    // console.log("server.js userinfo", userInfo);
    request.session = userInfo;
    if (!userInfo) {
      response.status(401).send(`
        <h1>Please log in to view this page</h1>
        <a href="/" id="return" class="button"> Back to home</a>`);
    } else {
      next();
    }
  });
}

module.exports = { checkAuth };
