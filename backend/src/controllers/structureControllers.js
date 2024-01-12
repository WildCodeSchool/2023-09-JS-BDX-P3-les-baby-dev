const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const models = require("../models");

const postStructure = async (req, res) => {
  try {
    const {
      structureName,
      tel,
      adresse,
      zip,
      ville,
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

    await models.structure.post(
      structureName,
      tel,
      adresse,
      zip,
      ville,
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

const updateUpload = async (req, res) => {
  const { originalname, filename } = req.file;

  const avatarPath = `./public/uploads/${uuidv4()}-${originalname}`;
  fs.rename(`./public/uploads/${filename}`, avatarPath, async (err) => {
    if (err) throw err;

    try {
      await models.structure.update(req.params.id, {
        avatarPath,
      });
      return res.status(201).send({ id: req.params.id, avatarPath });
    } catch (error) {
      return res.status(422).send({ message: error.message });
    }
  });
};

const updateStructure = async (req, res) => {
  try {
    await models.structure.update(+req.params.id, req.body);

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

const getUserStructure = async (req, res) => {
  if (!req.user.isAdmin) {
    return res
      .status(403)
      .send({ message: "you're not allowed to perfom this action" });
  }

  try {
    const structure = await models.structure.getUsersStructure(req.user.id);
    return structure ? res.send(structure) : res.sendStatus(404);
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

module.exports = {
  postStructure,
  updateStructure,
  updateUpload,
  getUserStructure,
};
