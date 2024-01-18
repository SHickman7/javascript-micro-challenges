// Create a function that takes in an array of employee objects.
// Each employee object will look something like this:
// { name: "Tony", yearsOfExperience: 10 }
// Your function should return the total years of experience for all of the employees.


//Goal:  To return the total years of experience (sum of properties in objects) for all of the employees listed (in an array)

//Plan: 
//start with a total of 0
//use For/Of loop to loop through the array or employees
  //and extract the yearsOfExperience values
//Then sum those yearsOfExperience values

// Examples:

// let employees = [
//   { name: "Tony", yearsOfExperience: 10 }, 
//   { name: "Carla", yearsOfExperience: 4 }
// ]
//
// calculateTotalYearsOfExperience(employees)
//     should evaluate to 14


let employees = [
     { name: "Tony", yearsOfExperience: 10 }, 
     { name: "Carla", yearsOfExperience: 4 }
   ]

function calculateTotalYearsOfExperience(array) {

  let total = 0;
  for (let employee of employees ){
    console.log (employee.yearsOfExperience)
    total += employee.yearsOfExperience;
  } 
  return total;

}
console.log('Total yearsOfExperience, expecting 14:',calculateTotalYearsOfExperience(employees));


try {
  module.exports = calculateTotalYearsOfExperience;
} catch (err) {
  // do nothing...
}
