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
};

module.exports = {
  getListParent,
  getMyParentProfil,
  updateParent,
};
