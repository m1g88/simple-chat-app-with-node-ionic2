const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) =>{
    res.send('This is ma awesome server');
});

io.on('connection', (client) => {
    console.log('Client connected...');
    client.on('msg', (message) => {
        io.emit('msg', message);
    });
});

server.listen(3000, () => {
    console.log('Program running on port : 3000');
});