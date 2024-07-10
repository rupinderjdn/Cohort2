const express = require("express");

const app = express();

app.get("/health-checkup-dumbone",(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(username === 'rupinder' && password === "pass"){
        if(kidneyId == 1 || kidneyId == 2){
            res.json({
                msg : "Your kidney is fine!"
            })
        }
    }
    res.status(400).json({"msg" : "Something not right"})
})

// let say we have to do a post route for a kdiney replacement. Then we'll have to check these things again. in that code block. This violates the DRY principal (Do not Repeat Yourself)
// let's understand wrapper function

const userMiddleware = (req,res,next)=>{
    if(req.headers.username === "rupinder" && req.headers.password === "pass"){
        next();
    }

    else res.status(403).json({
        msg : "Auth failed",
    })
}

const kidneyMiddleware = (req,res,next)=>{
    if(req.query.kidneyId !=1 && req.query.kidneyId!=2){
        res.status(500).json({
            msg : 'Incorrect kidney id'
        })
    }
    else next();
}
app.use(express.json()); // a way to add a middleware. It will get called before every request for the below routes not the above ones

app.get("/health-checkup",userMiddleware,kidneyMiddleware,(req,res)=>{
    const body = JSON.parse(req.body);
    console.log(body.kidneyIds.length);
    res.send("YOur heart is healthy");
})

app.get("/kidney-check",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.send("YOur kidney is healthy");
})
app.get("/heart-check",userMiddleware,(req,res)=>{
    res.send("YOur heart is healthy");
})


// Last Thing in middleware app.use => only way to catch the body sent in the request

// reason
app.use(userMiddleware) // this needs to do a next() call in order to move to the next function.

// ---------------------------------- GLOBAL CATCH----------------------------------
// Whenever there is an exception the control will reach here, and we can send a cleaner message
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({
        msg: "Sorry something is up with our server"
    })
})

// ------------------- ZOD -----------------------
const zod = require("zod");

// creating a schema for strings
const mySchema = zod.string();
const arraySchema = zod.array(zod.number())

const objectSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})


app.post("/test-zod",function(req,res){
    const kidneys = req.body.kidneys;
    const response = arraySchema.safeParse(kidneys);

    const object = req.body.object;
    const objectResponse = objectSchema.safeParse(object);

    console.log(response,objectResponse);
    res.send({response,objectResponse})
})

app.listen(3000);