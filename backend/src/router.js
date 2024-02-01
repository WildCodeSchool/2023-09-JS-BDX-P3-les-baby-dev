const express = require("express");
// const multer = require("multer");

const router = express.Router();

// const upload = multer({ dest: "./public/uploads/" });

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");

const { authMiddleware } = require("./middlewares/Security/auth.middleware");
const structureControllers = require("./controllers/structureControllers");
const reservationControllers = require("./controllers/reservationControllers");
const parentControllers = require("./controllers/parentControllers");
const hoursControllers = require("./controllers/hourControllers");
const employeeControllers = require("./controllers/employeeControllers");
// Route to get a list of items

// Route to get a specific item by ID

/* *********** Route User ************** */

// Route to add a new user/stucture/parent/enfants
router.get("/users", userControllers.getUsers);
router.get("/users/myprofil", authMiddleware, userControllers.getProfile);

router.post("/users", userControllers.addUser);
router.post("/login", userControllers.postLogin);

/* *********** Route Structure ************** */

router.get("/structure", structureControllers.getStructure);
router.get("/structure/:id([0-9]+)", structureControllers.getStructureById);
router.get(
  "/structures/:id([0-9]+)/employees",
  authMiddleware,
  structureControllers.getStructuresEmployees
);

// router.put(
//   "/structures/:id([0-9]+)/avatar",
//   upload.single("avatarPath"),
//   structureControllers.updateUpload
// );

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

router.post(
  "/structure/employees/:id([0-9]+)",
  authMiddleware,
  employeeControllers.addEmployee
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
router.get("user/parent", authMiddleware, userControllers.getParent);
router.get("/parent/:id", parentControllers.getParentById);

router.put(
  "/parents/:id([0-9]+)",
  authMiddleware,
  parentControllers.updateParent
);
router.post(
  "/parents/children/:id([0-9]+)",
  authMiddleware,
  parentControllers.addChildren
);

/* *********** Routes reservation ************** */

router.get("/reservations", reservationControllers.getReservation);
router.post("/reservation", reservationControllers.addReservation);
router.get(
  "/reservations/:id",
  authMiddleware,
  reservationControllers.getReservationsByStructure
);

/* *********** Routes Hour ************** */

router.get("/hours", hoursControllers.getHours);
router.get("/myhours", authMiddleware, structureControllers.getMyHours);

router.delete(
  "/employees/:id([0-9]+)",
  authMiddleware,
  structureControllers.deleteEmployee
);

/* ************************************************************************* */

module.exports = router;
