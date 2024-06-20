const fs = require('fs')

console.time('fetching');

const readFile = ()=>{
    return new Promise((resolve)=>{
        fs.readFile('a.txt','utf-8',(err,data)=>{
            console.timeEnd('fetching')
            data+= "copyright from write file"
            fs.writeFile('a.txt',data,(err)=>{
                resolve(data);
            })
        })
    })
}

readFile().then((data)=>{
    console.log("Inside Then :- ",data);
})