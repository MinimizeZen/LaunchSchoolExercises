function multisum(num) {
  let output = 0
  for (let a = 1; a <= num; a++) {
    (a % 3 === 0 || a % 5 === 0) ? output += a : output
  }
  return output
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
