//E2 Welcome Stranger:
/* function greetings(arr, obj) {
  console.log(`Hello, ${arr.join(" ")}! Nice to have a ${obj.title + " " + obj.occupation} around.`)
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
*/

let readLine = require('readline-sync');
/*
prompt("What is your name?");
let name = readLine.prompt();
prompt(name[name.length - 1] !== '!' ? `Hello ${name}.` : `Hello ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
*/
function prompt(msg) {
  console.log(`=> ${msg}`);
}
/*
  function multiply(num,num2){
    return num * num2;
  }
*/

/*
function square(num){
  return multiply(num,num);
}

*/
/*
prompt('Enter the first Number:');
let num1 = readLine.prompt();
prompt('Enter the second Number:');
let num2 = readLine.prompt();
prompt(`${num1} + ${num2} = ${num1 + num2}`)
prompt(`${num1} - ${num2} = ${num1 - num2}`)
prompt(`${num1} * ${num2} = ${num1 * num2}`)
prompt(`${num1} / ${num2} = ${num1 / num2}`)
prompt(`${num1} % ${num2} = ${num1 % num2}`)
prompt(`${num1} ** ${num2} = ${num1 ** num2}`)
*/
/*
function penultimate(str) {
  return str.split(' ').slice(-2, -1)[0];
}
console.log(penultimate("last word")); // logs true
console.log(penultimate("Launch School is great!")); // logs true
*/
/*
function xor(var1, var2) {
  return ((var1 || var2) && !(var1 && var2))
}
console.log(xor(5, 0));          // true
console.log(xor(false, true));   // true
console.log(xor(1, 1));         // true
console.log(xor(true, true));   // true
*/
/*
let oddities = (arr) => arr.filter((_, index) => (index + 1) % 2 !== 0)
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
*/
/*
let age_counter = Array.from({ length: 1000 }, () => (Math.random() * 100 + 20).toFixed(0));
age_counter = age_counter.reduce((accum, elem) => { accum[elem] = (accum[elem] || 1) + 1; return accum; }, {})
prompt(JSON.stringify(age_counter))
*/
/*
let currentAge = Number(readLine.question("What is your age?\n"));
let retirementAge = Number(readLine.question("At what age would you like to retire?\n")
);
console.log(`It's ${(new Date()).getFullYear()}. You will retire in ${(new Date()).getFullYear() + retirementAge - currentAge}. `);
console.log(`You have only ${retirementAge - currentAge} years of work to go!`);
*/
/*
function centerOf(str) {
  return str.length % 2 === 0 ? str.slice(str.length / 2 - 1, str.length / 2 + 1) : str[Math.floor(str.length / 2)];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));    // "x"
*/
/*
function negaive(num) {
  if (num > 0) { return num * -1 }
  return num
}
*/
/*
function crunch(str) {
  let out = ""
  str.split('').reduce((accum, elem) => {
    elem === accum ? undefined :
    out = out + elem; return elem;
  }
    , "")
  console.log(out)
}
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');    // ""
*/
/*
function logInBox(str) {
  console.log(`+${'-'.repeat(str.length + 2)}+`);
  console.log(`|${' '.repeat(str.length + 2)}|`);
  console.log(`| ${str} |`)
  console.log(`|${' '.repeat(str.length + 2)}|`);
  console.log(`+${'-'.repeat(str.length + 2)}+`);
}
logInBox('To boldly go where no one has gone before.');
logInBox('');
*/
/*
function stringy(size) {
  let output = "";
  for (let a = 0; a < size; a++) {
    let number = ((a % 2) === 0) ? 1 : 0;
    output += number;
  }
  return output;
}
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
*/
/*
function findFibonacciIndexByLength(num) {
  let fibber = [1n, 1n];
  let output = 2n
  while (String(fibber[fibber.length - 1]).length < num) {
    fibber.push(fibber[fibber.length - 2] + fibber[fibber.length - 1])
    output++;
  }
  console.log(output);
}
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
*/
/*
function triangle(num) {
  for (let a = 1; a <= num; a++) {
    console.log(`${' '.repeat(num - a)}${'*'.repeat(a)}`);
  }
}
triangle(9)
*/
/*
function wrappedTwice(num) {
  let str = String(num)
  //console.log(str.slice(0, Math.floor(str.length / 2)))
  //console.log(str.slice(Math.ceil(str.length / 2)))
  return str.slice(0, Math.floor(str.length / 2)) === str.slice(Math.ceil(str.length / 2)) ? num : num * 2;

}
let twice = (num) => console.log(wrappedTwice(num));
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
*/
/*
function cleanUp(str) {
  str = str.replace(/\W+/g, " "); 
  return str;
}
*/
