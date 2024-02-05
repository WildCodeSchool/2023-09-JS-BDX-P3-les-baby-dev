const AbstractManager = require("./AbstractManager");

class ChildManager extends AbstractManager {
  constructor() {
    super({ table: "child" });
  }
}

module.exports = ChildManager;
