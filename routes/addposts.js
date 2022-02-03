const model = require("../database/model.js");

function post(request, response) {
  const file = request.file;
  const { animal_name, description, type } = request.body;
  // get session info
  const sid = request.signedCookies.sid;
  model.getSessionInfo(sid).then((result) => {
    console.log("result", result);
    const id = result["user_info"].user.id;
    const image = file.buffer;
    // console.log("username", username);
    return model
      .addPosts(animal_name, description, type, image, id)
      .then(() => {
        response.redirect("/newsfeed");
      })
      .catch((error) => {
        console.log(error);
        response.status(404);
      });
  });
}

// console.log("result", result);
// username = result["user_info"].user.username;
// console.log(username, "username");

module.exports = { post };
