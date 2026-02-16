const File = require('../models/File');
const fs = require('fs');
const path = require('path');

// Render upload page
const uploadPage = async (req, res) => {
  try {
    const files = await File.find().sort({ uploadedAt: -1 });
    res.render('upload', {
      title: 'Upload Files | Portfolio',
      files,
      message: null
    });
  } catch (error) {
    res.render('upload', {
      title: 'Upload Files | Portfolio',
      files: [],
      message: { type: 'error', text: 'Error loading files' }
    });
  }
};

// Handle file upload
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      const files = await File.find().sort({ uploadedAt: -1 });
      return res.render('upload', {
        title: 'Upload Files | Portfolio',
        files,
        message: { type: 'error', text: 'Please select a file to upload' }
      });
    }

    // Save file info to database
    const newFile = new File({
      filename: req.file.filename,
      originalName: req.file.originalname,
      path: '/uploads/' + req.file.filename, // Web accessible path
      mimetype: req.file.mimetype,
      size: req.file.size
    });

    await newFile.save();

    const files = await File.find().sort({ uploadedAt: -1 });
    res.render('upload', {
      title: 'Upload Files | Portfolio',
      files,
      message: { type: 'success', text: 'File uploaded successfully!' }
    });
  } catch (error) {
    console.error('Upload error:', error);
    const files = await File.find().sort({ uploadedAt: -1 });
    res.render('upload', {
      title: 'Upload Files | Portfolio',
      files,
      message: { type: 'error', text: 'Error uploading file' }
    });
  }
};

// Delete file
const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    
    if (!file) {
      return res.status(404).json({ success: false, message: 'File not found' });
    }

    // Delete file from disk
    const filePath = path.join(__dirname, '../../public', file.path);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete from database
    await File.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ success: false, message: 'Error deleting file' });
  }
};

// Get all files (API endpoint)
const getAllFiles = async (req, res) => {
  try {
    const files = await File.find().sort({ uploadedAt: -1 });
    res.json({ success: true, files });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching files' });
  }
};

module.exports = {
  uploadPage,
  uploadFile,
  deleteFile,
  getAllFiles
};
