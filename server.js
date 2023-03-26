const http = require('http');
const path = require('path')

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
    
    if (req.method !== 'GET') {
        res.writeHead(405);
        res.end('HTTP method not allowed');
    } else {
        if (req.url === '/geeekbrains') {
            res.writeHead(200);
            res.end('Success!');
        }
    
        if (req.url === '/example') {
            res.writeHead(200);
            res.end('Success again!');
        }
    
        res.writeHead(200);
        res.end('Привет! Это мой первый HTTP-сервер');
    }
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Сервер запущен и доступен по адресу http://${host}:${port}`);
});