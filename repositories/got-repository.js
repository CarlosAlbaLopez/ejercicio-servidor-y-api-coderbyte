"use strict";

async function findAllCharacters() {
  const pool = await database.getPool();
  const query = "SELECT * FROM cars";
  const [characters] = await pool.query(query);

  return characters;
}

async function findAllHouses() {
  const pool = await database.getPool();
  const query = "SELECT * FROM cars";
  const [houses] = await pool.query(query);

  return houses;
}

async function findByQuery(id) {
  const pool = await database.getPool();
  const query = `SELECT * FROM cars WHERE id=${id}`;
  const [queryResult] = await pool.query(query);

  return queryResult;
}

module.exports = {
  findAllCharacters,
  findAllHouses,
  findByQuery,
};
