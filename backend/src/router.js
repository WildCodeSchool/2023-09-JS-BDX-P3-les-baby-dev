const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
// Route to get a list of items

// Route to get a specific item by ID

// Route to add a new item
router.get("/users", userControllers.getUser);
router.post("/users", userControllers.addUser);

/* ************************************************************************* */

module.exports = router;
