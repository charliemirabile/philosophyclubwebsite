const http = require('http');
http.createServer((req, res) => res.writeHead(200).end('ok')).listen(3000);