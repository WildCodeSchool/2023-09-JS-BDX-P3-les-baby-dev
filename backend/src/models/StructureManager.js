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
    adresse,
    zip,
    ville,

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
      "INSERT INTO structure( name, tel, adress, zip, city,  nesting, montessori, handicap, jardin, sorties, promenades, eveil, musique,  art, bilingue, bibli, transport, maxplace, maxHandicap, maxUnder18Months, maxAtypicalHours, maxNightCare, isAdaptationRequired, isRespectRequired, isDoorRespectRequired, isInfoTransmissionRequired, isCleanArrivalRequired, isJewelryRemovalRequired, isMedicationAdminRequired) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        structureName,
        tel,
        adresse,
        zip,
        ville,

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

  async getUsersStructure(id) {
    const [rows] = await this.database.query(
      "SELECT * FROM structure where user_id = ?",
      [id]
    );

    return rows[0] ?? null;
  }
}

module.exports = StuctureManager;
