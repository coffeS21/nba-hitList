const express = require("express")
const server = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


server.use(express.json())//this turns the req from json to js
server.use(morgan("dev"))

server.use("/nbaPlayers", require("./routes/nbaPlayerRouter"))


mongoose.connect("mongodb+srv://chai:chai@nbaplayercluster.skcud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.connection.on("connected", ()=> {
    console.log("test")
})

server.listen(9000, ()=>{
    console.log("the server is running")
})