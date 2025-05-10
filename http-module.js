const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    console.log("req : ", req);
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }
    else if(req.url === '/about') {
        res.end('about us');
    }
    else if(req.url === '/contact') {
        res.end('contact us');
    }
    else {
        res.end('Page not found!');
    }
});

server.listen(8000);
