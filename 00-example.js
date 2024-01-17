// Create a function that returns the string "Bears are good."

// Example:
// returnBearInfo()
//     should evaluate to "Bears are good."

function returnBearInfo() {
  return "Bears are good.";
}

console.log('Expecting to see: "Bears are good."',returnBearInfo());

try {
  module.exports = returnBearInfo;
} catch (err) {
  // do nothing
}
