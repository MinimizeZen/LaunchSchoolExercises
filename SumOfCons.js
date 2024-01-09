let rlSync = require('readline-sync');
console.log("Please enter an integer greater than 0: ");
let integer = parseInt(rlSync.prompt());
console.log("Enter \"s\" to compute the sum, or \"p\" to compute the product. ");
let operation = rlSync.prompt()
operation = operation === "s" ? true : operation === "p" ? false : (console.log('Oops. Unknown operation.'), null);
if (operation === null) {
  return
}
let output = operation ? 0 : 1
for (let a = 1; a <= integer; a++) {
  operation ? output += a : output *= a;
}
console.log(`The${operation ? "sum" : "product"} of the integers between 1 and ${integer} is ${output}.`)



