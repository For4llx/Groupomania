const Message = require("../models/message");
const Image = require("../models/image");
const User = require("../models/user");
const fs = require("fs");

exports.createMessage = async (req, res, next) => {
  const messageObject = await Message.create({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    message: req.body.message,
    userId: req.body.userId,
    profilePicture: req.body.profilePicture,
  });
  res.status(201).json({ message: "Message créé !" });
};
exports.createImageMessage = async (req, res, next) => {
  const messageObject = await Image.create({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    userId: req.body.userId,
    profilePicture: req.body.profilePicture,
  });
  res.status(201).json({ message: "Image créé !" });
};
exports.getAllImageMessage = async (req, res, next) => {
  const images = await Image.findAll();
  res.status(200).json(images);
};
exports.getAllMessage = async (req, res, next) => {
  const messages = await Message.findAll();
  res.status(200).json(messages);
};
exports.deleteMessage = async (req, res, next) => {
  await Message.destroy({ where: { id: req.body.id } });
  res.status(200).json({ message: "Message Supprimé !" });
};
exports.deleteImageMessage = async (req, res, next) => {
  const messageImage = await Image.findOne({
    where: { id: req.body.id },
  });
  const filename = messageImage.image.split("/images/")[1];
  fs.unlink(`images/${filename}`, async () => {
    await Image.destroy({ where: { id: req.body.id } });
    res.status(200).json({ message: "Message Supprimé !" });
  });
};
