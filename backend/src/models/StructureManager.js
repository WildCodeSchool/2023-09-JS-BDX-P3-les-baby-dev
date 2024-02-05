const AbstractManager = require("./AbstractManager");

class StuctureManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "structure" });
  }

  async getUsersStructure(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where user_id = ?`,
      [id]
    );

    return rows[0] ?? null;
  }

  async getStructure(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where id = ?`,
      [id]
    );

    return rows[0] ?? null;
  }

  async filtredStructure(filters) {
    let sql = `SELECT * FROM ${this.table} WHERE`;
    const sqlValues = [];

    let conditions = "";

    for (const [key, value] of Object.entries(filters)) {
      if (value === "true") {
        conditions += `${conditions ? " AND" : ""} ${key} = ?`;
        sqlValues.push(value === "true");
      }
    }

    sql += conditions;

    const [rows] = await this.database.query(sql, sqlValues);
    return rows;
  }
}

module.exports = StuctureManager;
