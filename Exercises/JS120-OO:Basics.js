// 1)
console.log("Hello".constructor.name);
console.log([1, 2, 3].constructor.name);
console.log({ name: "Srdjan" }.constructor.name);
// 2)
// class Cat {}
// 3)
// let kitty = new Cat();
// 4) ,5), 6), 8), 9), 10), 2-5)
// const walkin = {
//   walk() {
//     return "Let's go for a walk!";
//   },
// };
// class Cat {
//   // constructor() {
//   constructor(name) {
//     this.name = name;
//     // console.log(`Hello! My name is ${this.name}!`);
//   }
//   // greet() {
//   personalGreeting() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
//   rename(name) {
//     this.rename = name;
//   }
//   static genericGreeting() {
//     console.log("Hello! I'm a cat!");
//   }
//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }
// Object.assign(Cat.prototype, walkin);
// let kitty = new Cat("Sophie");
// kitty.greet();
// 7)
// class Person {
//   constructor(name = "John Doe") {
//     this.name = name;
//   }
// }
// let person1 = new Person();
// let person2 = new Person("Pepe");
//
// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe
//
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
// let kitty2 = new Cat("Sophie");
// console.log(kitty2.greet());
// console.log(kitty2.walk());
// 6)
// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   },
// };
//
// class Fish {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this, swimMixin);
//   }
// }
//
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// class Maltese extends Dog {
//   constructor(name) {
//     super(name);
//     Object.assign(this, swimMixin);
//   }
// }
//
// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");
//
// console.log(dog1.swim());
// console.log(fish1.swim());
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
// const towMixin = {
//   tow() {
//     return "I can tow a trailer!";
//   },
// };
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//     Object.assign(this, towMixin);
//   }
// }
// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     Object.assign(this, towMixin);
//   }
// }
//
// class Car extends Vehicle {}
//
// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());
//
// let car = new Car(2015);
// console.log(car.year);
// // 1)
// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }
//   getWidth() {
//     return this.width;
//   }
//   getLength() {
//     return this.length;
//   }
//   getArea() {
//     return this.length * this.width;
//   }
// }
// let rect = new Rectangle(4, 5);
//
// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20
// 2)
// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }
// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25
// 3)
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }
//
// let fakeCat = Object.create(Cat.prototype); // your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name); // logs undefined
// console.log(fakeCat.speaks()); // logs undefined says meowwww.
// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// 4)
// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }
//   info() {
// return
// `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
//   }
// }
//
// let pudding = new Cat("Pudding", 7, "black and white");
// let butterscotch = new Cat("Butterscotch", 10, "tan and white");
//
// console.log(pudding.info());
// console.log(butterscotch.info());
// 5)
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
// return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }
// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, "cat", status);
//   }
//   introduce() {
//     return `${super.introduce()} Meow meow!`;
//   }
// }
// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "cat", status);
//     this.master = master;
//   }
//   greetMaster() {
//     console.log(`Hello ${this.master}! Woof, woof!`);
//   }
// }
// let cat = new Cat("Pepe", 2, "happy");
// console.log(
//   cat.introduce() ===
//     "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!",
// );
// logs true
// 6)
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  info() {
    return `${this.make} ${this.model}`;
  }
}
class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}
class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}
// 7) HelloHello and ByeBye
// 8)
// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }
// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase());
//   }
// }
// let person = new Person();
// let shouter = new Shouter();
//
// person.greeting("Hello. It's very nice to meet you.");
// // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
// 9)
// const walkWalkin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   },
// };
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//
//   gait() {
//     return "strolls";
//   }
// }
//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   gait() {
//     return "saunters";
//   }
// }
//
// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }
//
//   gait() {
//     return "runs";
//   }
// }
// Object.assign(Person.prototype, walkWalkin);
// Object.assign(Cat.prototype, walkWalkin);
// Object.assign(Cheetah.prototype, walkWalkin);
// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"
//
// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"
//
// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// "Flash runs forward"
// 10)
class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}
class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }
  addPet(pet) {
    this.pets.push(pet);
  }
  numberOfPets() {
    return this.pets.length;
  }
}
class Shelter {
  constructor() {
    this.owners = {};
  }
  adopt(owner, pet) {
    owner.addPet(pet);
    this.owners[owner.name] = owner;
  }
  printAdoptions() {
    for (let owner in this.owners) {
      console.log(`${owner} has adopted the following pets:`);
      this.owners[owner].pets.forEach((pet) =>
        console.log(`a ${pet.species} named ${pet.name}`),
      );
      console.log();
    }
  }
}
let butterscotch = new Pet("cat", "Butterscotch");
let pudding = new Pet("cat", "Pudding");
let darwin = new Pet("bearded dragon", "Darwin");
let kennedy = new Pet("dog", "Kennedy");
let sweetie = new Pet("parakeet", "Sweetie Pie");
let molly = new Pet("dog", "Molly");
let chester = new Pet("fish", "Chester");

let phanson = new Owner("P Hanson");
let bholmes = new Owner("B Holmes");

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
// 11)
class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log(
      [
        this.horizontalRule(),
        this.emptyLine(),
        this.messageLine(),
        this.emptyLine(),
        this.horizontalRule(),
      ].join("\n"),
    );
  }

  horizontalRule() {
    return `+-${"-".repeat(this.message.length)}-+`;
  }
  emptyLine() {
    return `| ${" ".repeat(this.message.length)} |`;
  }
  messageLine() {
    return `| ${this.message} |`;
  }
}
let banner1 = new Banner("To boldly go where no one has gone before.");
banner1.displayBanner();
let banner2 = new Banner("");
banner2.displayBanner();
// 1)
//you need to use `this` to access the properties of the instance object.
// 2)
//the price property of item is mutating each time discount is called
// 3)
function objectsEqual(obj1, obj2) {
  for (let key in obj1) {
    if (!(obj2.hasOwnProperty(key) && obj1[key] === obj2[key])) {
      return false;
    }
  }
  return Object.keys(obj1).length === Object.keys(obj2).length;
}

console.log(objectsEqual({ a: "foo" }, { a: "foo" })); // true
console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); // false
console.log(objectsEqual({ a: "foo", b: "bar" }, { b: "bar", a: "foo" })); // true
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); // false
//4)
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},
    info() {
      console.log(`${name} is a ${year} year student`);
    },
    listCourses() {
      console.log(this.courses);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(courseID, note) {
      if (!this.notes.hasOwnProperty(courseID)) {
        this.notes[courseID] = "";
      } else {
        this.notes[courseID] += "; ";
      }
      this.notes[courseID] += note;
    },
    viewNotes() {
      for (let key in this.courses) {
        console.log(
          `${this.courses[key].name}: ${this.notes[this.courses[key].code]}`,
        );
      }
    },
    updateNote(courseID, note) {
      this.notes[courseID] = [note];
    },
  };
}
// let foo = createStudent("Foo", "1st");
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: "Math", code: 101 });
// foo.addCourse({ name: "Advanced Math", code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, "Fun course");
// foo.addNote(101, "Remember to study for algebra");
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, "Difficult subject");
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, "Fun course");
// foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
// 1) NaN this refers to the global object with no explicit context
// 2)
let franchise = {
  name: "How to Train Your Dragon",
  allMovies: function () {
    // let self = this;
    return [1, 2, 3].map(
      function (number) {
        return this.name + " " + number;
      }.bind(this),
    );
  },
};

console.log(franchise.allMovies());
// 3)

function myFilter(array, func, thisArg) {
  let result = [];

  array.forEach(function (value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
};

myFilter(
  [2, 1, 3, 4, 5, 6, 9, 12],
  function (val) {
    return this.allowedValues.indexOf(val) >= 0;
  },
  filter,
); // returns [5, 6, 9]
// 1)
Object.prototype.ancestors = function () {
  let proto = Object.getPrototypeOf(this);
  if (proto !== Object.getPrototypeOf({})) {
    return [proto.name].concat(proto.ancestors());
  }
  return ["Object.prototype"];
};
// name property added to make objects easier to identify
let foo = { name: "foo" };
let bar = Object.create(foo);
bar.name = "bar";
let baz = Object.create(bar);
baz.name = "baz";
let qux = Object.create(baz);
qux.name = "qux";

console.log(qux.ancestors()); // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors()); // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors()); // returns ['foo', 'Object.prototype']
console.log(foo.ancestors()); // returns ['Object.prototype']
// 2)
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  fullName() {
    console.log(`${this.firstName} ${this.lastName}.`);
  }
  communicate() {
    console.log("Communicating");
  }
  eat() {
    console.log("sleeping");
  }
}
class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }
  diagnose() {
    console.log("Diagnosing");
  }
}
class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }
  teach() {
    console.log("Teaching");
  }
}
class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }
  study() {
    console.log("Studying");
  }
}
class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }
  research() {
    console.log("Researching");
  }
}
// 3)
class CircularBuffer {
  constructor(size) {
    this.buffer = [];
    this.size = size;
  }
  get(obj) {
    let out = this.buffer.shift();
    if (out === undefined) {
      out = null;
    }
    return out;
  }
  put(obj) {
    if (this.buffer.length === this.size) {
      this.buffer.shift();
    }
    this.buffer.push(obj);
  }
}
let buffer = new CircularBuffer(3);
console.log(buffer.get() === null);

console.log(buffer);
buffer.put(1);
buffer.put(2);
console.log(buffer.get() === 1);

console.log(buffer);
buffer.put(3);
buffer.put(4);
console.log(buffer.get() === 2);

console.log(buffer);
buffer.put(5);
buffer.put(6);
buffer.put(7);
console.log(buffer.get() === 5);
console.log(buffer.get() === 6);
console.log(buffer.get() === 7);
console.log(buffer.get() === null);
console.log(buffer);
let anotherbuffer = new CircularBuffer(4);
console.log(anotherbuffer.get() === null);

anotherbuffer.put(1);
anotherbuffer.put(2);
console.log(anotherbuffer.get() === 1);

anotherbuffer.put(3);
anotherbuffer.put(4);
console.log(anotherbuffer.get() === 2);

anotherbuffer.put(5);
anotherbuffer.put(6);
anotherbuffer.put(7);
console.log(anotherbuffer.get() === 4);
console.log(anotherbuffer.get() === 5);
console.log(anotherbuffer.get() === 6);
console.log(anotherbuffer.get() === 7);
console.log(anotherbuffer.get() === null);
