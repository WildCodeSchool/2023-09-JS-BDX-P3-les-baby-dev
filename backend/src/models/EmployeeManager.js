const AbstractManager = require("./AbstractManager");

class EmployeeManager extends AbstractManager {
  constructor() {
    super({ table: "employee" });
  }
}

module.exports = EmployeeManager;
