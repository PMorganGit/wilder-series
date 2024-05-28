const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // Appelle le constructeur de la classe parente (AbstractRepository)
    // et passe le nom de la table "program" en tant que configuration
    super({ table: "program" });
  }

  async readAll() {
    // Exécute la requête SQL SELECT pour récupérer toutes les entrées de la table "program"
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Retourne le tableau des programmes
    return rows;
  }
}

module.exports = ProgramRepository;
