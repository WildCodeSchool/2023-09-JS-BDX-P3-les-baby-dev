const AbstractManager = require("./AbstractManager");

class HoursManager extends AbstractManager {
  constructor() {
    super({ table: "hours" });
  }
}

module.exports = HoursManager;
