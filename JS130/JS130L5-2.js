function delayLog() {
  for (var a = 1; a <= 10; a++) {
    setTimeout(() => {
      console.log(a);
    }, a * 1000);
  }
  setTimeout(() => {}, 5000);
}
delayLog();
// 2)
// 11 10 times
// 3)
//
setTimeout(function () {
  // 1
  console.log("Once"); // 5
}, 1000);

setTimeout(function () {
  // 2
  console.log("upon"); // 7
}, 3000);

setTimeout(function () {
  // 3
  console.log("a"); // 6
}, 2000);

setTimeout(function () {
  // 4
  console.log("time"); // 8
}, 4000);
// 4)
// g(), f(), d(), z(), n(), s(), q()
function afterNSeconds(func, dur, ...args) {
  setTime(func(...args), dur * 1000);
}
// 1)
let counter = 1;
function startCounting() {
  return setInterval(() => {
    console.log(counter);
    counter++;
  }, 1000);
}
let id = startCounting();
console.log(id);
// 2)
function stopCounting() {
  clearInterval(id);
}
setTimeout(() => {
  stopCounting();
}, 5000);
