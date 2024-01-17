// Create a function that takes in an array of numbers.
// Your function should return the sum of the first and last
// numbers from the array.

// Examples:

// addFirstAndLast([3, 2, 6])
//     should evaluate to 9

// addFirstAndLast([-9, 12, 33, 29])
//     should evaluate to 20

//My plan:
  //create a variable that taken in an array of numbers
  //the function should loop through the array and list the values of the array
  //the function should RETURN the sum of this first and last value


let firstArray = [ 3, 2, 6];
let secondArray = [-9, 12, 33, 29]

function addFirstAndLast(array) {
  for (let number of array){
     console.log(number);
  }
return array[0] + array[array.length-1]
}

console.log('Expecting a sum of 9:', addFirstAndLast(firstArray));
console.log('Expecting a sum of 20:', addFirstAndLast(secondArray));

try {
  module.exports = addFirstAndLast;
} catch (err) {
  // do nothing...
}