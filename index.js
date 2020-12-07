const http = require('http');
const express = require('express');
const app = express();

const port = 3120;
const host = '127.0.0.1';

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/home', (req, res) => {
    res.send("Hello you.")
})

app.get('/profile/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}.`)
})

server.listen(port, host, () => {
    console.log(`server listening on port ${host}:${port}.`)
})