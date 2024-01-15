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

    const [userStructure] = await this.database.query(
      `INSERT INTO structure (user_id) values (?)`,
      [userId]
    );

    const structureId = userStructure.insertId;

    return {
      id: userId,
      structureId,
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

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
