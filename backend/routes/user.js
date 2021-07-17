const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.post("/forum", userController.getUserName);
router.post("/", userController.signin);
router.post("/signup", userController.signup);
router.delete("/delete", userController.delete);

module.exports = router;
