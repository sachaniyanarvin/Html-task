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
app.post('/save-message', (req, res) => {
    const message = req.body.message;

    if (!message || message.trim() === "") {
        return res.status(400).send("Message is empty.");
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `message_${timestamp}.txt`;
    const filePath = path.join(messagesDir, filename);

    fs.writeFile(filePath, message, (err) => {
        if (err) {
            console.error("Error writing message:", err);
            return res.status(500).send("Failed to save message.");
        }
        res.send("Message saved successfully 💌");
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});