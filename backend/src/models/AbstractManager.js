// // Import database client
// const database = require("../../database/client");

// Provide database access through AbstractManager class
class AbstractManager {
  constructor({ table }) {
    // Store the table name
    this.table = table;

    // Provide access to the database client
  }

  setDatabase(database) {
    this.database = database;
  }

  find(id) {
    return this.database.query(`select * from ${this.table} where id=?`, [id]);
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
}

// Ready to export
module.exports = AbstractManager;
