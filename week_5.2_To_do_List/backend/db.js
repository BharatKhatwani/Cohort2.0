/*
Todo{
    title : string 
    description : string ;
    complete : boolean 
}
*/
const mongoose = require("mongoose");
//mongodb+srv://bharatkhatwani01:Afx4BCwKQhGThwLe@cluster0.uc3bems.mongodb.net/ 

mongoose.connect("mongodb+srv://bharat123:Q6VF4KA8ZAGsf6wr@cluster0.uc3bems.mongodb.net/ ")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}