// npm init -y to initialise your repo with package.json

const express = require("express"); // exists in node package
// npm install express => to install express

const app = express();
const port = 3000;

// create a todo app that lets users store todos on the server
// try to create an http server from scratch in C
// create an http server in rust using actix-web
// create an http server in golang using the gurrilla framework
// spring boot java

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/backend-api',(req,res)=>{
    res.send('Hello World from backend api')
})


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})