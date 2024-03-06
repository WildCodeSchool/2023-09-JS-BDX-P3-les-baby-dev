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

const changeReservation = (req, res) => {
  console.info(req.body);

  const { reservationId, newFieldValue } = req.body;

  // Assurez-vous d'avoir les détails nécessaires pour la modification
  if (!reservationId || newFieldValue === undefined) {
    return res.status(400).send({
      message: "Paramètres manquants pour la modification de la réservation.",
    });
  }

  return models.reservation
    .findByPk(reservationId)
    .then((foundReservation) => {
      if (!foundReservation) {
        return res.status(404).send({ message: "Réservation non trouvée." });
      }

      // Créez une variable distincte pour stocker la réservation
      const reservationToUpdate = foundReservation;

      // Mettez à jour le champ souhaité avec la nouvelle valeur
      reservationToUpdate.status = 0;

      // Enregistrez les modifications
      return reservationToUpdate.save();
    })
    .then((updatedReservation) => {
      res.status(200).json(updatedReservation);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send({ message: "Erreur lors de la modification de la réservation." });
    });
};

module.exports = {
  getReservation,
  addReservation,
  getReservationsByStructure,
  getReservationsByParent,
  changeReservation,
};
