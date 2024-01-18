// Create a function that takes in an array of strings and
// a number.
// Your function should return a string that combines all of
// the array's values starting at the index position of the
// number that is passed into the function.


// Examples:

// smooshSomeStrings(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3)
//     should evaluate to "HiThere!"

// smooshSomeStrings(["Turtle", "dolphin", "Boop", "Beep", "Boop"], 1)
//     should evaluate to "dolphinBoopBeepBoop"


//Notes:
  //Looked up slice method
  // https://www.geeksforgeeks.org/remove-elements-from-a-javascript-array/


let array1 = ["ASDF", "BLAH", "Oh!", "Hi", "There!"];
let num1 = 3;

let array2 = ["Turtle", "dolphin", "Boop", "Beep", "Boop"]
let num2 = 1


function smooshSomeStrings(array, num){
  let newArray = array.slice(num);
  //console.log (newArray);

  newArray = (newArray.join(''));
  return newArray;

}
console.log(smooshSomeStrings (array1,num1));
console.log(smooshSomeStrings(array2, num2))


try {
  module.exports = smooshSomeStrings;
} catch (err) {
  // do nothing...
}
