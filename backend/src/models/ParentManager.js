const AbstractManager = require("./AbstractManager");

class MyParentProfilManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "parent" });
  }

  async getOneParent(id) {
    const [rows] = await this.database.query(
      "SELECT * FROM parent where user_id = ?",
      [id]
    );

    return rows[0] ?? null;
  }
}

module.exports = MyParentProfilManager;
