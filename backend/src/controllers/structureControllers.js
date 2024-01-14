const models = require("../models");

const postStructure = async (req, res) => {
  try {
    const {
      structureName,
      tel,
      adress,
      zip,
      city,
      stuctureDescpcsi,
      nesting,
      montessori,
      handicap,
      jardin,
      sorties,
      promenades,
      eveil,
      musique,
      art,
      bilingue,
      bibli,
      transport,
      maxplace,
      maxHandicap,
      maxUnder18Months,
      maxAtypicalHours,
      maxNightCare,
      isAdaptationRequired,
      isRespectRequired,
      isDoorRespectRequired,
      isInfoTransmissionRequired,
      isCleanArrivalRequired,
      isJewelryRemovalRequired,
      isMedicationAdminRequired,
    } = req.body;

    await models.post(
      structureName,
      tel,
      adress,
      zip,
      city,
      stuctureDescpcsi,
      nesting,
      montessori,
      handicap,
      jardin,
      sorties,
      promenades,
      eveil,
      musique,
      art,
      bilingue,
      bibli,
      transport,
      maxplace,
      maxHandicap,
      maxUnder18Months,
      maxAtypicalHours,
      maxNightCare,
      isAdaptationRequired,
      isRespectRequired,
      isDoorRespectRequired,
      isInfoTransmissionRequired,
      isCleanArrivalRequired,
      isJewelryRemovalRequired,
      isMedicationAdminRequired
    );

    res.status(201).json({
      success: true,
      message: "Structure registered successfully",
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

const getStructure = async (_, res) => {
  models.structure
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getStructureById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.structure
    .find(id)
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
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
  postStructure,
  getStructure,
  getStructureById,
};
