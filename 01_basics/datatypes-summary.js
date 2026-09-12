// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 65654851n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"];
let myObj = {
    name: "Sagar",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof bigNumber); 




// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack {Primitive} -> provide data copy, Heap{Non-Primitive} -> provide data reference

let myYoutubename = "sagar-comedy-fun"

let anothername = myYoutubename 
anothername = "aasthakiduniya"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Sagar@google.com"

console.log(userOne.email);
console.log(userTwo.email);
