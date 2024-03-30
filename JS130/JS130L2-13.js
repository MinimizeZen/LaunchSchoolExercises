// 1)
function foo1(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}
// 2)
// function foo2() {
//   return {
//     bar: function () {
//       console.log("bar");
//     },
//     qux: function (arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function (arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }
// 3)
// function foo3(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo3(1, 2, 3);
// let bar = obj.bar;
// let qux = obj.qux;
// let baz = obj.baz;
// 4)
// function foo(arr) {
//   return [arr[2], 5, arr[0]];
// }
//
// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];
// 5)
// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }
//
// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);
// 6)
// function product() {
//   console.log(arguments);
//   return Array.from(arguments).reduce((total, number) => total * number);
// }
//
// let result = product(2, 3, 4, 5);
// console.log(result);
// 7)
// const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo); // 42
// console.log(rest); // { bar: 3.1415, qux: 'abc' }
// 8)
// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: "a", b: "b" },
// };
//
// const first = obj.first;
// const second = obj.second;
// let restTemp = Object.assign({}, obj);
// delete restTemp.first;
// delete restTemp.second;
// let rest = Object.assign({}, obj);
// 9)
// const [first, second, trird] = [1, 2, 3];
// const { a1, b1, c1 } = { a: "a", b: "b", c: "c" };
// 10)
// const arr = [1, 2, 3];
// const [first, ...arr2] = arr;
// 11)
// const [, second] = arr;
//12)
// const obj = { a: "a", b: "b", c: "c" };
// const { c: tail, ...obj2 } = obj;
// 13)
// function sum(...nums) {
// return nums.reduce((accum, elem) => accum + elem, 0);
// }

// 14)
// console.log(sum(...arr));

// 15)
// >>>>>>>>>>>solution answer
// This invocation of prod uses spread syntax on
// the arr array to separate its elements into individual values.
// Those values are then passed as arguments into the prod function.
// Because the prod function only has two parameters,
// it is only the first two elements of the array that get passed in.
// num1 is initialized to the first element and num2
// is initialized to the second element.
// The third element is ignored.

// 16)
// line 7 is destructing all the enumerable owned properties of obj
// using the spread syntax.
// Those properties are then used to create a new object which is a
// shallow copy of obj
//
// line 8 is destructing obj using the rest syntax and assigning those
// properties to the obj3 obj, which creates a shallow copy of obj

// 17)
// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {
//     type: animalType,
//     age: age,
//     colors: colors,
//   };
// }
//
// let { type, age, colors } = qux();
// console.log(type); // cat
// console.log(age); // 9
// console.log(colors); // [ 'black', 'white' ]
//
// 18)
function sortMid(...args) {
  return {
    first: args[0],
    middle: [args[1], args[2], args[3]].sort(),
    last: args[args.length - 1],
  };
}
let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
let { first, last, middle } = sortMid(...arr);
console.log(sortMid(...arr));
