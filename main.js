import mqtt from 'mqtt'

const TOPIC = process.env.TOPIC || 'topic'

const client = mqtt.connect('mqtt://localhost:1883')

client.on('connect', (err) => {
  if (err) console.error(err)
  console.log('connected')
  console.log('topic: ', TOPIC)
  let t = 0
  setInterval(() => client.publish(TOPIC, 'Hello mqtt' + t++), 1000)
})
