const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    console.log(req.query.n); // fetching query from the URL
    res.send(req.query.n)
})

app.listen(3000);