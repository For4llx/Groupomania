const express = require("express");
const router = express.Router();

const messageCtrl = require("../controllers/message");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", auth, messageCtrl.getAllMessage);
router.post("/", auth, messageCtrl.createMessage);
router.delete("/", auth, messageCtrl.deleteMessage);
router.get("/image", auth, messageCtrl.getAllImageMessage);
router.post("/image", auth, multer, messageCtrl.createImageMessage);
router.delete("/image", auth, messageCtrl.deleteImageMessage);

module.exports = router;
