const AbstractManager = require("./AbstractManager");

class MyParentProfilManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "parent" });
  }

  async getOneParent(id) {
    const [rows] = await this.database.query(
      "SELECT * FROM parent where user_id = ?",
      [id]
    );

    return rows[0] ?? null;
  }

  async createChild(child, parentId) {
    try {
      const {
        childFName,
        childName,
        birthday,
        isWalking,
        childDoctor,
        allergies,
      } = child;

      const [result] = await this.database.query(
        `INSERT INTO child (parent_id, 
        childFName,
        childName,
        birthday,
        isWalking,
        childDoctor,
        allergies) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          parentId,
          childFName,
          childName,
          birthday,
          isWalking,
          childDoctor,
          allergies,
        ]
      );
      const { insertId } = result;
      return insertId;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async removeChild(id) {
    const [result] = await this.database.query(
      `DELETE FROM child WHERE id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = MyParentProfilManager;
