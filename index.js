const express = require('express')
const cors = require("cors")
const app = express()   
const port = process.env.PORT || 4001

const kafkaRouter = require("./src/routes/kafkaroute")

app.use(express.json())
app.use(cors())
app.use(kafkaRouter)
server = app.listen(port,()=>{
    console.log("Server running on: " + port)
});
module.exports=server