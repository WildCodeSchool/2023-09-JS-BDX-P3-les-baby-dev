const models = require("../models");

const getChildById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.child
    .find(id)
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getChildById,
};
