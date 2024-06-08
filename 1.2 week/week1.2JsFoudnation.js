let sum =0 ;
for(let i =0 ;i<1000000000;i++){
    sum = sum+i;
}
console.log(sum);
// the above code is never thread free. will an os's single core will reach 100 %
// answer is yes it will reach or it will either context switch