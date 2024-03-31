// Finding prime numbers in an array efficiently.

const prompt = require("prompt-sync")({ sigint: true });

// findPrimes that takes an array of numbers as an argument and returns an array of prime numbers.
 findPrimes =(numbers) =>{
  let primes = [];// creating an empty array called primes to store the prime numbers that are found.
  //  code loops through each number in the input array and checks if it is prime. If it is, it is added to the primes array.
  for (let number of numbers) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  return primes;
}
// isPrime function that takes a number as an argument and returns a boolean value indicating whether the number is prime or not.
 isPrime =(number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let numbers = prompt("Enter a list of numbers separated by spaces: ");
//example: 1 2 3 4 5 6 7 8 9 10
numbers = numbers.split(" ").map(Number);
let primes = findPrimes(numbers);

console.log(primes);