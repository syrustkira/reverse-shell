'use strict';
const express =require('express')
const app = express();
const port = 8080;
const handler = require('./delapi');

app.get('/q', handler);

app.listen(port, '0.0.0.0', () => {
console.log(`Server is running at http://0.0.0.0:${port}`);
});
