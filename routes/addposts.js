const model = require("../database/model.js");

function post(request, response) {
  const { animal_name, description, type } = request.body;
  console.log("request body", request.body);
  model.addPosts(animal_name, description, type);
  response.redirect("/newsfeed");
}

module.exports = { post };
