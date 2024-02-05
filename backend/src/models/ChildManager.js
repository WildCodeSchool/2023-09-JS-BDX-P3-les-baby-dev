const AbstractManager = require("./AbstractManager");

class MyChildProfilManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "child" });
  }

  async getOneChild(id) {
    const [rows] = await this.database.query(
      "SELECT * FROM child where parent_id = ?",
      [id]
    );

    return rows;
  }
}

module.exports = MyChildProfilManager;
