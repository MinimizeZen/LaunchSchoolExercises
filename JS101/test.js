{


  let a = [1];
  testFunc(a)

  //console.log(a)
  function testFunc(array) {
    array ? array[0] = 2 : null;
  }
}
//arr = [1]
//testFunc(arr)
//console.log(arr)
//console.log(a)

let a = 2;
let b = Math.floor(Math.random() * 2);
a *= b;

if (a = 2) {
  console.log('The value of `a` is two.');
} else {
  console.log('The value of `a` is NOT two.');
}


