// Import the required modules
const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('assets'));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Main Page</h1>
        <a href="/home">Go to Home</a> <!-- Link to the Home route -->
    `);
});

// Define a route for the "/home" URL
app.get('/home', (req, res) => {
    res.send(`
        <h1>This is the Home Page</h1>
        <a href="/">Go to Main</a> <!-- Link to the Main route -->
        <a href="/about">Go to About</a> <!-- Link to the About route -->
    `);
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

// Create an HTTP server and pass the Express app
const server = http.createServer(app);

// Start the server on a specific port
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
