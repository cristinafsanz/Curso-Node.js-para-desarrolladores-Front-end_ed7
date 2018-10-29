function addMessage(container, user, date, message, reverse) {
  const bubble = document.createElement('div');

  if (reverse) {
    bubble.classList.add('reverse');
  }

  bubble.classList.add('speech-bubble');
  bubble.innerHTML = `By <small>${user}, ${date.toDateString()}</small>:<div>${message}</div>`;

  container.appendChild(bubble);
  bubble.scrollIntoView();
}

function addAlert(container, content, type = 'success') {
  const alert = document.createElement('div');

  alert.classList.add('alert', `alert-${type}`);
  alert.role = 'alert';
  alert.innerHTML = content;

  container.appendChild(alert);
  alert.scrollIntoView();
}

function addRoom(container, name, callback) {
  const room = document.createElement('div');

  room.classList.add('room');
  room.innerHTML = name;

  container.appendChild(room);

  room.addEventListener('click', callback.bind(callback, name));
}

function clean(container) {
    container.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const chatContent = document.querySelector('.chat-content');
  const roomsContent = document.querySelector('#rooms');
  const chatText = document.querySelector('textarea');
  const button = document.querySelector('button#send');

  addAlert(chatContent, 'Waiting server handshake...');
  // addAlert(chatContent, 'Welcome to the <b>Simple chat</b>, REPLACE_USERNAME!');
  // addMessage(chatContent, 'REPLACE_USERNAME', new Date(), 'My message');
  // addMessage(chatContent, 'REPLACE_USERNAME', new Date(), 'Others message 1', true);
  // addMessage(chatContent, 'REPLACE_USERNAME', new Date(), 'Others message 2', true);

  const socket = io();
  let currentRoom;

  socket.on('connect', () => {
    addAlert(chatContent, 'Ya estás conectado!');
  })

  socket.on('info', (message) => {
    addAlert(chatContent, message, 'info');
  })

  function onClickRoom(to) {
    socket.emit('change-room', { 
      from: currentRoom,
      to
    });
    currentRoom = to;
  }

  socket.on('rooms', ( { rooms, defaultRoom }) => {
    currentRoom = defaultRoom;
    rooms.forEach((room) => addRoom(roomsContent, room, onClickRoom));
  })

  socket.on('danger', (message) => {
    addAlert(chatContent, message, 'danger');
  })

  socket.on('message-others', ({ message, date, user }) => {
    addMessage(chatContent, user, new Date(date), message);
  })

  socket.on('message-mine', ({ message, date }) => {
    addMessage(chatContent, 'Yo', new Date(date), message, true);
  })
  
  // Send a message to the server when the button is clicked
  button.addEventListener('click', () => {
    // Click callback
    const value = chatText.value;

    chatText.value = '';
    socket.emit('message-sent', {
      message: value,
      date: new Date()
    });
  });
});
