const db = require("../db/queries");

async function getUsernames(req, res) {
  if(req.query.search) {
    const usernames = await db.searchUsernames(req.query.search);
    console.log("Queried usernames: ", usernames);
    res.send("Queried usernames: " + usernames.map(user => user.username).join(", "));
  }
  else {
    const usernames = await db.getAllUsernames();
    console.log("All usernames: ", usernames);
    res.send("All usernames: " + usernames.map(user => user.username).join(", "));
  }
}

async function deleteAllUsernames(req, res) {
  db.deleteAllUsernames();
  res.send("Deleted all usernames!");
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  deleteAllUsernames,
  createUsernameGet,
  createUsernamePost
};