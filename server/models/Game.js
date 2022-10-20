
const mongoose = require("mongoose")

const GameSchema = new mongoose.Schema({
    title:{type:String, require:true, unique:true},
    desc:{type:String},
    img:{type:String},
    imgTitle:{type:String},
    imgSm:{type:String},
    trailer: {type: String},
    trailer2: {type: String},
    trailer3: {type: String},
    trailer4: {type: String},
    video: {type: String},
    year: {type: String},
    limit: {type: String},
    genre: {type: String},
    genre2: {type: String},
    genre3: {type: String},
    isSeries: {type: Boolean, default: false},
    
},
    {timestamps:true}

)

module.exports = mongoose.model("Game", GameSchema)