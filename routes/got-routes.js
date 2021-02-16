"use strict";

const express = require("express");
const getByQuery = require("../controllers/cars/get-query");
const getHouses = require("../controllers/cars/get-houses");
const getCharacters = require("../controllers/cars/get-characters");

const validateAuth = require("../middlewares/validate-auth");
const { default: axios } = require("axios");

const app = express();

const router = express.Router();

app.get("/houses", async (req, res) => {
  try {
    const houses = await axios({
      method: "GET",
      url: "https://anapioficeandfire.com/houses",
    });

    const [houses] = houses.data.result;

    res.send(houses);
  } catch (err) {
    res.status(400).send("Error");
  }
});

app.get("/characters", async (req, res) => {
  try {
    const characters = await axios({
      method: "GET",
      url: "https://anapioficeandfire.com/characters",
    });

    const [characters] = characters.data.result;

    res.send(characters);
  } catch (err) {
    res.status(400).send("Error");
  }
});

app.get("/houses", async (req, res) => {
  try {
    const houses = await axios({
      method: "GET",
      url: "https://anapioficeandfire.com/houses",
    });

    const [houses] = houses.data.result;

    res.send(houses);
  } catch (err) {
    res.status(400).send("Error");
  }
});

app.get("/:id", async (req, res) => {
  try {
    const result = await axios({
      method: "GET",
      url: "https://anapioficeandfire.com/:id",
    });

    const [result] = result.data.result;

    res.send(result);
  } catch (err) {
    res.status(400).send("Error");
  }
});

module.exports = router;
