require('dotenv').config();

const twilio = require('twilio');

const accountSid = process.env.SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TOKEN; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from twilio-node',
    to: 'whatsapp:+xxx', // Text this number
    from: process.env.FROM, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));