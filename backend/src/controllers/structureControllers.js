// const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");
const models = require("../models");

// const updateUpload = async (req, res) => {
//   console.log(req.file);
// const { filename, originalname } = req.file;

// const avatarPath = `./public/uploads/${uuidv4()}-${originalname}`;
// fs.rename(`./public/uploads/${filename}`, avatarPath, async (err) => {
//   if (err) throw err;
//   console.log("c la merde", avatarPath);

//   try {
//     await models.structure.updateU(req.params.id, {
//       req.file,
//     });
//     return res.status(201).send({ id: req.params.id, req.file });
//   } catch (error) {
//     return res.status(422).send({ message: error.message });
//   }
// };

const upload = async (req, res) => {
  // console.log("req.body:", req.body);
  try {
    const [result] = await models.structure.update(req.strucutre.id, req.file);
    // await models.user.addAvatar(req.user.id, result.id);
    return res.status(201).send({ ...req.user, avatar: result });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
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
  // console.log("req.body: ", req.body);
  try {
    await Promise.all(
      req.body.employees.map((employeeData) => {
        const { id, files, name, fName, mail, fonction } = employeeData;

        return models.employee.updateE(+req.params.id, id, {
          files,
          fName,
          name,
          mail,
          fonction,
        });
      })
    );

    res.status(201).json({
      success: true,
      message: "Employee registered successfully",
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
  // updateUpload,
  upload,
  getUserStructure,
  getStructure,
  getStructureById,
  updateHours,
  updateEmployee,
};
