const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(express.json()); // Add this to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Ensure messages folder exists
const messagesDir = path.join(__dirname, 'messages');
if (!fs.existsSync(messagesDir)) {
    fs.mkdirSync(messagesDir);
}

// Save message route
app.post('/send-message', (req, res) => {
    const message = req.body.message;
    const timestamp = Date.now();
    const filename = `message-${timestamp}.txt`;
  
    const filePath = path.join(__dirname, 'message', filename);
  
    fs.writeFile(filePath, message, (err) => {
      if (err) {
        console.error('Failed to write file:', err);
        return res.status(500).send('Failed to save message');
      }
      res.send('Message saved');
    });
  });
  

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});