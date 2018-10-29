const SocketIo = require('socket.io');
const initTwitter = require('./twitter-stream');

let stream;

module.exports = function(server) {
    const io = SocketIo(server);

    io.on('connection', (socket) => {
        socket.on('hashtag', (hashtag) => {
            if (stream) {
                stream.destroy();
            }
            stream = initTwitter(hashtag);
        });
        socket.on('disconnect', (hashtag) => {
            if (stream) {
                stream.destroy();
            }
        });
    })
}