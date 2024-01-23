const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  async create(user) {
    const hash = await UserManager.hashPassword(user.password);

    const result = await this.database.query(
      `insert into ${this.table} (email, password, is_admin) values (?,?,?)`,
      [user.email, hash, user.is_admin]
    );

    const rows = result[0];
    const userId = rows.insertId;

    if (user.is_admin) {
      const [userStructure] = await this.database.query(
        `INSERT INTO structure (user_id) values (?)`,
        [userId]
      );
      const structureId = userStructure.insertId;

      const [hoursStructure] = await this.database.query(
        `INSERT INTO hours (structure_id) values (?)`,
        [structureId]
      );

      const hoursId = hoursStructure.insertId;

      const [employeeStructure] = await this.database.query(
        `INSERT INTO employee (structure_id) values (?)`,
        [structureId]
      );

      const employeeId = employeeStructure.insertId;

      return {
        id: userId,
        structureId,
        hoursId,
        employeeId,
      };
    }
    const [userParent] = await this.database.query(
      `INSERT INTO parent (user_id) values (?)`,
      [userId]
    );
    const parentId = userParent.insertId;

    return {
      id: userId,

      parentId,
    };
  }

  async login({ email, password }) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email like ?`,
      [email]
    );
    if (!rows.length) {
      return undefined;
    }
    const user = rows[0];
    console.info(user);
    const result = await bcrypt.compare(password, user.password);
    return result ? user : undefined;
  }

  getProfile(id) {
    return this.database.query(
      `SELECT id, email, is_admin AS isAdmin FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  async getUsers(id) {
    const [rows] = await this.database.query(
      "select * from user where id = ?",
      [id]
    );
    return rows[0] ?? null;
  }

  async getParent(id) {
    const [rows] = await this.database.query(
      "select * from parent where id = ?",
      [id]
    );
    return rows[0] ?? null;
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
