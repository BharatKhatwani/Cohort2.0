const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/praticekaro");
const userschema = mongoose.Schema({
    userName : String,
    email : String,
    password : String,
    age : Number

})
module.exports = mongoose.model("user", userschema);