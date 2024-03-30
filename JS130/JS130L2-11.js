// 1)
// no
// 2)
(function () {
  console.log("Sometimes, syntax isn't intuitive!");
})();
// 3) Name conflict.
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers); // ?
console.log(sum);
// 4)
(function (num) {
  for (let a = num; a >= 0; a--) {
    console.log(a);
  }
})(7);
// 5) no.
// 6)
let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);
// 7)
(function countdown(num) {
  console.log(num);
  if (num > 0) {
    countdown(num - 1);
  }
})(7);
