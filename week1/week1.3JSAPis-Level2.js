// -----------------------------------------
// ---------------- CLASSES ----------------
// -----------------------------------------

class Animal {
    constructor(name,legCount){
        this.name = name;
        this.legCount = legCount;
    }
    static myType(){ // static function is realted to class not the objects
        console.log("Animal");
    }                  
    describe(){
        return `${this.name} has ${this.legCount} legs`;
    }
}

const dog = new Animal("dog",2);
console.log(dog.describe())
// console.log(dog.myType()) error
Animal.myType()

// ----------------------------------------------------
// ------------------ DATE ----------------------------
// ----------------------------------------------------

const currentDate = new Date();
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getTime()); // no. of seconds passed from 1970
// Now, why is cool, can find the time taken in execution of an operation usinig a difference


// ----------------------------------------------------
// ------------------- JSON ---------------------------
// ----------------------------------------------------

const users = {
    name: 'rupinder',
    age: 24,
    gender: 'male'
    }
    // to send this data somewhere
    const usersString = JSON.stringify(users);
    console.log(usersString);
    const usersObject = JSON.parse(usersString);
    console.log(usersObject);
    
    
// ----------------------------------------------------
// ---------------- MATH ------------------------------
// ----------------------------------------------------

console.log(Math.random()); // random number b/w 0 and 1 

// ----------------------------------------------------
// ------------------ OBJECT --------------------------
// ----------------------------------------------------

// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);

  
  