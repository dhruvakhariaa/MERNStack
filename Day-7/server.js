var http = require('http');

http.createServer((req, res) => {
    res.end('<h1>Hello World</h1>\nHello World');
}).listen(4000);

console.log('Server running at http://127.0.0.1:4000/');