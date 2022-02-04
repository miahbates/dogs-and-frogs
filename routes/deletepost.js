const model = require("../database/model");

async function post(request, response) {
  const { postID } = request.body;
  const sid = request.signedCookies.sid;
  const user = await model.getSessionInfo(sid).then((result) => {
    return result["user_info"].user;
  });
  const userId = user.id;
  return model.deletePost(postID, userId).then(() => {
    response.redirect("/profile");
  });
}

module.exports = { post };
