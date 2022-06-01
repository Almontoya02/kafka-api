const { Kafka } = require('kafkajs')

username="6ARGYT7HFHQQ5XSO"
password="8hO3ZVpbvBmsUHoc1tYqHPLUyjghXCSdLvy4UfYTkmOux6+ur5iAspJFhD2C5TMB"
const sasl = username && password ? { username, password, mechanism: 'plain' } : null
const ssl = !!sasl

// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  clientId: 'npm-slack-notifier',
  brokers: ["pkc-ldjyd.southamerica-east1.gcp.confluent.cloud:9092"],
  ssl,
  sasl
})

module.exports = kafka