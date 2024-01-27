/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const models = require("../models");

const getUsers = (_, res) => {
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
  models.user
    .create(req.body)
    .then((rows) => {
      res.send({
        id: rows.insertId,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        structureId: rows.structureId,
        parentId: rows.parentId,
        hoursId: rows.hoursId,
        employeeId: rows.employeeId,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send({ message: err.message });
    });
};

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET, { expiresIn: "86400s" });
}

const postLogin = (req, res) => {
  models.user.login(req.body).then((user) => {
    if (user) {
      const { id, is_admin, email } = user;
      const token = generateAccessToken({ id, is_admin, email });
      res.send({ token });
    } else {
      res.status(401).send({ error: "Identifiant incorrect!!!" });
    }
  });
};

const getProfile = async (req, res) => {
  try {
    const user = await models.user.getUsers(req.user.id);

    if (user) {
      delete user.password;
    }

    return user ? res.send(user) : res.sendStatus(404);
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

const getParent = async (req, res) => {
  try {
    const user = await models.user.getParent(req.user.id);

    return user ? res.send(user) : res.sendStatus(404);
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

module.exports = {
  addUser,
  getUsers,
  postLogin,
  getProfile,
  getParent,
};
