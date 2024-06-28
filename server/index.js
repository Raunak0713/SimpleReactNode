const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Use CORS middleware
app.use(cors());

// Define a simple API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
