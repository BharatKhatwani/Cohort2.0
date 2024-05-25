const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

// paste the url that is created at mango campus bharat name
mongoose.connect("mongodb+srv://bharat:xSpiOGZGZDWQpMFt@cluster0.mwnfq2b.mongodb.net/userappnew");

const User = mongoose.model('Users', {
  name: String,
  email: String,
  password: String
});

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});

    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: 'Bharat Khatwani',
        email: 'xcvkp@example.com',
        password: 'bharat123'
    });

    user.save();
    res.json({
        "msg": "User created successfully"
    });
});

//kitty.save().then(() => console.log("meow"));
