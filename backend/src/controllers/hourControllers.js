const models = require("../models");

const getHours = async (_, res) => {
  models.hours
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getHours,
};
