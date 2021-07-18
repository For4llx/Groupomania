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
      image: req.body.image,
      userId: req.body.userId,
    });
    console.log(messageObject.toJSON());
    res.status(201).json({ message: "Message créé !" });
  })();
};
exports.getAllImageMessage = (req, res, next) => {
  (async function () {
    const images = await Message.findAll();
    res.status(200).json(images);
  })();
};
exports.getAllMessage = (req, res, next) => {
  (async function () {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  })();
};
