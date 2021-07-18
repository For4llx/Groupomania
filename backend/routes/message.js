const express = require("express");
const router = express.Router();

const messageCtrl = require("../controllers/message");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", messageCtrl.getAllMessage);
router.post("/", messageCtrl.createMessage);
router.get("/image", messageCtrl.getAllImageMessage);
router.post("/image", messageCtrl.createImageMessage);

module.exports = router;
