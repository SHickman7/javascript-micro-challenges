// Create a function that takes in an array of arrays. Like so:
  // [
  //   [1, 5],
  //   [2],
  //   [5, 10, 3]
  // ]

// Your function must add up all of the numbers in all of the 
// arrays and return the value.

// Examples:
let nestedNumbers = [
  [1, 5],
  [2],
  [5, 10, 3]
]


// addNestedNumbers()
//     should evaluate to 26


function addNestedNumbers(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++){
    console.log (array [i]);
    for (let j = 0; j < array[i].length; j++){
      console.log( array[i][j])
    
 
    
    
    }
   
  }
  
}

console.log(addNestedNumbers(nestedNumbers));


try {
  module.exports = addNestedNumbers;
} catch (err) {
  // do nothing...
}
