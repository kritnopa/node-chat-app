var socket = io();

socket.on('connect', () => {
	console.log('Connect to server');
});

socket.on('disconnect', () => {
	console.log('Disconnect form server');
});

socket.on('newEmail', function (email) {
	console.log('New email', email);
});

socket.on('newMessage', function (email) {
	console.log('New Message', email);
})