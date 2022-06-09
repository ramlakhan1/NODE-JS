const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

})

server.listen(3000,() => {
    console.log('Server is running on port 3000');
});