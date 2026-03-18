const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const {
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require("../../helpers/cloudinary");

const router = express.Router();

// ✅ Automatically creates the uploads folder
const uploadsDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ✅ Uses diskStorage — file is saved on disk, then uploaded in chunks
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 }, // 200MB max
});

// ✅ Retry logic — retries up to 3 times
const uploadWithRetry = async (filePath, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await uploadMediaToCloudinary(filePath);
    } catch (error) {
      console.log(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === retries - 1) throw error;
      await new Promise((res) => setTimeout(res, 3000)); // 3 sec wait
    }
  }
};

// ✅ Upload route
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const result = await uploadWithRetry(req.file.path);

    // ✅ Deletes temporary file after upload
    fs.unlink(req.file.path, (err) => {
      if (err) console.log("Temp file delete error:", err.message);
    });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    // ✅ Deletes temporary file even if an error occurs
    if (req.file) fs.unlink(req.file.path, () => {});
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Upload failed — please try again" });
  }
});

// ✅ Delete route
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ success: false, message: "Asset ID required" });

    await deleteMediaFromCloudinary(id);
    res
      .status(200)
      .json({ success: true, message: "Media deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error deleting media" });
  }
});

module.exports = router;