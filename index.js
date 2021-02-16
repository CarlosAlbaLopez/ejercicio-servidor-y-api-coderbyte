"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const gotRouter = require("./app/routes/got-routes");
const usersRouter = require("./app/routes/users-routes");

const port = process.env.SERVER_PORT || 3080;

app.use("/api/v1/got/", gotRouter);
app.use("/api/v1/users/", usersRouter);

app.listen(port, () => console.log(`Listening ${port}...`));
