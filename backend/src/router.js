const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: "./public/uploads/" });

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");

const { authMiddleware } = require("./middlewares/Security/auth.middleware");
const structureControllers = require("./controllers/structureControllers");
// Route to get a list of items

// Route to get a specific item by ID

// Route to add a new user/stucture/parent/enfants
router.get("/users", userControllers.getUser);
router.get("/users/myprofil", authMiddleware, userControllers.getProfile);
router.post("/users", userControllers.addUser);
router.post("/login", userControllers.postLogin);

router.put("/structure/inscription", structureControllers.postStructure);
router.get("/structure", structureControllers.getStructure);
router.get("/structure/:id", structureControllers.getStructureById);
router.post("/structureInscription", structureControllers.postStructure);

router.put(
  "/structures/:id([0-9]+)/avatar",
  upload.single("avatar"),
  structureControllers.updateUpload
);

router.put(
  "/structure/:id([0-9]+)/adaptation",
  structureControllers.updateStructure
);

router.get(
  "/users/structure",
  authMiddleware,
  structureControllers.getUserStructure
);

/* ************************************************************************* */

module.exports = router;
