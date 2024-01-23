// // Import database client
// const database = require("../../database/client");

// Provide database access through AbstractManager class
class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  setDatabase(database) {
    this.database = database;
  }

  find(id) {
    return this.database.query(`select * from ${this.table} where user_id=?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  async update(id, dataValue) {
    let sql = `UPDATE ${this.table} set`;
    const sqlValues = [];
    for (const [key, value] of Object.entries(dataValue)) {
      sql += `${sqlValues.length ? "," : ""} ${key} = ?`;

      sqlValues.push(value);
    }
    sql += " where id = ?";
    sqlValues.push(id);
    return this.database.query(sql, sqlValues);
  }

  async updateE(id, dataValue) {
    let sql = `UPDATE ${this.table} set`;
    const sqlValues = [];
    for (const [key, value] of Object.entries(dataValue)) {
      sql += `${sqlValues.length ? "," : ""} ${key} = ?`;

      sqlValues.push(value);
    }
    sql += " where structure_id = ?";
    sqlValues.push(id);
    return this.database.query(sql, sqlValues);
  }

  async updateH(id, dataValue) {
    let sql = `UPDATE ${this.table} set`;
    const sqlValues = [];
    for (const [key, value] of Object.entries(dataValue)) {
      sql += `${sqlValues.length ? "," : ""} ${key} = ?`;

      sqlValues.push(value);
    }
    sql += " where structure_id = ?";
    sqlValues.push(id);
    return this.database.query(sql, sqlValues);
  }

  async updateP(id, dataValue) {
    let sql = `UPDATE ${this.table} set`;
    const sqlValues = [];
    for (const [key, value] of Object.entries(dataValue)) {
      sql += `${sqlValues.length ? "," : ""} ${key} = ?`;

      sqlValues.push(value);
    }
    sql += " where user_id = ?";
    sqlValues.push(id);
    return this.database.query(sql, sqlValues);
  }
}

module.exports = AbstractManager;
