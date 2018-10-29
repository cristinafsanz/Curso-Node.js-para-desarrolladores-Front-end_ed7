const SocketIo = require('socket.io');
const session = require('./middlewares/session');

module.exports = function(server) {
    const io = SocketIo(server);

    const rooms = ['general', 'developers', 'random', 'welcome'];
    const defaultRoom = rooms[0];
    
    // Socket.io
    io.use((socket, next) => {
        session(socket.request, socket.request.res, next);
    });

    io.on('connection', (socket) => {
        const request = socket.request;
        const user = request.session.user;

        // Sería lo mismo: const { user } = socket.request.session;

        socket.join(defaultRoom);
        socket.emit('rooms', { rooms, defaultRoom });
        socket.emit('info', `hola ${user}, ya estás conectado`);
        socket.to(defaultRoom).broadcast.emit('info', `${user} se ha conectado!`);

        socket.on('message-sent', ( { message, date, currentRoom }) => {
            socket.to(currentRoom).broadcast.emit('message-others', { message, date, user });
            socket.emit('message-mine', { message, date });
        });

        socket.on('change-room', ( { from, to }) => {
            socket.to(from).broadcast.emit('danger', `${user} se ha ido de la sala!`);
            socket.leave(from);
            socket.join(to);
            socket.to(to).broadcast.emit('info', `${user} ha entrado en la sala!`);
            socket.emit('info', `Te has cambiado a la sala ${to}!`);
        });

        socket.on('disconnect', () => {
            socket.broadcast.emit('danger', `${user} se ha desconectado!`);
        })
    })
};