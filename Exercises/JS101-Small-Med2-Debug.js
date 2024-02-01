let readLine = require('readline-sync');
function prompt(msg) {
  console.log(`=> ${msg} `)
}
function triangle(s1, s2, s3) {
  let [min, med, max] = [s1, s2, s3].sort((a, b) => a - b)
  if (min === 0 || max - med - min > 0) {
    return "invalid";
  }
  if (s1 === s2 && s2 === s3) {
    return "equilateral";
  }
  if (s1 === s2 || s1 === s3 || s2 === s3) {
    return 'isosceles';
  }
  return "scalene";
}
function TriangleSides() {
  console.log(triangle(3, 3, 3));        // "equilateral"
  console.log(triangle(3, 3, 1.5));      // "isosceles"
  console.log(triangle(3, 4, 5));        // "scalene"
  console.log(triangle(0, 3, 3));        // "invalid"
  console.log(triangle(3, 1, 1));        // "invalid"
}
function featured(num) {
  for (let a = Math.ceil((num + 1) / 7) * 7; a <= 9876543201; a += 7) {
    if (a % 2 !== 0 && checkFeatured(a)) {
      return a;
    }
  }
  return "There is no possible number that fulfills those requirements.";
}
function checkFeatured(num) {
  let checked = [];
  for (char of String(num)) {
    if (checked.includes(char)) {
      return false;
    }
    checked.push(char);
  }
  return true;
}
function NextFeaturedNumberHigherthanaGivenValue() {
  console.log(featured(12));           // 21
  console.log(featured(20));           // 21
  console.log(featured(21));           // 35
  console.log(featured(997));          // 1029
  console.log(featured(1029));         // 1043
  console.log(featured(999999));       // 1023547
  console.log(featured(999999987));    // 1023456987
  console.log(featured(9876543186));   // 9876543201
  console.log(featured(9876543200));   // 9876543201
  console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
}
function bubbleSort(arr) {
  while (true) {
    let changed = false;
    for (let a = 1; a < arr.length; a++) {
      if (arr[a] < arr[a - 1]) {
        [arr[a], arr[a - 1]] = [arr[a - 1], arr[a]];
        changed = true;
      }
    }
    if (!changed) return
  }
}
function BubbleSort() {
  let array1 = [5, 3];
  bubbleSort(array1);
  console.log(array1);    // [3, 5]

  let array2 = [6, 2, 7, 1, 4];
  bubbleSort(array2);
  console.log(array2);    // [1, 2, 4, 6, 7]

  let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
  bubbleSort(array3);
  console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
}
function transpose(matrix) {
  let output = []
  for (let col = 0; col < matrix[0].length; col++) {
    output.push([])
    for (let row = 0; row < matrix.length; row++) {
      output[col][row] = matrix[row][col];
    }
  }
  return output;
}

function Transpose3x3Matrix() {
  const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ];

  let newMatrix = transpose(matrix);

  console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
  console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
}
function TransposeMxNMatrix() {
  const matrix = [
    [1, 5, 8, 5],
    [4, 7, 2, 0],
    [3, 9, 6, 1]
  ];

  let newMatrix = transpose(matrix);

  console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
  console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

  console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
  console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
  console.log(transpose([[1]]));                     // [[1]]

  console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
  // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
}
function rotate90(matrix) {
  let output = []
  for (let col = 0; col < matrix[0].length; col++) {
    output.push([])
    for (let row = matrix.length - 1; row >= 0; row--) {
      output[col][matrix.length - 1 - row] = matrix[row][col];
    }
  }
  return output;
}
function RotatingMatrix() {
  let matrix1 = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ];

  let matrix2 = [
    [3, 7, 4, 2],
    [5, 1, 0, 8],
  ];

  let newMatrix1 = rotate90(matrix1);
  let newMatrix2 = rotate90(matrix2);
  let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

  console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
  console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
  console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
}
function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}
function MergeSortedLists() {
  console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
  console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
  console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
  console.log(merge([1, 4, 5], []));             // [1, 4, 5]
}
function mergeSort(arr) {
  return arr.length === 1 ? arr : merge(mergeSort(arr.slice(0, arr.length / 2)), mergeSort(arr.slice(arr.length / 2)))
}
function MergeSort() {
  console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
  console.log(mergeSort([5, 3]));                 // [3, 5]
  console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

  console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
  // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

  console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
  // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
}
function binarySearch(arr, target, index = 0) {
  if (arr.length === 1) {
    return arr[0] === target ? index : -1
  }
  return target > arr[Math.floor(arr.length / 2) - 1] ? binarySearch(arr.slice(Math.floor(arr.length / 2)), target, index + Math.floor(arr.length / 2)) : binarySearch(arr.slice(0, Math.floor(arr.length / 2)), target, index);
}
function BinarySearch() {
  let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
  console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
  console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

  console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
  console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
  console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

  console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
  console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
}
function lightsOn(num) {
  let state = Array(num).fill(false);
  for (let a = 0; a <= num; a++) {
    for (let b = a; b < num; b += (a + 1)) {
      state[b] = !state[b];
    }
  }
  return state.map((elem, index) => elem ? index + 1 : false).filter(elem => elem);
}
function _1000Lights() {
  console.log(lightsOn(5));        // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

  console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
}
function star(num) {
  let space = (num - 3) / 2;
  for (let a = 0; a < num; a++) {
    if (a < Math.floor(num / 2)) {
      console.log(`${" ".repeat(a)}*${" ".repeat(space - a)}*${" ".repeat(space - a)}*${" ".repeat(a)}`)
    } else if (a === Math.floor(num / 2)) {
      console.log('*'.repeat(num))
    } else {
      console.log(`${" ".repeat(num - a - (num - 1) / 2 + space)}*${" ".repeat(a - 1 - (num - 1) / 2)}*${" ".repeat(a - 1 - (num - 1) / 2)}*${" ".repeat(num - a - (num - 1) / 2 + space)}`)
    }

  }
}
function SeeingStars() {
  star(7);
  star(9);
}
//TriangleSides();
//NextFeaturedNumberHigherthanaGivenValue();
//BubbleSort();
//Transpose3x3Matrix();
//TransposeMxNMatrix();
//RotatingMatrix()
//MergeSortedLists();
//MergeSort();
//BinarySearch()
//_1000Lights();
SeeingStars();
