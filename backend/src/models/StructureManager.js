const AbstractManager = require("./AbstractManager");

class StuctureManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "structure" });
  }

  async getUsersStructure(id) {
    const [rows] = await this.database.query(
      "SELECT * FROM structure where user_id = ?",
      [id]
    );

    return rows[0] ?? null;
  }

  async getStructure(id) {
    const [rows] = await this.database.query(
      "SELECT * FROM structure where id = ?",
      [id]
    );

    return rows[0] ?? null;
  }
}

module.exports = StuctureManager;
