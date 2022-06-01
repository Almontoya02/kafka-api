const { Kafka } = require('kafkajs')

username="U3WLHGITZ7QODJ52"
password="eabTVDGCyvpppxdwO+eYzhfVZURUZ/phWnWCawaiIPUL24P85wn03T3qIsBM3BjY"
const sasl = username && password ? { username, password, mechanism: 'plain' } : null
const ssl = !!sasl

// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  clientId: 'npm-slack-notifier',
  brokers: ["pkc-6ojv2.us-west4.gcp.confluent.cloud:9092"],
  ssl,
  sasl  
})

module.exports = kafka