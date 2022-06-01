const { Kafka } = require('kafkajs')

username="E7MJZYMMQDAIGHSD"
password="rSk7kV8wwo1OjsM1q32bRct8dhuegS5V6L2l2eKZ/dIROJxOPy+dIB0PuOwqjJuv"
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