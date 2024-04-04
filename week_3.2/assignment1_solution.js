const e = require("express");
const express = require("express");

const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "chandan@gmail.com",
    password: "12345",
    name: "Chandan Kushwaha",
  },
  {
    username: "sharmista@gmail.com",
    password: "12345",
    name: "Sharmista kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array

  //return ALL_USERS.some((user) => user.username === username && user.password === password);
  let userExists = false;
  for(let i=0; i<ALL_USERS.length; i++){
      if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
          userExists = true;
      }
  }
  return userExists;

}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username

    // In header type - Authorization, value - paste the token
    res.json({
      user: ALL_USERS.filter(function(user){
        if(user.username !== username){
          return false;
        }
        else{
          return true;
        }
      })
    });

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);