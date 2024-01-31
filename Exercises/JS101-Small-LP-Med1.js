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
":"
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
Howlongareyou();

