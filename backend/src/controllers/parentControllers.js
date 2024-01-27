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
  const id = +req.user.id;
  models.parent
    .find(id)
    .then(([rows]) => {
      if (rows.length) {
        res.send(rows[0]);
      } else {
        res.sendStatus(400);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


const updateParent = async (req, res) => {
  try {
    await models.parent.updateP(req.params.id, req.body);

    res.status(201).json({
      success: true,
      message: "Parent registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }

const getParentById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.parent
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
  getListParent,
  getMyParentProfil,

  updateParent,

  getParentById,

};
