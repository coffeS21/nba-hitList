const mongoose = require("mongoose")
const nbaPlayer = mongoose.Schema

const nbaPlayerSchema = new nbaPlayer({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    bountyAmount:{
        type: String,
        
    }
})

module.exports = mongoose.model("NbaPlayer", nbaPlayerSchema)