const AbstractManager = require("./AbstractManager");

class MyParentProfilManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "parent" });
  }
}

module.exports = MyParentProfilManager;
