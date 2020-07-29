const mongoose= require("mongoose");
const Schema= mongoose.Schema;
const userSchema= new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    date:String,
    day:Number,
    year:Number,
    gender:String,
},{timestamps:true});

const User = mongoose.model("User",userSchema);

module.exports=User;
