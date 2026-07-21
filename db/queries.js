const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function searchUsernames(input) {
  const { rows } = await pool.query(`SELECT * FROM usernames WHERE username LIKE '%${input}%'`);
  console.log(rows);
  return rows;
}

async function deleteAllUsernames() {
  // DELETE FROM table_name;
  await pool.query("DELETE FROM usernames");
}


async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  searchUsernames,
  deleteAllUsernames,
  insertUsername
};