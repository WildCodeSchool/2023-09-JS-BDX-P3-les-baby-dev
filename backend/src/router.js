const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");

const { authMiddleware } = require("./middlewares/Security/auth.middleware");
// Route to get a list of items

// Route to get a specific item by ID

// Route to add a new item
router.get("/users", userControllers.getUser);
router.get("/users/myprofil", authMiddleware, userControllers.getProfile);
router.post("/users", userControllers.addUser);
router.post("/login", userControllers.postLogin);

/* ************************************************************************* */

module.exports = router;
