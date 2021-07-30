const Message = require("../models/message");
const Image = require("../models/image");
const User = require("../models/user");

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
exports.changeMessagePicture = async (req, res, next) => {
  await Message.update(
    {
      profilePicture: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    },
    {
      where: {
        userId: req.body.userId,
      },
    }
  );
  await Image.update(
    {
      profilePicture: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    },
    {
      where: {
        userId: req.body.userId,
      },
    }
  );
  res.status(200).json({ message: "L'image de profile à été modifié" });
};
