// // Import database client
const fs = require("fs");
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
    // console.log("sql :", sql);
    // console.log("sqlValues :", sqlValues);
    return this.database.query(sql, sqlValues);
  }

  updateU(id, data) {
    let filename = data.destination.replace("public/", "");
    filename += `${data.filename}.`;
    filename += data.originalname.split(".").slice(-1);
    // console.log("filename", filename);

    return new Promise((resolve, reject) => {
      fs.rename(`${data.path}`, `public/${filename}`, async (err) => {
        if (err) {
          reject(err);
        }
        const [result] = await this.database.query(
          `UPDATE ${this.table} SET avatarPath = ? WHERE id = ?`,
          [filename, id]
        );

        // console.log("result : ", result);
        resolve({
          id: result.insertId,
          url: filename,
        });
      });
    });
  }

  async updateE(structureId, employeeId, dataValue) {
    try {
      const existingEmployee = await this.database.query(
        `SELECT id FROM ${this.table} WHERE structure_id = ? AND id = ?`,
        [structureId, employeeId]
      );
      // console.log("1", existingEmployee);

      if (existingEmployee.length > 0) {
        // console.log(" existe ; ", existingEmployee);
        // est strictement = ou est existant ?
        let sql = `UPDATE ${this.table} set`;
        const sqlValues = [];
        for (const [key, value] of Object.entries(dataValue)) {
          sql += `${sqlValues.length ? "," : ""} ${key} = ?`;

          sqlValues.push(value);
        }
        sql += " where structure_id = ? and id = ?";
        sqlValues.push(structureId, employeeId);
        // console.log("sql :", sql);
        // console.log("sqlValues :", sqlValues);
        return this.database.query(sql, sqlValues);
      }
      const result = await this.database.query(
        `INSERT INTO ${this.table} (structure_id, files, name, fName, mail, fonction) VALUES (?,?,?,?,?,?)`,
        [
          structureId,
          dataValue.files,
          dataValue.name,
          dataValue.fName,
          dataValue.mail,
          dataValue.fonction,
        ]
      );
      const rows = result[0];
      const newEmployeeId = rows.insertId;

      return {
        newEmployeeId,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
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
