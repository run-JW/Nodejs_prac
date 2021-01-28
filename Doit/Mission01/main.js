const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    
    const instream = fs.createReadStream('./sample.txt');
    instream.pipe(res);
});

server.listen(port);
