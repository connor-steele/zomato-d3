const express = require("express");
const galleryFile = __dirname + "/../../models/gallery.json";
const gallery = require(galleryFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.post("/", (req, res) => {
  const newImage = {
    id: helper.getNewId(),
    image: req.image
  };
  if (!newImage.id) {
    return res.status(404).json({
      errorMessage: "Please provide a new image."
    });
  }
  gallery.push(newImage);
  helper.writeJSONFile(galleryFile, gallery);
  res.json(gallery);
});

module.exports = router;
