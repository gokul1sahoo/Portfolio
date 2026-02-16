const express = require("express");
const { home } = require("../controllers/siteController");
const { uploadPage, uploadFile, deleteFile, getAllFiles } = require("../controllers/uploadController");
const { upload } = require("../config/cloudinary");

const router = express.Router();

router.get("/", home);

// Upload routes
router.get("/upload", uploadPage);
router.post("/upload", upload.single('file'), uploadFile);
router.delete("/upload/:id", deleteFile);
router.get("/api/files", getAllFiles);

module.exports = router;
