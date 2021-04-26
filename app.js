const { createServer } = require('http');

const server = createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify({User: 'test', Reason: 'Idk?'}));
    return response.end();
});

server.listen(8080);