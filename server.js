const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Home route
app.get('/', (req, res) => {
    res.send(`DDEV experimental Node.js HTTP server`);
});

// Dynamic response route
app.get('/info', (req, res) => {
    const response = {
        message: 'Hello! Here is some info about your request.',
        time: new Date().toLocaleString(),
        url: req.originalUrl,
        method: req.method,
        headers: req.headers
    };
    res.json(response);  // Return JSON response
});

// Another example route
app.get('/greet/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}! Hope you're having a great day!`);
});

// 404 Handler for unmatched routes
app.use((req, res) => {
    res.status(404).send('Oops! Page not found.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
