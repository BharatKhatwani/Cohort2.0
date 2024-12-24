const express = require("express");
const app = express();

app.get("/" , function(req,res){
    res.send("Hello World");
})
app.get("/api" , function(req,res){
    res.json({message : "hello World "})
})
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
  });
  
app.listen(3000 , function(){
    console.log("server will be running on the port 3000");
})


