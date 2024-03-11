// 1) NaN the execution context of the area function is on rectangle.
// thus this.width returns undefined which gets cohersed into NaN
// 2)this.area = Rectangle.area().call(this)
// 3)
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.area = function () {
  return Math.PI * Math.pow(this.radius, 2);
};
let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty("area")); // => false
// 4) => true
// 5) => error
// 6)
//
// 7)
function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
Ninja.prototype.swing = function () {
  this.swung = true;
  return this;
};
let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung); // logs `true`
console.log(ninjaB.swing().swung); // logs `true`
//let ninjaA;

// {
// const Ninja = function () {
// this.swung = false;
// };

// ninjaA = new Ninja();
// }
// let ninjaB = new ninjaA.constructor();
// console.log(ninjaA.constructor === ninjaB.constructor);
// 8)
function User(first, last) {
  this.name = `${first} ${last}`;
  if (!(this instanceof User)) {
    return new User(first, last);
  }
}

let name = "Jane Doe";
let user1 = new User("John", "Doe");
let user2 = User("John", "Doe");

console.log(name); // => Jane Doe
console.log(user1.name); // => John Doe
console.log(user2.name); // => John Doe
