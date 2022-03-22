const express = require("express")
// const nbaPlayer = require("../models/nbaPlayer")
// const {v4: uuidv4} = require('uuid')
const nbaPlayerRouter = express.Router()
const Hooper = require("../models/nbaPlayer")

// const nbaPlayers = [
//     {firstName: "Magic",lastName: "Johnson",isActive: false,confrence: "west",_id: uuidv4(),retireAmount: 100},
//     {firstName: "Russle",lastName: "Westbrick",isActive: true,confrence: "west",_id: uuidv4(),retireAmount: 20},
//     {firstName: "Bill",lastName: "Russell",isActive: false,confrence: "east",_id: uuidv4(),retireAmount: 199},
//     {firstName: "Jason",lastName: "Kid",isActive: false,confrence: "west",_id: uuidv4(),retireAmount: 80},
//     {firstName: "Steph",lastName: "Curry",isActive: true,confrence: "west",_id: uuidv4(),retireAmount: 200},
//     {firstName: "Labron",lastName: "James",isActive: true,confrence: "east",_id: uuidv4(),retireAmount: 220},
//     {firstName: "Demar",lastName: "Derozan",isActive: true,confrence: "east",_id: uuidv4(),retireAmount: 50},
//     {firstName: "Dennis",lastName: "Rodmon",isActive: false,confrence: "east",_id: uuidv4(),retireAmount: 60},
//     {firstName: "Rick",lastName: "Berry",isActive: true,confrence: "west",_id: uuidv4(),retireAmount: 250},
//     {firstName: "Kobe",lastName: "Bryant",isActive: false,confrence: "west",_id: uuidv4(),retireAmount: 210},
//     {firstName: "Michael",lastName: "Jordan",isActive: false,confrence: "east",_id: uuidv4(),retireAmount: 300},
// ]

//get all the players
nbaPlayerRouter.get("/", (req, res, next)=>{
    Hooper.find((err, players)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(players)
    })
})

//add new player
nbaPlayerRouter.post("/", (req, res, next)=>{
    const newPlayer = new Hooper(req.body)
    newPlayer.save((err, savedPlayer)=>{
        if(err){
            res.send(500)
            return next(err)
        }
        res.status(201).send(savedPlayer)
    })
})
//remove player
nbaPlayerRouter.delete("/:playerId", (req, res, next)=>{
  Hooper.findOneAndDelete({_id: req.params.playerId}, (err, deletedItem)=>{
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(`you have defeted ${deletedItem.firstName} from the database`)
  })
})
//update player info 
nbaPlayerRouter.put("/:playerId", (req,res, next)=> {
    Hooper.findByIdAndUpdate(
        {_id: req.params.playerId},//find this player id to be updated
        req.body, //what updates are to be proformed?
                /**
                 * this takes the req.body and merges it with the 
                 * req.body that is already made and update
                 * any keys of the key value pair that has been 
                 * updated
                 */
        {new: true},// this is the new updated object
        /*
        *the below function lets up know if the update was done or if there was an error
        */
        (err, updatedPlayer) => {
           if(err){
               res.status(500)
               return next(err)
           } 
           return res.status(201).send(updatedPlayer)
        } 
    )
})




module.exports = nbaPlayerRouter