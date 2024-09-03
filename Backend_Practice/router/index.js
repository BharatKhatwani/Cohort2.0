var express = require("express");
var router = express.Router();
const userModel = require('./users');

router.get("/" , function(req,res){
    res.cookie("age" ,25);
    res.render("index");
})

router.get("/create" , async function(req,res){
  const createduser =  await userModel.create({
    userName : String,
    email : String,
    password : String,
    age : Number,

   })
   res.send(createduser)
})

router.get("/userRoute" , async function(req,res){
    const alluser = await userModel.find();
    res.send(alluser)
})

router.get("/delete" ,async function(req,res){
    const deleteUser = await userModel.findOneAndDelete({ username : "harsh" });
    res.cookies("age",25);
    res.send(deleteuser);
})

router.get("/read" , function(req,res){
    console.log(req.cookies.age);
    res.send("check");
})
module.exports = router;