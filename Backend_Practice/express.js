// const express = require('express');
// const app = express();

// // Setting the view engine to EJS
// app.set("view engine", "ejs");

// // Route to render the index.ejs file
// app.get("/", function (req, res) {
//     res.render("index",{age : 45});
// });

// app.get("/contact" , function(req,res){
//     res.render("answer");
// })

// // Start the server
// app.listen(3005, () => {
//     console.log("Server is running on port 3005");
// });


const express  = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"))

app.get("/" , function(req,res){
    res.render("index");
})
app.listen(3005, () => {
    console.log("Server is running on port 3005");
});