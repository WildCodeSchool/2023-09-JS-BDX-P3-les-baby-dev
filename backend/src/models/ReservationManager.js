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
      `insert into ${this.table} (structure_id, parent_id, dayResa, startHour, finishHour, status, message) values (?,?,?,?,?,?,?)`,
      [
        reservation.structure_id,
        reservation.parent_id,
        reservation.dayResa,
        reservation.startHour,
        reservation.finishHour,
        reservation.status,
        reservation.message,
      ]
    );

    const rows = result[0];
    // const reservationId = rows.insertId;

    return rows;
  }
}

module.exports = ReservationManager;
