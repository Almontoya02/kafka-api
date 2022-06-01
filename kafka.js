const { Kafka } = require('kafkajs')

username="6ZVSGUCQ2ORS25EA"
password="WlF+jQzozFCcBozuWYCLF8RFOEWUDb0N729qvXSZmYVRN2ipoTIvGQQEmB8wHa4V"
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