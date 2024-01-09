let rlSync = require('readline-sync');
console.log('What is the bill? ');
let bill = parseInt(rlSync.prompt());
console.log('What is the tip percentage? ');
let tipPercent = parseFloat(rlSync.prompt());
console.log(`The total tip is $${bill * (tipPercent * 0.01)}`)
console.log(`The total is $${bill + bill * (tipPercent * 0.01)}`)
