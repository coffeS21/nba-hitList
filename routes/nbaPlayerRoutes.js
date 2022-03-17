const express = require("express")
const {v4: uuidv4} = require('uuid')
const nbaPlayerRouter = express.Router()

const nbaPlayers = [
    {firstName: "Magic",lastName: "Johnson",isActive: false,confrence: "west",_id: uuidv4(),retireAmount: 100},
    {firstName: "Russle",lastName: "Westbrick",isActive: true,confrence: "west",_id: uuidv4(),retireAmount: 20},
    {firstName: "Bill",lastName: "Russell",isActive: false,confrence: "east",_id: uuidv4(),retireAmount: 199},
    {firstName: "Jason",lastName: "Kid",isActive: false,confrence: "west",_id: uuidv4(),retireAmount: 80},
    {firstName: "Steph",lastName: "Curry",isActive: true,confrence: "west",_id: uuidv4(),retireAmount: 200},
    {firstName: "Labron",lastName: "James",isActive: true,confrence: "east",_id: uuidv4(),retireAmount: 220},
    {firstName: "Demar",lastName: "Derozan",isActive: true,confrence: "east",_id: uuidv4(),retireAmount: 50},
    {firstName: "Dennis",lastName: "Rodmon",isActive: false,confrence: "east",_id: uuidv4(),retireAmount: 60},
    {firstName: "Rick",lastName: "Berry",isActive: true,confrence: "west",_id: uuidv4(),retireAmount: 250},
    {firstName: "Kobe",lastName: "Bryant",isActive: false,confrence: "west",_id: uuidv4(),retireAmount: 210},
    {firstName: "Michael",lastName: "Jordan",isActive: false,confrence: "east",_id: uuidv4(),retireAmount: 300},
]
module.exports = nbaPlayerRoutes