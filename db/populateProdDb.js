const { Client } = require("pg");
const { argv } = require('node:process');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  // INSERT PROD DB URL HERE
  const client = new Client({
    connectionString: ``,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();