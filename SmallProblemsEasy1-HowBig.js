let rlSync = require('readline-sync');
console.log('Enter the length of the room in meters: ')
let rLength = rlSync.prompt()
console.log('Enter the width of the room in meters: ')
let rWidth = rlSync.prompt()
console.log(`The area of the room is ${rLength * rWidth} square meters (${(rLength * rWidth * 10.7639).toFixed(2)})`)

