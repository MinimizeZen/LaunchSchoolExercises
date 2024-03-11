//1) 2 baz is a prototype of of qux so it has access to the foo defined in qux
//2) 3
//when you assign 2to baz.
//foo baz gets its own foo property and when it's accessed, it returns its own
//property and it doesn't go into the prototype to check.
//3) 4 because baz still doesn't have its own foo property when baz.foo is
//is accessed it uses the one from its prototype which is 2
//4)
function assignProperty(obj, key, value) {
  if (obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = value;
    } else {
      assignProperty(Object.getPrototypeOf(obj), key, value);
    }
  }
}
let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
//5)no for/in includes prototype properties whilst Object.keys does not.
//6)
console.log(
  `You can use the truthy value of Object.getPrototypeOf() ${Object.getPrototypeOf(Object.create(null))}`,
);
