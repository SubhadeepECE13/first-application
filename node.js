// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!" to all requests.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Listen on port 3000 and IP address 127.0.0.1 (localhost).
const port = 5500;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log("hello world");

