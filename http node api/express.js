const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer(function (req, res) {
    console.log(req.url);
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html')
            res.end('home page')
            break;

        case '/men':
            fs.readFile(path.join(`${__dirname}/data/men.json`), 'utf8', function (err, data) {
                if (err) {
                    console.log('error', err);
                }
                // console.log(data);
                res.setHeader('Content-Type', 'application/json')
                res.write(data)
                res.end()
            })
            break;

        case '/women':
            fs.readFile(path.join(`${__dirname}/data/women.json`), 'utf8', function (err, data) {
                if (err) {
                    console.log('error', err);
                }
                // console.log(data);
                res.setHeader('Content-Type', 'application/json')
                res.write(data)
                res.end()
            })
            break;
    }
})

server.listen(8080)
