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

socket.on('newMessage', function (message) {
	console.log('New Message', message);
	var li = jQuery('<li></li>');
	li.text(`${message.from}: ${message.text}`);

	jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
// 	from: 'Frank',
// 	text: 'Hi'
// }, function (data) { 
// 	console.log('Got it', data);
// });

jQuery('#message-form').on('submit', function (e) {
	e.preventDefault();

	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('[name=message]').val()
	}, function () {

	});
});