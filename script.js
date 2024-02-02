// Import required modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Set the root web folder
const rootFolder = path.join(__dirname, 'Documents');

// Handle file download requests
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(rootFolder, req.params.filename);
  res.download(filePath, err => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});