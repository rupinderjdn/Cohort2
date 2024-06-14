// ------------ SET TIMEOUT -------------

// global web API

function findSum(n){
    let ans = 0;
    for(let i=0;i< n;i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

// setTimeout(findSumTill100,1000); // runs after 1 second

// making it synchronous

// busy waiting 

function syncSleep(){
    let a = 1;
    for(let i=0;i<1000000000;i++){
        a++;
    }
}

// syncSleep();
console.log("hello world");

const { log } = require("console");
// file reading
const fs = require("fs");
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data); // will we call later when condition satisfies and callback comes from event loop.
})
console.log("hi there"); // it will run first

for(let i=0;i<10000000;i++){

}
console.log("hi there 2"); // it will run second

// -------------------------------------------------------------------------
// ------------------------------- PROMISES --------------------------------
// -------------------------------------------------------------------------

// promises are syntactical sugar that makes code look readable

// UGLY way

function weReadFiles(cb){
    fs.readFile("a.txt",'utf-8',function(err,data){
        cb(data);
    })
}

function onDone(data){
    console.log(data);;
}
weReadFiles(onDone);

// Cooler way

function weReadFiles2(){
    return new Promise(function(resolve) {
        fs.readFile("a.txt",'utf-8',function(err,data){
            resolve(data);
        })
    })

}
weReadFiles2().then(onDone);

// Syntax
var d = new Promise(function(resolve){
    setTimeout(()=>{
        resolve("foo");
    },1000)
})
function callback(){
    console.log(d);
}
console.log(d);
d.then(callback) // promise pending 

// ---------------------------------------------------------------------------------
// ------------------------------- Async, await ------------------------------------
// ---------------------------------------------------------------------------------

function weReadFiles2(){
    return new Promise(function(resolve) {
        fs.readFile("a.txt",'utf-8',function(err,data){
            resolve(data);
        })
    })

}

async function main(){
    weReadFiles2().then(function(value){
        console.log('in then');
    })
    const response =  await weReadFiles2();
    console.log("Hi There");
    console.log(response);
}
main()




