const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tableSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type: String,
        require:true
    }
})


const User = mongoose.model("table" , tableSchema)
module.exports = User