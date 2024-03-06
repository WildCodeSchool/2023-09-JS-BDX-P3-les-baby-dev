const jwt = require("jsonwebtoken");
const models = require("../../models");

const authMiddleware = (req, res, next) => {
  // Step 1: Vérification du token
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ error: "Vous n'êtes pas autorisé à aller plus loin" });
  }

  // Step 2: Décodage du token
  return jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.APP_SECRET,
    (err, data) => {
      if (err) {
        return res.status(401).json({ error: err.message });
      }
      // Step 3: récupération des données utilisateurs et gestion erreur
      models.user.getProfile(data.id).then(([rows]) => {
        if (!rows.length) {
          return res.status(401).json({ error: "T'es mort poto" });
        }
        // Step 4: partage des données utilsateurs pour les middlewares
        // eslint-disable-next-line prefer-destructuring
        req.user = rows[0];
        return next();
      });
      return null;
    }
  );
};

module.exports = { authMiddleware };
