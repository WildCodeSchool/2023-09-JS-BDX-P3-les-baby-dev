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
  models.user
    .create(req.body)
    .then(([rows]) => {
      res.send({
        id: rows.insertId,
        email: req.body.email,
        is_admin: req.body.is_admin,
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  // res.status(418).send(req.body)
};

module.exports = {
  addUser,
  getUser,
};
