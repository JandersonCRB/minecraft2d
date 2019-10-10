const express = require('express');

const Player = require('./src/models/Player');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const GameLoop = require('./src/GameLoop');
const gameLoop = new GameLoop();

io.on('connection', socket => {
    console.log('Socket conectado: ' + socket.id);
    const player = new Player();
    player.onMoved = () => {
        const resp = {x: player.x, y: player.y};
        socket.emit('playerMoved', JSON.stringify(resp));
        console.log('onMoved')
    };
    gameLoop.addGameObject(player);
    socket.on('move', (event) => {
        try {
            const {x, y} = event;
            player.move(x, y);
        } catch (e) {
            console.error(e);
        }
    });
    socket.on('disconnect', () => {
        console.log('Desconectado ' + socket.id);
    })
});

server.listen(3000, () => {
    console.log('Server running');
});

gameLoop.start();