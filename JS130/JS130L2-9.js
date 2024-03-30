// PP
// 1)
function makeCounterLogger(num) {
  let counter = num;
  return function (num) {
    let dir = (num - counter) / Math.abs(num - counter);
    for (let a = counter; a !== num + dir; a += dir) {
      console.log(a);
    }
  };
}
let countlog = makeCounterLogger(5);
countlog(8);
console.log();
countlog(2);
// 2)
// function makeList() {
//   let list = [];
//   return function (item) {
//     if (!item) {
//       if (list.length !== 0) list.forEach((elem) => console.log(elem));
//       else console.log("The list is empty.");
//       return;
//     }
//     if (list.includes(item)) {
//       list.splice(list.indexOf(item), 1);
//       console.log(item + " removed");
//       return;
//     }
//     list.push(item);
//     console.log(item + " added");
//   };
// }
// let list = makeList();
// list();
// console.log();
// list("make breakfast");
// console.log();
// list("read book");
// console.log();
// list();
// console.log();
// list("make breakfast");
// console.log();
// list();
// console.log();
// 3)
function makeList() {
  let list = [];
  return {
    add(item) {
      list.push(item);
      console.log(item + " added");
    },
    remove(item) {
      list.splice(list.indexOf(item), 1);
      console.log(item + " removed");
    },
    list() {
      if (list.length !== 0) list.forEach((elem) => console.log(elem));
      else console.log("The list is empty.");
    },
  };
}
let list = makeList();
list.add("test");
list.list();
