// Generating an array of numbers between two values.

const prompt = require("prompt-sync")({ sigint: true });

// generateArray function that takes two arguments, start and end, and generates an array of numbers between those two values (inclusive).
const generateArray =(start, end) =>{
    let arr = []; //creating an empty array called arr.
    for (let i = start; i <= end; i++) {  //using for loop to iterate over the numbers from start to end, incrementing i by 1 each time.
      arr.push(i);
    }
    return arr;
  }
  let start = Number(prompt("Enter the start number: "));//4
let end = Number(prompt("Enter the end number: ")); //7
console.log(generateArray(start, end));//[4,5,6,7]