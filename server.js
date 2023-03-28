const http = require('http');
const path = require('path');
const fs = require('fs');

const host = 'localhost';
const port = 8000;



const requestListener = (req, res) => {

    if (req.url === '/get') {

        if (req.method !== 'GET') {
            res.writeHead(405);
            return res.end('HTTP method not allowed!');
        }

        let output = '';

        fs.readdir(__dirname + '/files/', (err, files) => {
            if (err) {
                res.writeHead(500);
                return res.end('Internal server error!');
            }
            files.forEach(file => {
                output += file + ', ';
            })

            output = output.slice(0, -2);

            res.writeHead(200);
            res.end(output);
        })

        return;
    }

    if (req.url === '/delete') {

        if (req.method === 'DELETE') {
            res.writeHead(200);
            res.end('Success!');
        } else {
            res.writeHead(405);
            res.end('HTTP method not allowed!');
        }
        return;

    }

    if (req.url === '/post') {

        if (req.method === 'POST') {
            res.writeHead(200);
            res.end('Success!');
        } else {
            res.writeHead(405);
            res.end('HTTP method not allowed!');
        }
        return;
    }

    if (req.url === '/redirect') {

        if (req.method === 'GET') {
            res.writeHead(200);
            res.end(`Ресурс теперь постоянно доступен по адресу /redirected`);
        } else {
            res.writeHead(405);
            res.end('HTTP method not allowed!');
        }
        return;        
    }

}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Сервер запущен и доступен по адресу http://${host}:${port}`);
});