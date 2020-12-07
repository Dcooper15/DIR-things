const http = require('http');
const express = require('express');

const port = 3002;
const host = 'localhost';

const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine'); 
app.engine('html', es6Renderer); // reg html type
app.set('views', 'templates'); // which directory
app.set('view engine', 'html') // default type

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/:word', (req, res) => {
    const word = req.params.word;
    res.render('greet', {
        locals: {
            word: word
        }
    });
});

server.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
});