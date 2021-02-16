"use strict";

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const usersRepository = require("../../repositories/users-repository");
const createJsonError = require("../errors/create-json-errors");
const { sendEmailRegistration } = require("../../helpers/mail-smtp");
const cryptoRandomString = require("crypto-random-string");

const schema = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(20).required(),
  repeatPassword: Joi.ref("password"),
});

async function registerUser(req, res) {
  try {
    await schema.validateAsync(req.body);

    const { name, email, password } = req.body;
    const existUser = await usersRepository.findUserByEmail(email);
    if (existUser) {
      const error = new Error("Ya existe un usuario con este email");
      error.status = 409;
      throw error;
    }
    console.log(name);

    const passwordHash = await bcrypt.hash(password, 12);

    const id = await usersRepository.createUser(
      name,
      email,
      passwordHash,
      "reader"
    );
    const verificationCode = cryptoRandomString({ length: 64 });

    await sendEmailRegistration(name, email, verificationCode);
    await usersRepository.addVerificationCode(id, verificationCode);

    res.status(201).send({ id, name, email, role: "reader" });
  } catch (err) {
    createJsonError(err, res);
  }
}

module.exports = registerUser;
