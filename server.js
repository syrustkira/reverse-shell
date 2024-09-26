const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
        if (/^\/https:\/\/[a-zA-Z0-9]{10}\.execute-api\.us-east-1\.amazonaws\.com:8443$/.test(req.url)) {
                console.log(`Received request for: ${req.url}`);
                            const filePath = path.join(__dirname, 'api/index.js');
                            fs.readFile(filePath, (err, content) => {
                                                if (err) {
                                                                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                                                                        res.end('Internal Server Error');
                                                                    } else {
                                                                                            res.writeHead(200, { 'Content-Type': 'application/javascript' });
                                                                                            res.end(content, 'utf-8');
                                                                                        }
                                            });
                        } else {
                                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                                        res.end('File Not Found');
                                    }
});

const PORT = 8080;
server.listen(PORT, '0.0.0.0', () => {
     console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
