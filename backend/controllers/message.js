const Message = require("../models/message");
const Image = require("../models/image");

exports.createMessage = (req, res, next) => {
  (async function () {
    const messageObject = await Message.create({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      message: req.body.message,
      userId: req.body.userId,
    });
    res.status(201).json({ message: "Message créé !" });
  })();
};
exports.createImageMessage = (req, res, next) => {
  (async function () {
    const messageObject = await Image.create({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
      userId: req.body.userId,
    });
    res.status(201).json({ message: "Image créé !" });
  })();
};
exports.getAllImageMessage = (req, res, next) => {
  (async function () {
    const images = await Image.findAll();
    res.status(200).json(images);
  })();
};
exports.getAllMessage = (req, res, next) => {
  (async function () {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  })();
};

/*(async function () {
    console.log(req.file);
    const messageObject = await Image.create({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      image: req.file.image,
      userId: req.body.userId,
    });
  })();*/
