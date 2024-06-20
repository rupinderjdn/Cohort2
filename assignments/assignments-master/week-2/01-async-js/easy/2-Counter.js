// Without setInterval

let counter = 0 ;

const logCounter = (cb)=>{
    setTimeout(()=>{
        console.log(counter++);
        cb(cb);
    },1000);
}

logCounter(logCounter);