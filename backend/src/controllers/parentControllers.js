const models = require("../models");

const getListParent = async (_, res) => {
  models.parent
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getMyParentProfil = (req, res) => {
  const id = +req.params.id;
  models.parent
    .find(id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getListParent,
  getMyParentProfil,
};
