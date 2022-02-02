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

function addPosts(animal_name, description, type) {
  const ADD_POSTS = `
  INSERT INTO posts (animal_name, description, type) VALUES ($1,$2,$3) RETURNING animal_name, description, type`;
  return db
    .query(ADD_POSTS, [animal_name, description, type])
    .then((result) => {
      return result.rows[0];
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
};
