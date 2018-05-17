const mqtt = require('../lib/node_modules/mqtt');
const client = mqtt.connect('mqtt://192.168.0.11:3000');

client.on('connect', () => {
    console.log('connected');
    client.subscribe("energia");
})
client.on('message', (topic, message) => {
  console.log('received message %s %s', topic, message)
})
