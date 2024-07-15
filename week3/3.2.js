// -------------- FETCH API ---------------------------
// browser exposes a function called fetch => to fetch a specific data fromt he backend


function getPersonData(){
    // alert("working")
    const response = fetch("https://fakerapi.it/api/v1/persons")
    .then((data)=>{
      data.json().then((data)=>{
        console.log(data);
      })
    });
    // console.log(response); // prints a promise
  }


  async function getPersonDataAsync(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    console.log(data);
  }


// --------- AUTHENTICATION ------------------------
// Hashing => 1 way
// Encryption => 2 way with a key