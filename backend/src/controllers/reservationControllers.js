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
};

const getReservationById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.reservation
    .find(id)
    .then(([reservation]) => {
      if (reservation[0] != null) {
        res.json(reservation[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  getReservation,
  addReservation,
  getReservationById,
};
