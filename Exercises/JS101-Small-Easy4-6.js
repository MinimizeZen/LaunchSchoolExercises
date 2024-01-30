let readLine = require('readline-sync');
function prompt(msg) {
  console.log(`=> ${msg} `)
}
function Searching101() {
  const NUMBERNAME = ['1st', '2nd', '3rd', '4th', '5th', 'last']
  let numbers;
  let lastNum;
  while (true) {
    numbers = []
    for (let a = 0; a < 6; a++) {
      prompt(`Enter the ${NUMBERNAME[a]} number:`);
      numbers.push(Number(readLine.prompt()));
    }
    lastNum = numbers.pop()
    if (numbers.includes(lastNum)) {
      prompt(`The number ${lastNum} appears in ${numbers}`);
    }
    else {
      prompt(`The number ${lastNum} does not appears in ${numbers}`);
    }
    console.log();
    console.log("-".repeat(20));
    console.log();
  }
}
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
function PalindromicStrings() {
  console.log(isPalindrome('madam') === true);               // true
  console.log(isPalindrome('Madam') === false);               // false (case matters)
  console.log(isPalindrome("madam i'm adam") === false);      // false (all characters matter)
  console.log(isPalindrome('356653') === true);              // true
}
function isRealPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();
  console.log(str);
  return str === str.split("").reverse().join("");
}
function PalindromicStringsP2() {
  console.log(isRealPalindrome('madam') === true);               // true
  console.log(isRealPalindrome('Madam') === true);               // true
  console.log(isRealPalindrome("Madam, I'm Adam") === true);     // true (only alphanumerics matter)
  console.log(isRealPalindrome('356653') === true);              // true
  console.log(isRealPalindrome('356a653') === true);             // true
  console.log(isRealPalindrome('123ab321') === false);            // false        // true
}
function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}
function PalindromicNumbers() {
  console.log(isPalindromicNumber(34543) === true);        // true
  console.log(isPalindromicNumber(123210) === false);       // false
  console.log(isPalindromicNumber(22) === true);           // true
  console.log(isPalindromicNumber(5) === true);            // true
}
function runningTotal(arr) {
  let sum = 0
  return arr.map(elem => { sum += elem; return sum });
}
function RunningTotals() {
  console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
  console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
  console.log(runningTotal([3]));                    // [3]
  console.log(runningTotal([]));                     // []
}

function wordSizes(sentence) {
  let words = sentence.split(' ');
  let output = {}
  words.forEach(elem => output[elem.length] = (output[elem.length] || 0) + 1);
  delete output[0];
  return output;
}
function LetterCounter() {
  console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
  console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
  console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
  console.log(wordSizes(''));                                            // {}
}
function wordSizes2(sentence) {
  let words = sentence.replace(/[^a-zA-Z\d\s:]/g, "").split(' ');
  //console.log(words);
  let output = {}
  words.forEach(elem => output[elem.length] = (output[elem.length] || 0) + 1);
  delete output[0];
  return output;
}
function LetterCounterP2() {
  console.log(wordSizes2('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
  console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
  console.log(wordSizes2("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
  console.log(wordSizes2(''));                                            // {}
}
function swap(sentence) {
  let words = sentence.split(" ");
  words = words.map((elem) => elem.length > 1 ? elem.slice(elem.length - 1) + elem.slice(1, elem.length - 1) + elem.slice(0, 1) : elem);
  console.log(words);
  return words.join(" ");
}
function LetterSwap() {
  console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
  console.log(swap('Abcde'));                          // "ebcdA"
  console.log(swap('a'));                              // "a"
}
function stringToInteger(string) {
  return string.split('').reduce((accum, elem, index) => accum + 10 ** (string.length - index - 1) * elem, 0);
}
function ConvertaStringtoaNumber() {
  console.log(stringToInteger("4321") === 4321); // logs true
  console.log(stringToInteger("570") === 570); // logs true
}
function stringToSignedInteger(str) {
  return stringToInteger(str.replaceAll(/\W/g, "")) * (str[0] === '-' ? -1 : 1);
}
function ConvertaStringtoaSignedNumber() {
  console.log(stringToSignedInteger("4321") === 4321); // logs true
  console.log(stringToSignedInteger("-570") === -570); // logs true
  console.log(stringToSignedInteger("+100") === 100); // logs true
}
function integerToString(num) {
  const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let output = ''
  do {
    output = NUMBERS[num % 10] + output;
    num = Math.floor(num / 10);
  } while (num != 0)
  return output;
}
function ConvertaNumbertoaString() {
  console.log(integerToString(4321));        // "4321"
  console.log(integerToString(0));           // "0"
  console.log(integerToString(5000));        // "5000"
  console.log(integerToString(1234567890));  // "1234567890"
}
function signedIntegerToString(num) {
  const SIGN = { "-1": "-", "0": "", "1": "+" }
  return SIGN[Math.sign(num)] + integerToString(Math.abs(num));
}
function ConvertaSignedNumbertoaString() {
  console.log(signedIntegerToString(4321) === "+4321");
  console.log(signedIntegerToString(-123) === "-123");
  console.log(signedIntegerToString(0) === "0");
}
function dms(num) {
  let degree = Math.floor(num);
  let min = num % 1 * 60;
  let sec = min % 1 * 60;
  //console.log(`${degree}˚${Math.floor(min)}'${Math.floor(sec)}"`);
  return (`${degree}˚${Math.floor(min)}'${Math.floor(sec)}"`);
}
function CuteAngles() {
  console.log(dms(30));           // 30°00'00"
  console.log(dms(76.73));        // 76°43'48"
  console.log(dms(254.6));        // 254°35'59"
  console.log(dms(93.034773));    // 93°02'05"
  console.log(dms(0));            // 0°00'00"
  console.log(dms(360));          // 360°00'00" or 0°00'00"
}
function union(arr1, arr2) {
  let out = []
  for (let index = 0; index < arr1.length; index++) {
    if (!out.includes(arr1[index])) {
      out.push(arr1[index]);
    }
  }
  for (let index = 0; index < arr2.length; index++) {
    if (!out.includes(arr2[index])) {
      out.push(arr2[index]);
    }
  }
  return out;
}
function CombiningArrays() {
  console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
}
function halvsies(arr) {
  return [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))];
}
function Halvsies() {
  console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
  console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
  console.log(halvsies([5]));                // [[5], []]
  console.log(halvsies([]));                 // [[], []]
}
function findDup(arr) {
  let seen = [];
  let dup = "No Duplicate Exists"
  for (elem of arr) {
    if (seen.includes(elem)) {
      dup = elem;
      break;
    }
    seen.push(elem);
  }
  return dup;
}
function FindTheDuplicate() {
  console.log(findDup([1, 5, 3, 1]));                                // 1
  console.log(findDup([18, 9, 36, 96, 31, 19, 54, 75, 42, 15,
    38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
    14, 61, 90, 81, 8, 63, 95, 99, 30, 65,
    78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
    89, 10, 84, 1, 47, 68, 12, 33, 86, 60,
    41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
    55, 79, 80, 21, 39, 72, 13, 50, 6, 70,
    85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
    40, 23, 71, 62, 73, 32, 43, 24, 4, 56,
    7, 34, 57, 74, 45, 11, 88, 67, 5, 58]));    // 73
}
function interleave(arr1, arr2) {
  let out = []
  for (let index = 0; index < Math.max(arr1.length, arr2.length); index++) {
    if (arr1[index] !== undefined) {
      out.push(arr1[index]);
    }
    if (arr2[index] !== undefined) {
      out.push(arr2[index]);
    }
  }
  return out;
}
function CombineTwoLists() {
  console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
}
function multiplicativeAverage(arr) {
  return (arr.reduce((accum, elem) => accum * elem) / arr.length).toFixed(3);
}
function MultiplicativeAverage() {
  console.log(multiplicativeAverage([3, 5]));                   // "7.500"
  console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
}
function multiplyList(arr1, arr2) {
  return arr1.map((elem, index) => elem * arr2[index]);
}
function MultiplyLists() {
  console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
}
function digitList(num) {
  return String(num).split('');
}
function ListofDigits() {
  console.log(digitList(12345));       // [1, 2, 3, 4, 5]
  console.log(digitList(7));           // [7]
  console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
  console.log(digitList(444));         // [4, 4, 4]
}
function countOccurrences(arr) {
  let counter = {}
  arr.forEach(elem => counter[elem] = (counter[elem] || 0) + 1);
  Object.keys(counter).forEach(elem => console.log(`${elem} => ${counter[elem]}`));
}
function HowMany() {
  let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
    'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

  countOccurrences(vehicles);
}
function average(arr) {
  return Math.floor(arr.reduce((accum, elem) => accum + elem) / arr.length);
}
function ArrayAverage() {
  console.log(average([1, 5, 87, 45, 8, 8]));       // 25
  console.log(average([9, 47, 23, 95, 16, 52]));    // 40
}
function repeater(str) {
  return str.split("").map(elem => elem + elem).join("");
}
function DoubleChar() {
  console.log(repeater('Hello'));        // "HHeelllloo"
  console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
  console.log(repeater(''));             // ""
}
function doubleConsonants(str) {
  const EXCLUDE = ` ,./;'<>?:""'-=_+!@#$%^&*()\`1234567890`;
  return str.split("").map(elem => EXCLUDE.includes(elem) ? elem : elem + elem).join("");
}
function DoubleCharP2() {
  console.log(doubleConsonants('String'));          // "SSttrrinngg"
  console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
  console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
  console.log(doubleConsonants(''));                // ""
}
function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}
function ReverseNumber() {
  console.log(reverseNumber(12345));    // 54321
  console.log(reverseNumber(12213));    // 31221
  console.log(reverseNumber(456));      // 654
  console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
  console.log(reverseNumber(1));        // 1
}
function sequence(num) {
  let output = []
  for (let a = 1; a <= num; a++) {
    output.push(a)
  }
  return output;
}
function CountingUp() {
  console.log(sequence(5));    // [1, 2, 3, 4, 5]
  console.log(sequence(3));    // [1, 2, 3]
  console.log(sequence(1));    // [1]
}
function swapName(name) {
  return name.split(' ').reverse().join(', ')
}
function NameSwapping() {
  console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
}
function sequence(rep, inc) {
  let output = [];
  for (let a = 1; a <= rep; a++) {
    output.push(a * inc);
  }
  return output;
}
function SequenceCount() {
  console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
  console.log(sequence(4, -7));         // [-7, -14, -21, -28]
  console.log(sequence(3, 0));          // [0, 0, 0]
  console.log(sequence(0, 1000000));    // []
}
function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}
function ReverseIt() {
  console.log(reverseSentence(''));                       // ""
  console.log(reverseSentence('Hello World'));            // "World Hello"
  console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
}
function reverseWords(str) {
  let words = str.split(" ");
  words = words.map(elem => elem.length < 5 ? elem : elem.split('').reverse().join(''));
  return words.join(' ');
}
function ReverseItP2() {
  console.log(reverseWords('Professional'));             // "lanoisseforP"
  console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
  console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
}
function reverse(arr) {
  for (let a = 0; a < Math.floor(arr.length / 2); a++) {
    [arr[a], arr[arr.length - 1 - a]] = [arr[arr.length - 1 - a], arr[a]];
  }
  return arr
}
function ReversedArrays() {
  let list = [1, 2, 3, 4];
  let result = reverse(list);
  console.log(result); // logs [4,3,2,1]
  console.log(list === result); // logs true

  let list1 = ["a", "b", "c", "d", "e"];
  let result1 = reverse(list1);
  console.log(result1); // logs  ["e", "d", "c", "b", "a"]
  console.log(list1 === result1); // logs true

  let list2 = ["abc"];
  let result2 = reverse(list2);
  console.log(result2); // logs  ["abc"]
  console.log(list2 === result2); // logs true

  let list3 = [];
  let result3 = reverse(list3);
  console.log(result3); // logs []
  console.log(list3 === result3); // logs true
}
function isBalanced(str) {
  let bal = 0
  for (let a = 0; a < str.length; a++) {
    if (str[a] === "(") {
      bal++
    }
    if (str[a] === ")") {
      bal--;
    }
    if (bal < 0) {
      return false;
    }
  }
  return bal === 0;
}

function MatchingParentheses() {
  console.log(isBalanced("What (is) this?") === true);
  console.log(isBalanced("What is) this?") === false);
  console.log(isBalanced("What (is this?") === false);
  console.log(isBalanced("((What) (is this))?") === true);
  console.log(isBalanced("((What)) (is this))?") === false);
  console.log(isBalanced("Hey!") === true);
  console.log(isBalanced(")Hey!(") === false);
  console.log(isBalanced("What ((is))) up(") === false);
}
//Searching101();
//PalindromicStrings();
//PalindromicStringsP2();
//PalindromicNumbers();
//RunningTotals();
//LetterCounter();
//LetterCounterP2();
//LetterSwap();
//ConvertaStringtoaNumber() ;
//ConvertaStringtoaSignedNumber();
//ConvertaNumbertoaString();
//ConvertaSignedNumbertoaString();
//CuteAngles();
//CombiningArrays();
//Halvsies();
//FindTheDuplicate();
//CombineTwoLists();
//MultiplicativeAverage();
//MultiplyLists();
//ListofDigits();
//HowMany();
//ArrayAverage();
//DoubleChar();
//DoubleCharP2();
//ReverseNumber();
//CountingUp();
//NameSwapping();
//SequenceCount();
//ReverseIt();
//ReverseItP2();
//ReversedArrays();
//MatchingParentheses();




