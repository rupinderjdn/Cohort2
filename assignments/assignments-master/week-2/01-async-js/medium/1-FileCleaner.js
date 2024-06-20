let word = "hello     world    my    name   is       raman";

let wordArray = word.split(" ");
let filteredArray = wordArray.filter((element) => element !== "");
let joinedString = filteredArray.join(" ");
console.log(joinedString);