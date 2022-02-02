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

function verifyUser(email, password) {
  return model.getUser(email).then((user) => {
    console.log(user);
    // return here? who knows?
    return bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        throw new Error("Password mismatch!");
      } else {
        delete user.password;
        return user;
      }
    });
  });
}
module.exports = { COOKIE_OPTIONS, createUser, saveUserSession, verifyUser };
