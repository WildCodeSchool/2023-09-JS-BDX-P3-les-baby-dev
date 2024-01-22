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
const reservationControllers = require("./controllers/reservationControllers");
const parentControllers = require("./controllers/parentControllers");
// Route to get a list of items

// Route to get a specific item by ID

/* *********** Route User ************** */

// Route to add a new user/stucture/parent/enfants
router.get("/users", userControllers.getUser);
router.get("/users/myprofil", authMiddleware, userControllers.getProfile);
router.post("/users", userControllers.addUser);
router.post("/login", userControllers.postLogin);
router.put("/users/parents", userControllers.updateParent);

/* *********** Route Structure ************** */

router.get("/structure", structureControllers.getStructure);
router.get("/structure/:id", structureControllers.getStructureById);

router.put(
  "/structures/:id([0-9]+)/avatar",
  upload.single("avatar"),
  structureControllers.updateUpload
);

router.put(
  "/structure/:id([0-9]+)/adaptation",
  structureControllers.updateStructure
);

router.put(
  "/structure/:id([0-9]+)/adaptation/hours",
  structureControllers.updateHours
);

router.put(
  "/structure/:id([0-9]+)/adaptation/employees",
  structureControllers.updateEmployee
);

router.get(
  "/users/structure",
  authMiddleware,
  structureControllers.getUserStructure
);

/* *********** Routes Parent ************** */

router.get(
  "/users/parent/myprofil",
  authMiddleware,
  parentControllers.getMyParentProfil
);
router.get("/users/parent", authMiddleware, parentControllers.getListParent);

/* *********** Routes reservation ************** */

router.get("/reservations", reservationControllers.getReservation);

/* ************************************************************************* */

module.exports = router;
