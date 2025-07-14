const numbers = [1, 2, 3, 4, 5];
// callback, Promise, Async.await

// Call Back Function
// function double(num) {
//   return num * 2;
// }
const double = (n) => n * 2;

// map-> Higher Order Function
// A function that accepts function as an arguments and also can return function
const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);

// map, filter , reduce
const isEven = (num) => num % 2; //True

const evenNumbers = numbers.filter(isEven); // [2, 4]
console.log(evenNumbers);

// sort
const descending = (a, b) => b - a;

const sortedNumbers = numbers.sort(descending);
console.log(sortedNumbers);

// Higher Order Function
// CallBack FUnction
//
