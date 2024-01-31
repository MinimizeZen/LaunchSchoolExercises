let readLine = require('readline-sync');
function prompt(msg) {
  console.log(`=> ${msg} `)
}
function sum(num) {
  return String(num).split('').reduce((accum, elem) => accum += Number(elem), 0);
}
function SumOfDigits() {
  console.log(sum(23));           // 5
  console.log(sum(496));          // 19
  console.log(sum(123456789));    // 45
}
function alphabeticNumberSort(arr) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  return [...arr].sort((a, b) => NUMBER_WORDS[a].localeCompare(NUMBER_WORDS[b]));
}
function AlphabeticalNumbers() {
  console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
}
function multiplyAllPairs(arr1, arr2) {
  let output = []
  arr1.forEach(elem1 => arr2.forEach(elem2 => output.push(elem1 * elem2)));
  output.sort((a, b) => a - b);
  return output;
}
function MultiplyAllPairs() {
  console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
}
function leadingSubstrings(str) {
  let output = [];
  for (let a = 1; a <= str.length; a++) {
    output.push(str.substring(0, a));
  }
  return output;
}
function LeadingSubstrings() {
  console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
  console.log(leadingSubstrings('a'));        // ["a"]
  console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
}
function substrings(str) {
  let output = [];
  for (let a = 0; a < str.length; a++) {
    output.push(...leadingSubstrings(str.slice(a)));
  }
  return output;
}
function AllSubstrings() {
  console.log(substrings('abcde'));
}
function palindromes(str) {
  let output = []
  let allSubs = substrings(str);
  allSubs.forEach(elem => (elem.length > 1 && elem === elem.split('').reverse().join('')) ? output.push(elem) : undefined);
  return output;
}
function PalindromicSubstrings() {
  console.log(palindromes('abcd'));       // []
  console.log(palindromes('madam'));      // [ "madam", "ada" ]

  console.log(palindromes('hello-madam-did-madam-goodbye'));
  // returns
  // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  //   "-madam-", "madam", "ada", "oo" ]

  console.log(palindromes('knitting cassettes'));
  // returns
  // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
}
function sumOfSums(arr) {
  let output = 0
  arr.reduce((accum, elem) => { output += accum + elem; return accum + elem; }, 0);
  return output;
}
function SumofSums() {
  console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  console.log(sumOfSums([4]));              // 4
  console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
}
function buyFruit(arr) {
  let output = [];
  arr.forEach(elem => Array.from({ length: elem[1] }, () => output.push(elem[0])));
  return output;
}
function GroceryList() {
  console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
  // returns ["apple", "apple", "apple", "orange", "banana", "banana"]
}
function transactionsFor(id, transactions) {
  return transactions.filter(elem => elem['id'] === id);
}
function InventoryItemTransactions() {
  let transactions = [{ id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },];

  console.log(transactionsFor(101, transactions));
  // returns
  // [ { id: 101, movement: "in",  quantity:  5 },
  //   { id: 101, movement: "in",  quantity: 12 },
  //   { id: 101, movement: "out", quantity: 18 }, ]
}
function isItemAvailable(id, transactions) {
  let focusedTransactions = transactionsFor(id, transactions);
  let bal = 0;
  focusedTransactions.forEach(elem => elem['movement'] === 'in' ? bal += elem['quantity'] : bal -= elem['quantity']);
  return bal >= 0;
}
function InventoryItemAvailability() {
  let transactions = [{ id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },];

  console.log(isItemAvailable(101, transactions));     // false
  console.log(isItemAvailable(103, transactions));     // false
  console.log(isItemAvailable(105, transactions));     // true
}
function isUppercase(str) {
  return str === str.toUpperCase();
}
function UppercaseCheck() {
  console.log(isUppercase('t'));               // false
  console.log(isUppercase('T'));               // true
  console.log(isUppercase('Four Score'));      // false
  console.log(isUppercase('FOUR SCORE'));      // true
  console.log(isUppercase('4SCORE!'));         // true
  console.log(isUppercase(''));                // true
}
function removeVowels(str) {
  return str.map(str => str.replace(/[aeiou]/gi, ""));
}
function DeleteVowels() {
  console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
  console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
  console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
}
function wordCap(str) {
  return str.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join(' ');
}
function CapitalizeWords() {
  console.log(wordCap('four score and seven'));       // "Four Score And Seven"
  console.log(wordCap('the javaScript language'));    // "The Javascript Language"
  console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
}
function wordLengths(str) {
  if (!str) return [];
  let words = str.split(' ');
  let output = []
  words.forEach(elem => elem.length > 0 ? output.push(`${elem} ${elem.length}`) : undefined);
  return output;
}
function Howlongareyou() {
  console.log(wordLengths('cow sheep chicken'));
  // ["cow 3", "sheep 5", "chicken 7"]
  console.log(wordLengths('baseball hot dogs and apple pie'));
  // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

  console.log(wordLengths("It ain't easy, is it?"));
  // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

  console.log(wordLengths('Supercalifragilisticexpialidocious'));
  // ["Supercalifragilisticexpialidocious 34"]

  console.log(wordLengths(''));      // []
  console.log(wordLengths());        // []
}
function rotateArray(arr) {
  return !Array.isArray(arr) ? undefined : arr != false ? arr.slice(1).concat(arr[0]) : [];
}
function Rotation() {
  console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
  console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
  console.log(rotateArray(['a']));                    // ["a"]
  console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
  console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
  console.log(rotateArray([]));                       // []

  // return `undefined` if the argument is not an array
  rotateArray();                         // undefined
  rotateArray(1);                        // undefined


  // the input array is not mutated
  let array = [1, 2, 3, 4];
  console.log(rotateArray(array));                    // [2, 3, 4, 1]
  array;                                 // [1, 2, 3, 4]
}
function rotateRightmostDigits(num, count) {
  let str = String(num);
  return Number(str.slice(0, str.length - count) + str.slice(str.length - count + 1) + str[str.length - count]);// + str.slice(str.length - count);
}
function RotationP2() {
  console.log(rotateRightmostDigits(735291, 1));      // 735291
  console.log(rotateRightmostDigits(735291, 2));      // 735219
  console.log(rotateRightmostDigits(735291, 3));      // 735912
  console.log(rotateRightmostDigits(735291, 4));      // 732915
  console.log(rotateRightmostDigits(735291, 5));      // 752913
  console.log(rotateRightmostDigits(735291, 6));      // 352917
}
function maxRotation(num) {
  let rot = String(num).length
  for (let a = rot; a > 1; a--) {
    num = rotateRightmostDigits(num, a);
  }
  return num;
}
function RotationP3() {
  console.log(maxRotation(735291));          // 321579
  console.log(maxRotation(3));               // 3
  console.log(maxRotation(35));              // 53
  console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
  console.log(maxRotation(8703529146));      // 7321609845
}
function minilang(commands) {
  let com = commands.split(' ');
  let reg = 0;
  let stack = [];
  for (let a = 0; a < com.length; a++) {
    switch (com[a]) {
      case "PUSH":
        stack.push(reg);
        break;
      case "ADD":
        reg = reg + stack.pop();
        break;
      case "SUB":
        reg = reg - stack.pop();
        break;
      case "MULT":
        reg = reg * stack.pop();
        break;
      case "DIV":
        reg = Number.parseInt(reg / stack.pop());
        break;
      case "REMAINDER":
        reg = Number.parseInt(reg % stack.pop());
        break;
      case "POP":
        reg = stack.pop();
        break;
      case "PRINT":
        console.log(reg);
        break;
      default:
        reg = Number.parseInt(com[a]);
    }
  }
  console.log("-".repeat(50));
}
function StackMachineInterpretation() {
  minilang('PRINT');
  // 0

  minilang('5 PUSH 3 MULT PRINT');
  // 15

  minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
  // 5
  // 3
  // 8

  minilang('5 PUSH POP PRINT');
  // 5

  minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
  // 5
  // 10
  // 4
  // 7

  minilang('3 PUSH PUSH 7 DIV MULT PRINT');
  // 6

  minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
  // 12

  minilang('-3 PUSH 5 SUB PRINT');
  // 8

  minilang('6 PUSH');
  // (nothing is printed because the `program` argument has no `PRINT` commands)
}
function wordToDigit(words) {
  const NUMBER_WORDS = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
  };
  Object.keys(NUMBER_WORDS).forEach(elem => words = words.replaceAll(elem, NUMBER_WORDS[elem]));
  return words;
}
function WordtoDigit() {
  console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
  // "Please call me at 5 5 5 1 2 3 4. Thanks."
}
function fibonacci(num) {
  return num <= 2 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
}
function FibonacciNumbers() {
  console.log(fibonacci(1));       // 1
  console.log(fibonacci(2));       // 1
  console.log(fibonacci(3));       // 2
  console.log(fibonacci(4));       // 3
  console.log(fibonacci(5));       // 5
  console.log(fibonacci(12));      // 144
  console.log(fibonacci(20));      // 6765
}
function fibonacciP2(num) {
  let prev = 1;
  let out = 1;
  for (let a = 0; a < num - 2; a++) {
    [prev, out] = [out, prev + out];
  }
  return out

}
function FibonacciNumbersP2() {
  console.log(fibonacciP2(20));       // 6765
  console.log(fibonacciP2(50));       // 12586269025
  console.log(fibonacciP2(75));       // 2111485077978050
}
function fibonacciP3(num) {
  return memo[num] || (memo[num] = (num <= 2 ? 1 : fibonacciP3(num - 1) + fibonacciP3(num - 2)));
}
const memo = {};
function FibonacciNumbersP3() {
  console.log(fibonacciP3(20));       // 6765
  console.log(fibonacciP3(50));       // 12586269025
  console.log(fibonacciP3(75));       // 2111485077978050
}
//SumOfDigits();
//AlphabeticalNumbers();
//MultiplyAllPairs();
//LeadingSubstrings();
//AllSubstrings();
//PalindromicSubstrings();
//SumofSums();
//GroceryList();
//InventoryItemTransactions();
//InventoryItemAvailability()
//UppercaseCheck();
//DeleteVowels();
//CapitalizeWords();
//Howlongareyou();
//Rotation();
//RotationP2();
//RotationP3();
//StackMachineInterpretation();
//WordtoDigit();
//FibonacciNumbers();
//FibonacciNumbersP2();
FibonacciNumbersP3();








