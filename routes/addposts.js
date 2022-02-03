const model = require("../database/model.js");

function post(request, response) {
  const file = request.file;
  const { animal_name, description, type } = request.body;
  model.addPosts(animal_name, description, type, file.buffer);
  response.redirect("/newsfeed");
}

module.exports = { post };
