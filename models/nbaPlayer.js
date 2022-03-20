const mongoose = require("mongoose")
const nbaPlayer = mongoose.Schema

const nbaPlayerSchema = new nbaPlayer({
    firstName:{
        type: String,
    },
    firstName:{
        type: String,
    },
    // confrence:{
    //     type: Bollean,
        
    // },
    // postion:{
    //     type:String
    // },
    bountyAmount:{
        type: Number
    }
})

module.exports = mongoose.model("NbaPlayer", nbaPlayerSchema)