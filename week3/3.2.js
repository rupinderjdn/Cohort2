// -------------- FETCH API ---------------------------
// browser exposes a function called fetch => to fetch a specific data fromt he backend


function getPersonData(){
    // alert("working")
    const response = fetch("https://fakerapi.it/api/v1/persons")
    .then((data)=>{
      data.json().then((data)=>{
        console.log(data);
      })
    });
    // console.log(response); // prints a promise
  }


  async function getPersonDataAsync(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    console.log(data);
  }


// --------- AUTHENTICATION ------------------------
// Hashing => 1 way
// Encryption => 2 way with a key


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app=express();
app.use(express.json())
// in memory users
const ALL_USERS = [
  {
    username: "rupinder@gmail.com",
    password: "123",
    name: "rupinder singh"
  },
  {
    username: "rupinder2@gmail.com",
    password: "123",
    name: "rupinder2 singh"
  },
  {
    username: "rupinder3@gmail.com",
    password: "123",
    name: "rupinder3 singh"
  },
]

function userExists(username,password){
  // verifying if the user exists or not
  // find can also be used which takes a callback function as an argument
  let result =false;
  ALL_USERS.forEach((userEntry)=>{
    // console.log(username,password);
    // console.log(userEntry);
    if(userEntry.username === username && userEntry.password === password){
      result = true;
    }
  })

  return result;
}

app.post("/signin",(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  if(!userExists(username,password)){
    return res.status(403).json({
      msg: "user doesnt exist in our in memory db"
    })
  }

  // what is this shhh? jwtpassword 
  var token = jwt.sign({username : username}, jwtPassword);
  return res.json({
    token,
  })
})


// this request expects a authorization header from the user
app.get("/users",(req,res)=>{
  const token = req.headers.authorization;
  try{
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a lsit of users
    const userNames = ALL_USERS.map((user)=>{
      return user.username;
    })
    res.status(200).json(userNames);
  }
  catch(err){
    return res.status(403).json({
      msg: "Invalid token",
    })
  }
})

app.listen(3000);