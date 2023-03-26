const http = require('http');
const path = require('path');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
    
    if (req.method !== 'GET') {
        res.writeHead(405);
        return res.end('HTTP method not allowed');      
    } 

    if (req.url === '/geeekbrains') {
        fs.readdir(__dirname + '/files/', (err, files) => {
            if (err)
              console.log(err);
            else {
              console.log("\nCurrent directory filenames:");
              files.forEach(file => {
                console.log(file);
              })
            }
          })
        res.writeHead(200);
        return res.end('Success!');
    }

    if (req.url === '/example') {
        res.writeHead(200);
        res.end('Success again!');
    }

    res.writeHead(200);
    res.end('Привет! Это мой первый HTTP-сервер');
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Сервер запущен и доступен по адресу http://${host}:${port}`);
});