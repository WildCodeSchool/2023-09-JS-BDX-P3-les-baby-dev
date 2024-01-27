const AbstractManager = require("./AbstractManager");

class EmployeeManager extends AbstractManager {
  constructor() {
    super({ table: "employee" });
  }

  async getByStructure(id) {
    try {
      const [result] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE structure_id = ?`,
        [id]
      );

      return result;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getStructureId(id) {
    const [rows] = await this.database.query(
      `SELECT structure_id FROM ${this.table} where id = ?`,
      [id]
    );

    return rows[0] ?? null;
  }

  async deleteEmployeeById(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} where id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = EmployeeManager;
