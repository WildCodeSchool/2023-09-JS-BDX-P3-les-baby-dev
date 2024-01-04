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
}

// Ready to export
module.exports = AbstractManager;
