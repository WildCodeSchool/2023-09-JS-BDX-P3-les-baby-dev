const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "reservation" });
  }

  async create(reservation) {
    console.info(reservation);
    const result = await this.database.query(
      `insert into ${this.table} (structure_id, parent_id, dayResa, startHour, finishHour, status, child_id, childName, childFName, message) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        reservation.structure_id,
        reservation.parent_id,
        reservation.dayResa,
        reservation.startHour,
        reservation.finishHour,
        reservation.status,
        reservation.childId,
        reservation.childName,
        reservation.childFName,
        reservation.message,
      ]
    );

    const rows = result[0];
    // const reservationId = rows.insertId;

    return rows;
  }

  async findByStructure(structureId) {
    const [rows] = await this.database.query(
      "SELECT * FROM reservation WHERE structure_id = ?",
      [structureId]
    );

    return rows;
  }

  async findByParent(parentId) {
    const [rows] = await this.database.query(
      "SELECT * FROM reservation WHERE parent_id = ?",
      [parentId]
    );

    return rows;
  }

  async removeReservation(id) {
    const [result] = await this.database.query(
      `DELETE FROM reservation WHERE id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = ReservationManager;
