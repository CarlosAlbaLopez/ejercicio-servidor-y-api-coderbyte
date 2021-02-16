"use strict";
const gotRepository = require("../../repositories/got-repository");

async function getByQuery(req, res) {
  const queryResult = await gotRepository.findByQuery();

  res.send(queryResult);
}

module.exports = getByQuery;
