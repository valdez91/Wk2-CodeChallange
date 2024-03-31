// swap case of characters in a string.

const prompt = require("prompt-sync")({ sigint: true });
// swapCase function that takes a string as an argument and returns a new string with each character's case swapped.
const swapCase=(str) =>{
  //mapping each character to a new character using a map function, and then joining the characters back into a string.
  return str.split("").map(char => char.toLowerCase() === char? char.toUpperCase() : char.toLowerCase()).join("");  
}

console.log("Enter a string to swap the case of its characters:");
// Example: 'The Quick Brown Fox'
let input = prompt();
console.log(swapCase(input));//'tHE qUICK bROWN fOX'