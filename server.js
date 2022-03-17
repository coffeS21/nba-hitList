const express = require("express")
const server = express()
const morgan = require("morgan")

server.use(express.json())//this turns the req from json to js
server.use(morgan("dev"))


server.use("/nbaPlayers", require("./routes/nbaPlayerRoutes"))

server.listen(9000, ()=>{
    console.log("the server is running")
})