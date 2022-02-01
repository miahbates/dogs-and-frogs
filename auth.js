const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("./database/model");

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24,
  sameSite: "strict",
  signed: true,
};

function createUser(username, email, password) {
  return bcrypt.hash(password, 10).then((hash) => {
    return model.createUserDB(username, email, hash);
  });
}

function saveUserSession(user) {
  const sid = crypto.randomBytes(18).toString("base64");
  return model.createSession(sid, { user });
}

module.exports = { COOKIE_OPTIONS, createUser, saveUserSession };
