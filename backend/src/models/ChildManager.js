const AbstractManager = require("./AbstractManager");

class ChildManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "child" });
  }

  async getChildren(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where parent_id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = ChildManager;
