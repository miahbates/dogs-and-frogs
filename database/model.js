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

module.exports = { createUserDB, createSession };
