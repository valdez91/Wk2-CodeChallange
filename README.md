# Wk2-CodeChallange

### How to Run the Code

1.Clone this repository:

```
git clone git@github.com:your-username/your-repo-name.git
```

2.Install dependencies:

```
npm install

```

3.Run the application:

```
npm start
```

## Technologies used.

- JavaScript

- Node.js

- npm

## Quiz1

## swap case of characters in a string.

This is a simple quiz application that demonstrates how to swap the case of each character in a string in JavaScript.

### DESCRIPTION.

The prompt-sync package is required to create a synchronous prompt for user input.

```
const prompt = require("prompt-sync")({ sigint: true });
```

The swapCase function is defined, which takes a string as an argument.

Inside the swapCase function, the input string is split into an array of characters using the **_split("") method_**.

The **_map() method_** is called on the array of characters to create a new array where each character is transformed based on the specified callback function.

The callback function checks if the lowercase version of the character is equal to the character itself. If it is, that means the character is already lowercase, so it returns the uppercase version of the character. Otherwise, it returns the lowercase version of the character.

The new array of transformed characters is joined back into a string using the join("") method.

Finally, the input string is logged to the console, and the swapCase function is called on the input string and the result is logged to the console as well.

## Quiz2

## Generating an array of numbers between two values.

This is a simple quiz application that demonstrates how to generate an array of numbers based on a given start and end value.

### Description

The prompt-sync package is required to create a synchronous prompt for user input.

The generateArray function is defined, which takes a start value and an end value as arguments.

Inside the generateArray function, an empty array arr is created.

A for loop is used to iterate from the start value to the end value, incrementing the loop variable i by 1 on each iteration.

```
for (let i = start; i <= end; i++){}
```

On each iteration, the current value of **_i_** is pushed to the arr array.

Finally, the arr array is returned.

## Quiz3

## Finding prime numbers in an array efficiently.

This is a simple quiz application that demonstrates various operations on arrays such as addition, removal, and updating elements.

### Description

The prompt-sync package is required to create a synchronous prompt for user input.

The findPrimes function is defined to take an array of numbers as an argument and return an array of prime numbers. It creates an empty array called primes to store the prime numbers that are found.

A **_for...of loop_** is used to iterate through each number in the input array. If a number is prime (determined by the isPrime function), it is added to the primes array.

The isPrime function is defined to take a number as an argument and return a boolean value indicating whether the number is prime or not. It uses a for loop to check if the number can be divided evenly by any number in the range from 2 to less than the number itself. If it can, the function returns false (meaning the number is not prime). If the loop completes without finding any factors, the function returns true (meaning the number is prime).

The user is prompted to enter a list of numbers separated by spaces, which is then converted into an array of numbers using the split and map methods.

## Support and Contact Details

If you encounter any issues or have any questions, please contact vickemtoo97@gmail.com for support. I encourage you to submit any bugs or feature requests by creating a new issue on our GitHub repository: https://github.com/valdez91/Wk2-CodeChallange.

Thank you for using my project! I appreciate your support and welcome any feedback.

## Author & License

This project is created and maintained by Victor K. Kemboi.

This project is licensed under the MIT License.

Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms.
