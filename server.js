// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve all files from the current directory
app.use(express.static(__dirname));

// For any route, return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Bind to the port provided by Heroku
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
