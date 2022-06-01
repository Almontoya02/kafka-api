const express = require('express')
const router = new express.Router()
const kafka = require('../../../kafka')
const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'test-group' })
const topic="topic-api"
router.post('/mensaje',async(req,res)=>{
    try {
        const request= req.body
        await producer.connect()
        const responses = await producer.send({
          topic: topic,
          messages: [{
            // Name of the published package as key, to make sure that we process events in order
            key: request.message,
    
            // The message value is just bytes to Kafka, so we need to serialize our JavaScript
            // object to a JSON string. Other serialization methods like Avro are available.
            value: JSON.stringify({
              message: request.message
            })
          }]
        })
        res.status(200).send(
        {
              status:true,
              message:"Mensaje enviado correctamente",
              data:{
                  responses
              }
        })
        console.log(responses)
        await producer.disconnect()

      } catch (error) {
        res.status(400).send(
          {
                status:true,
                message:"Mensaje no enviado",
                mensaje:{
                    error
                }
          })
        console.error('Error publishing message', error)
      }
})

router.get('/getMensaje',async(req,res)=>{
  try {
    await consumer.connect()
    await consumer.subscribe({ topic: topic, fromBeginning: true }).catch((e)=>console.log(e))
    await consumer.run({
      eachMessage: async ({ message }) => {
        console.log({
          value: message.value.toString(),
        })
        res.status(200).send(
          {
                status:true,
                message:"Mensaje obtenido correctamente",
                data:{
                    mensaje:message.value.toString(),
                }
          })
      },
    })



  } catch (error) {
    res.status(400).send(
      {
            status:true,
            message:"Mensaje no obtenido",
            mensaje:{
                error
            }
      })
    console.error('Error publishing message', error)
  }
})

module.exports=router