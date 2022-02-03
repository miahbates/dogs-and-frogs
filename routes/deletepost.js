const model = require("../database/model");

function post(request, response) {
  const { postID } = request.body;
  return model.deletePost(postID).then(() => {
    response.redirect("/profile");
  });
}

module.exports = { post };
