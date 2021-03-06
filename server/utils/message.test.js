var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
		expect(message.from).toBeA('string');
		expect(message.text).toBeA('string');
		// store res in variable
		// assert from match
		// assert text match
		// assert createAt is number
	});
});