const Message = require("../models/message");

exports.createMessage = (req, res, next) => {
  (async function () {
    const messageObject = await Message.create({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      message: req.body.message,
      userId: req.body.userId,
    });
    console.log(messageObject.toJSON());
    res.status(201).json({ message: "Message créé !" });
  })();
};
exports.createImageMessage = (req, res, next) => {};
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
