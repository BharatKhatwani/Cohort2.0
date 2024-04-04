

const mongoose = require("mongoose");

// paste the url that are created at mango campus bharat name
mongoose.connect("mongodb+srv://bharat:xSpiOGZGZDWQpMFt@cluster0.mwnfq2b.mongodb.net/userappnew")

const User = mongoose.model('Users', {
  name: String,email: String,password: String 

});

const user  = new User({name : 'Bharat Khatwani',email : 'xcvkp@example.com',password : 'bharat123'});

user.save();
//kitty.save().then(() => console.log("meow"));