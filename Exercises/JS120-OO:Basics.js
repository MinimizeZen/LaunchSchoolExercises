// 1)
console.log("Hello".constructor.name);
console.log([1, 2, 3].constructor.name);
console.log({ name: "Srdjan" }.constructor.name);
// 2)
// class Cat {}
// 3)
// let kitty = new Cat();
// 4) ,5), 6), 8), 9), 10), 2-5)
const walkin = {
  walk() {
    return "Let's go for a walk!";
  },
};
class Cat {
  // constructor() {
  constructor(name) {
    this.name = name;
    // console.log(`Hello! My name is ${this.name}!`);
  }
  // greet() {
  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
  rename(name) {
    this.rename = name;
  }
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}
Object.assign(Cat.prototype, walkin);
let kitty = new Cat("Sophie");
// kitty.greet();
// 7)
class Person {
  constructor(name = "John Doe") {
    this.name = name;
  }
}
let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

//////////////////////////////////////////////////////////////////////////
// 1), 2), 3)
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
//   startEngine() {
//     return "Ready to go!";
//   }
// }
// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//     this.startEngine();
//   }
//   startEngine(speed) {
//     // console.log("Ready to go!");
//     return `${super.startEngine()} Drive ${speed}, please!`;
//   }
// }
// class Car extends Vehicle {}
// let truck = new Truck(2003);
// console.log(truck.year); // 2003
//
// let car = new Car(2015);
// console.log(car.year); // 2015
// // let truck1 = new Truck(2003, "Short");
// // console.log(truck1.year);
// // console.log(truck1.bedType);
// let truck1 = new Truck();
// console.log(truck1.startEngine("fast"));
//
// let truck2 = new Truck();
// console.log(truck2.startEngine("slow"));
// 5)
// const walkin = {
//   walk() {
//     return "Let's go for a walk!";
//   },
// };
let kitty2 = new Cat("Sophie");
console.log(kitty2.greet());
console.log(kitty2.walk());
// 6)
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  },
};

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {
  constructor(name) {
    super(name);
    Object.assign(this, swimMixin);
  }
}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());
// 7)
// const towMixin = {
//   tow() {
//     console.log("I can tow a trailer!");
//   },
// };
// class Truck {}
//
// Object.assign(Truck.prototype, towMixin);
//
// class Car {}
//
// let truck = new Truck();
// truck.tow();
// 8)
const towMixin = {
  tow() {
    return "I can tow a trailer!";
  },
};
class Vehicle {
  constructor(year) {
    this.year = year;
    Object.assign(this, towMixin);
  }
}
class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);
