const express = require('express');
const router = express.Router();

const messageCtrl = require('../controllers/message');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', messageCtrl.getAllMessage);
router.get('/', messageCtrl.getAllImageMessage);
router.post('/', messageCtrl.createMessage);
router.post('/image', auth, multer, messageCtrl.createImageMessage);

module.exports = router;