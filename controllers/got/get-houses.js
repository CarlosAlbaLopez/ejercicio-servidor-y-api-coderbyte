"use strict";
const gotRepository = require("../../repositories/got-repository");

async function getHouses(req, res) {
  const houses = await gotRepository.findAllHouses();

  res.send(houses);
}

module.exports = getHouses;
