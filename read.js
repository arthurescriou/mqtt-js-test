import mqtt from 'mqtt'

const TOPIC = process.env.TOPIC || 'topic'

const client = mqtt.connect('mqtt://localhost:1883')

console.log('reading...')

client.subscribe(TOPIC, (err) => {
  if (!err) {
    client.publish(TOPIC, 'Hello mqtt')
  } else console.error(err)
})

client.on('message', (topic, message) => {
  console.log('topic: ', topic)
  console.log(message.toString())
})
