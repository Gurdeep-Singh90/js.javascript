const name = "Sagar"
const repoCount = 2

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
const gameName = new String(`Sagar-guru`) 

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "       sagar    "
console.log(newStringOne.trim());

const url = "https://sagar.com/sagar%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('akar'));

console.log(gameName.split('-'));
