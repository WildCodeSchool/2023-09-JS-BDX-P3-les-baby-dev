const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
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

const updateUpload = async (req, res) => {
  const { originalname } = req.file;

  const avatarPath = `uploads/${uuidv4()}-${originalname}`;
  fs.rename(req.file.path, `public/${avatarPath}`, async (err) => {
    if (err) throw err;

    try {
      await models.parent.update(req.params.id, {
        avatarPath,
      });
      return res.status(201).send({ id: req.params.id, avatarPath });
    } catch (error) {
      return res.status(422).send({ message: error.message });
    }
  });
};

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

const addChild = async (req, res) => {
  try {
    const parentId = parseInt(req.params.id, 10);
    const childId = await models.parent.createChild(req.body, parentId);
    return res.status(201).send({ ...req.body, id: childId });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
};

// const updateChild = async (req, res) => {
//   try {
//     // const childId = parseInt(req.params.id, 10);
//     const result = await models.child.update(req.body);
//     res.status(200).send({ msg: "Bien enregistré" });
//     return result;
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({ error: error.message });
//   }
// };

const remove = async (req, res) => {
  try {
    const id = +req.params.id;

    // TODO: creer child manager + select * where id = id + verif parent_id = req.user.id
    // TODO: !IMPORTANT: securiser la route => admin et parent de lenfant

    const result = await models.parent.removeChild(id);

    return res.sendStatus(!result.affectedRows ? 404 : 204);
  } catch (err) {
    return res.status(422).send({ message: err.message });
  }
};

const getChildrenById = async (req, res) => {
  try {
    const id = +req.params.id;
    const result = await models.child.getChildren(id);
    res.json(result);
    return result;
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
    return null;
  }
};

const updateChild = async (req, res) => {
  try {
    const id = +req.params.id;

    await models.child.update(id, req.body);

    res.status(201).json({
      success: true,
      message: "Enfant registered successfully",
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
  getParentById,
  addChild,
  updateChild,
  remove,
  updateUpload,
  getChildrenById,
};
