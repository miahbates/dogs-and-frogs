function get(request, response) {
  console.log("params", request.params);
  console.log("id", request.params.id);
  response.send("jfgjsi");
}

module.exports = { get };
