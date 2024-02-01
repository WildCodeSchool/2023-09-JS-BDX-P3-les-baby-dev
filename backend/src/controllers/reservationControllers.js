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

const getReservationsByStructure = async (req, res) => {
  const structureId = parseInt(req.params.id, 10);

  try {
    const reservations = await models.reservation.findByStructure(structureId);
    res.json(reservations);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
const getReservationsByParent = async (req, res) => {
  const parentId = parseInt(req.params.id, 10);

  try {
    const reservations = await models.reservation.findByParent(parentId);
    res.json(reservations);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getReservation,
  addReservation,
  getReservationsByStructure,
  getReservationsByParent,
};
