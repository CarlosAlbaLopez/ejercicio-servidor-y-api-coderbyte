"use strict";

const database = require("../infrastructure/database");

async function createUser(name, email, passwordHash, role) {
  const pool = await database.getPool();
  const insertQuery =
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
  const [created] = await pool.query(insertQuery, [
    name,
    email,
    passwordHash,
    role,
  ]);

  console.log(insertQuery);
  console.log(created.insertId);

  return created.insertId;
}

module.exports = {
  createUser,
};
