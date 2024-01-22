const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const models = require("../models");

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

const updateHours = async (req, res) => {
  try {
    await models.hours.updateH(+req.params.id, req.body);

    res.status(201).json({
      success: true,
      message: "Hours registered successfully",
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

const updateEmployee = async (req, res) => {
  try {
    const employeeData = req.body.employees[0]; // Accédez à l'objet employee dans req.body

    const { files, name, fName, mail, fonction } = employeeData;
    // Ajoutez tous les champs nécessaires ici

    await models.employee.updateE(+req.params.id, {
      files,
      fName,
      name,
      mail,
      fonction,
    });

    res.status(201).json({
      success: true,
      message: "Hours registered successfully",
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
  updateStructure,
  updateUpload,
  getUserStructure,
  getStructure,
  getStructureById,
  updateHours,
  updateEmployee,
};
