const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const upload = multer({ dest: "./public/uploads/" });

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");

const { authMiddleware } = require("./middlewares/Security/auth.middleware");
const structureControllers = require("./controllers/structureControllers");
const models = require("./models");
// Route to get a list of items

// Route to get a specific item by ID

// Route to add a new user/stucture/parent/enfants
router.get("/users", userControllers.getUser);
router.get("/users/myprofil", authMiddleware, userControllers.getProfile);
router.post("/users", userControllers.addUser);
router.post("/login", userControllers.postLogin);

router.get("/structure", structureControllers.getStructure);
router.post("/structureInscription", structureControllers.postStructure);

router.post(
  "/structures/:id([0-9]+)/avatar",
  upload.single("avatar"),
  (req, res) => {
    const { originalname, filename } = req.file;

    const avatarPath = `./public/uploads/${uuidv4()}-${originalname}`;
    fs.rename(`./public/uploads/${filename}`, avatarPath, async (err) => {
      if (err) throw err;

      try {
        await models.structure.update(req.params.id, {
          avatarPath,
        });
        return res.status(201).send({ id: req.params.id, avatarPath });
      } catch (error) {
        return res.status(422).send({ message: error.message });
      }
    });
  }
);

/* ************************************************************************* */

module.exports = router;
