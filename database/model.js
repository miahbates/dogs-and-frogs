const db = require("./connection");

function createUserDB(username, email, hash) {
  const INSERT_USER = ` 
    INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email`;
  return db.query(INSERT_USER, [username, email, hash]).then((result) => {
    return result.rows[0];
  });
}

function createSession(sid, userInfo) {
  const INSERT_SESSION = `
    INSERT INTO sessions (sid, user_info) VALUES ($1,$2) RETURNING sid`;
  return db.query(INSERT_SESSION, [sid, userInfo]).then((result) => {
    return result.rows[0].sid;
  });
}

function getUser(email) {
  const SELECT_USER = `
  SELECT id, username, email, password FROM users WHERE email=$1`;
  return db.query(SELECT_USER, [email]).then((result) => {
    console.log("result", result.rows);
    console.log("result with 0", result.rows[0]);
    return result.rows[0];
  });
}

function deleteCurSession(sid) {
  const DELETE_SESSION = `
    DELETE FROM sessions WHERE sid = $1`;
  return db.query(DELETE_SESSION, [sid]);
}

function getSessionInfo(sid) {
  const CURRENT_SESSION = `
    SELECT user_info FROM sessions WHERE sid =$1`;
  return db.query(CURRENT_SESSION, [sid]).then((result) => {
    return result.rows[0];
  });
}

function getAllposts() {
  const GET_ALL_POSTS = "SELECT * FROM posts";
  return db.query(GET_ALL_POSTS).then((result) => {
    return result.rows;
  });
}
function addPosts(animal_name, description, type, image, id) {
  const ADD_POSTS = `
  INSERT INTO posts (animal_name, description, type, image, user_id) VALUES ($1,$2,$3,$4,$5) RETURNING animal_name, description, type, image, id`;
  return db
    .query(ADD_POSTS, [animal_name, description, type, image, id])
    .then((result) => {
      // console.log("result row", result.rows[0]);
      return result.rows[0];
    });
}

function getPostImage(id) {
  const GET_IMG_BY_ID = `SELECT image FROM posts WHERE id = $1`;
  return db.query(GET_IMG_BY_ID, [id]).then((result) => {
    return result.rows[0];
  });
}

function getProfilePosts(id) {
  const GET_PROFILE_POSTS = `
  SELECT animal_name, type FROM posts WHERE user_id = $1
  `;
  return db.query(GET_PROFILE_POSTS, [id]).then((result) => {
    return result.rows;
  });
}

module.exports = {
  addPosts,
  createUserDB,
  createSession,
  getUser,
  deleteCurSession,
  getSessionInfo,
  getAllposts,
  getPostImage,
  getProfilePosts,
};
