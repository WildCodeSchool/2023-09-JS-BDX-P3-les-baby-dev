const models = require("../models");

const addEmployee = async (req, res) => {
  try {
    const structureId = parseInt(req.params.id, 10);
    await Promise.all(
      req.body.employees.map((employeeData) => {
        const { files, name, fName, mail, fonction } = employeeData;
        return models.employee.create(structureId, {
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

module.exports = {
  addEmployee,
};
