const models = require("../models");

const getReservation = async (_, res) => {
  models.reservation
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addReservation = (req, res) => {
  console.info(req.body);
  models.reservation
    .create(req.body)
    .then((rows) => {
      res.status(201).json(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send({ message: err.message });
    });
  // res.status(418).send(req.body)
};
module.exports = {
  getReservation,
  addReservation,
};
