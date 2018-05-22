const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://192.168.0.15:3000');
//const client = mqtt.connect('mqtt://192.168.56.1:3000');

client.on('connect', () => {
    console.log('connected');
    client.subscribe("energia");
})
client.on('message', (topic, message) => {
  console.log('received message %s %s', topic, message)
})
