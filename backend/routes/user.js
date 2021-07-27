const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/forum", userController.getUserName);
router.post("/", userController.signin);
router.post("/signup", userController.signup);
router.delete("/delete", auth, userController.delete);
router.put("/picture", multer, userController.changeProfilePicture);

module.exports = router;
