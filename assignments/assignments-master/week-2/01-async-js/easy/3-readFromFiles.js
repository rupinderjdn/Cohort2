const fs = require('fs')

console.time('fetching');

const readFile = ()=>{
    return new Promise((resolve)=>{
        fs.readFile('a.txt','utf-8',(err,data)=>{
            console.timeEnd('fetching')
            // console.log(data);
            resolve(data)
        })
    })
}

readFile().then((data)=>{
    // console.log("Inside Then :- ",data);
})