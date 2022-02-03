const model = require("../database/model");

function get(request, response) {
  const id = request.params.id;

  model
    .getPostImage(id)
    .then((result) => {
      response.send(result.image);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { get };
