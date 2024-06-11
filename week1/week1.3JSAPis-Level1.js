// Harkirat notes are also present in the same folder

let string = "hellok world world world";
console.log(string.indexOf("world"));  // 6
console.log(string.lastIndexOf("world")); // 18
console.log(string.slice(0,5));  //  hello
// starting from zero untill 5
console.log(string.substr(0,5));  // deprecated hello

// ---------------------------------------------------------------
console.log(string.slice(1,5));  //  ello
console.log(string.substr(1,5));  //  ellok
// ---------------------------------------------------------------

// -------  REPLACE -----------
const str = "Hello World";
console.log(str.replace("World","Javascript")); // Hello Javascript
console.log(str.replace("he","Javascript")); //Hello World, as it did not find the string 'he' in str

// --------- SPLIT -------------
const value = 'hi my name is rupinder'
const words = value.split(" ");
console.log(words);


// --------- TRIM --------------
const newString = " Rupinder Singh   "
console.log(newString.trim());

// --------- CASES -------------
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());

// -------------------------------------
// -----------  NUMBERS ----------------
// -------------------------------------

// ------------ PARSE INT -------------
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); //42
console.log(parseInt("dfdfdf42")); // NAN  // only gibberish at the end will work
console.log(parseInt("42.45")); // 42

// ------------ PARSE FLOAT -------------
console.log(parseFloat("42")); // 42
console.log(parseFloat("42px")); //42
console.log(parseFloat("dfdfdf42")); // NAN  // only gibberish at the end will work
console.log(parseFloat("42.45")); // 42.45

// -------------------------------------
// -------------- ARRAYS ---------------
// -------------------------------------

// -------------- OPERATIONS ----------
const initialArray = [1,2,3];
initialArray.push(4);
console.log(initialArray); // [ 1, 2, 3, 4 ]
initialArray.pop();
console.log(initialArray); // [ 1, 2, 3 ]
initialArray.shift();
console.log(initialArray); // [  2, 3 ]
initialArray.unshift(5);
console.log(initialArray); // [  5,2, 3 ]

const secondArray = [4,5,6,7];
console.log(initialArray.concat(secondArray)); //[ 5, 2, 3, 4,5, 6, 7]

// ----------- FOR EACH -------------------------
function logThing(str){
    console.log(str);
}
initialArray.forEach(logThing) // logThing is a callback, it will get run for every value in foreach

 

