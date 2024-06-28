const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Use CORS middleware
app.use(cors());

// Define a simple API endpoint for '/api/message'
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Define a simple API endpoint for '/'
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend API!' });
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
