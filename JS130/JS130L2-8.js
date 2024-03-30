// 1) 1, 2, 3, 4
// 2) 1, 1, 1, 1
// 3) 1, 2, 1, 2
// 4) 1, 2, 1 ,2
// 5)
function makeMultipleLister(num) {
  let multiples = [];
  for (let a = 1; ; a++) {
    multiples.push(a * num);
    if (multiples[multiples.length - 1] > 100) {
      multiples.pop();
      break;
    }
  }
  return function () {
    multiples.forEach((elem) => console.log(elem));
  };
}
let lister = makeMultipleLister(17);
lister();
// 6)
let total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}
// 7) 150
// result = 6 + 24 +120;
// 8)
function later(func, arg) {
  return function () {
    func(arg);
  };
}
const logger = (message) => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!
// 9)
function later2(func, arg) {
  return function (...args) {
    func(arg, ...args);
  };
}
const notify = function (message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!
// 10)
function bindFunc(obj, func, ...args) {
  return function () {
    func.call(obj, ...args);
  };
}

let obj = {};
let boundFunc = bindFunc(obj, function () {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }
