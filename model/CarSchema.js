const mongosee = require("mongoose")
const CarData  = new mongosee.Schema({
    name : {
        type : String ,
        required : true
    },
    color : {
        type:String,
        required:true
    },
    price : {
        type : Number,
        required : true
    },
    number : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String
    }

}, {timestamps:true})

const Car = mongosee.model("Car",CarData)
module.exports = Car;