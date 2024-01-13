let rlSync = require('readline-sync');
const SQMETERS_TO_FEET = 10.7639
console.log('Enter the length of the room in meters: ')
let rLength = rlSync.prompt()
console.log('Enter the width of the room in meters: ')
let rWidth = rlSync.prompt()
console.log(`The area of the room is ${rLength * rWidth} square meters (${(rLength * rWidth * SQMETERS_TO_FEET).toFixed(2)})`)

