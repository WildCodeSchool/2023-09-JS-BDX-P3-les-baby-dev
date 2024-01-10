const AbstractManager = require("./AbstractManager");

class StuctureManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "structure" });
  }

  post(
    structureName,
    tel,
    adress,
    zip,
    city,
    stuctureDescpcsi,
    nesting,
    montessori,
    handicap,
    jardin,
    sorties,
    promenades,
    eveil,
    musique,
    art,
    bilingue,
    bibli,
    transport,
    maxplace,
    maxHandicap,
    maxUnder18Months,
    maxAtypicalHours,
    maxNightCare,
    isAdaptationRequired,
    isRespectRequired,
    isDoorRespectRequired,
    isInfoTransmissionRequired,
    isCleanArrivalRequired,
    isJewelryRemovalRequired,
    isMedicationAdminRequired
  ) {
    return this.database.query(
      "INSERT INTO structure( structureName, tel, adress, zip, city, stuctureDescpcsi, nesting, montessori, handicap, jardin, sorties, promenades, eveil, musique,  art, bilingue, bibli, transport, maxplace, maxHandicap, maxUnder18Months, maxAtypicalHours, maxNightCare, isAdaptationRequired, isRespectRequired, isDoorRespectRequired, isInfoTransmissionRequired, isCleanArrivalRequired, isJewelryRemovalRequired, isMedicationAdminRequired) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        structureName,
        tel,
        adress,
        zip,
        city,
        stuctureDescpcsi,
        nesting,
        montessori,
        handicap,
        jardin,
        sorties,
        promenades,
        eveil,
        musique,
        art,
        bilingue,
        bibli,
        transport,
        maxplace,
        maxHandicap,
        maxUnder18Months,
        maxAtypicalHours,
        maxNightCare,
        isAdaptationRequired,
        isRespectRequired,
        isDoorRespectRequired,
        isInfoTransmissionRequired,
        isCleanArrivalRequired,
        isJewelryRemovalRequired,
        isMedicationAdminRequired,
      ]
    );
  }

  async update(id, structure) {
    let sql = "UPDATE structure set";
    const sqlValues = [];
    for (const [key, value] of Object.entries(structure)) {
      sql += `${sqlValues.length ? "," : ""} ${key} = ?`;
      sqlValues.push(value);
    }
    sql += " where id = ?";
    sqlValues.push(id);

    return this.database.query(sql, sqlValues);
  }
}

module.exports = StuctureManager;
