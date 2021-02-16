"use strict";
const gotRepository = require("../../repositories/got-repository");

async function getCharacters(req, res) {
  const characters = await gotRepository.findAllCharacters();

  res.send(characters);
}

module.exports = getCharacters;
