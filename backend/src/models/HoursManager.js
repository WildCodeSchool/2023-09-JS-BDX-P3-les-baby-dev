const AbstractManager = require("./AbstractManager");

class HoursManager extends AbstractManager {
  constructor() {
    super({ table: "hours" });
  }

  async getStructureHours(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where structure_id = ?`,
      [id]
    );

    return rows[0] ?? null;
  }
}

module.exports = HoursManager;
