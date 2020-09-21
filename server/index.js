const express = require('express');
const app = express();
const { HOST, PORT } = require('./config');

app.use(express.static('../client/build'))
   .use(express.static('../client/public'))
   .use((_req, res) => res.sendFile('../client/build/index.html'));

app.listen( ( HOST, PORT ), () => console.log( `Server running is on ${HOST}:${PORT}` ) );