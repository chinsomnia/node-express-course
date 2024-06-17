const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page!');
    }
    else if (req.url === '/subpage') {
        res.end('This is a subpage.');
    }
    res.end(`<h1>Sorry!</h1><p>Page doesn't exist.</p><a href="/">Go back to homepage</a>`)
});

server.listen(3000);