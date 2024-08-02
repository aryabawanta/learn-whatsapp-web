const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', async () => {
    console.log('Client is ready!');
    const number =  ""
    client.sendMessage(`${number}@c.us`, "Hello world")
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
	console.log(message.body);
  console.log(message);
});

client.initialize();
