/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const models = require("../models");

const getUser = (_, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addUser = (req, res) => {
  // console.log(req.body);
  models.user
    .create(req.body)
    .then((rows) => {
      res.send({
        id: rows.insertId,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        structureId: rows.structureId,
        parentId: rows.parentId,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send({ message: err.message });
    });
  // res.status(418).send(req.body)
};

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET, { expiresIn: "86400s" });
}

const postLogin = (req, res) => {
  models.user.login(req.body).then((user) => {
    if (user) {
      // todo : filtrer les données à envoyer
      const { id, is_admin, email } = user;
      const token = generateAccessToken({ id, is_admin, email });
      res.send({ token });
    } else {
      res.status(401).send({ error: "Identifiant incorrect!!!" });
    }
  });
};

const getProfile = (req, res) => {
  res.send(req.user);
};

const updateParent = async (req, res) => {
  try {
    await models.user.update(req.params.id, req.body);

    res.status(201).json({
      success: true,
      message: "Parent registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  addUser,
  getUser,
  postLogin,
  getProfile,
  updateParent,
};
