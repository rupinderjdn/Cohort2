// ----------------------- ASYNC JS ---------------------------

function onDone(){
    console.log("hi there");
}

setTimeout(onDone, 1000); // thread does not get stuck on an async function it saves a callback for that call and will execute that callback once it's condition is satisfied.
// it's good that the thread does not get stuck.
console.log("after set timeout");

// ----------------------- Promises --------------------------
// syntactical sugar
// under the hood converted to callback

// creating an async funtion

const fs = require("fs");
function putCopyright(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        data = data + "copyright 2024 rupinder singh";
        fs.writeFile("a.txt",data,function(err){
            cb();
        })
    });
}
putCopyright(onDone);

// using promises

function putCopyrightUsingPromise(cb){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            data = data + "copyright 2024 rupinder singh";
            fs.writeFile("a.txt",data,function(err){
                resolve();
            })
        });
    })
}

putCopyrightUsingPromise()
.then(()=>{
    console.log("done");
})

