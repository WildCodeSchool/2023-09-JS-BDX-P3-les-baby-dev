const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const models = require("../models");

const updateUploadEmployee = async (req, res) => {
  const { originalname } = req.file;

  const files = `uploads/${uuidv4()}-${originalname}`;
  fs.rename(req.file.path, `public/${files}`, async (err) => {
    if (err) throw err;

    try {
      await models.employee.update(req.params.id, {
        files,
      });
      return res.status(201).send({ id: req.params.id, files });
    } catch (error) {
      return res.status(422).send({ message: error.message });
    }
  });
};

const addEmployee = async (req, res) => {
  try {
    const structureId = parseInt(req.params.id, 10);
    const employeeId = await models.employee.create(structureId, req.body);
    const [newData] = await models.employee.database.query(
      `select * from ${models.employee.table} where id = ?`,
      [employeeId]
    );
    res.status(201).json(newData[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  addEmployee,
  updateUploadEmployee,
};
