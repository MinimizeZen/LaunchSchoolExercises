// Rest Parameters
// function sum(...args) {
//   return args.reduce(function (a, b) {
//     return a + b;
//   });
// }
//
// console.log(sum(1, 4, 5, 6)); // 16
//
function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

let [firstName, middleName, lastName] = ["James", "Tiberius", "Kirk"];

console.log(formatName(firstName, middleName, lastName));
// logs: Kirk, James T.
function myBind(func, context, ...boundArgs) {
  return function (...args) {
    return func.call(context, ...boundArgs, ...args);
  };
}
function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
// Make a Stack
function newStack() {
  let stack = [];
  return {
    push(elem) {
      return stack.push(elem);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach((elem) => console.log(elem));
    },
  };
}
function delegate(context, methName, ...boundArgs) {
  return function (...args) {
    context[methName](...boundArgs, ...args);
  };
}

let foo = {
  name: "test",
  bar: function (greeting) {
    console.log(greeting + " " + this.name);
  },
};

let baz = {
  qux: delegate(foo, "bar", "hello"),
};

console.log(baz.qux()); // logs 'hello test';

foo.bar = function () {
  console.log("changed");
};

console.log(baz.qux()); // logs 'changed'
//Anonymizer
const DISPLAYNAMELENGTH = 18;
const DISPLAYCHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const Account = {
  displayName: "",
  init(email, password, firstName, lastName) {
    function anonymize() {
      let disp = "";
      for (let a = 0; a < DISPLAYNAMELENGTH; a++) {
        disp += DISPLAYCHARS[Math.floor(Math.random() * DISPLAYCHARS.length)];
      }
      console.log(">>>>>>>>" + disp);
      return disp;
    }
    function validatePassword(pass) {
      return pass === password;
    }
    return {
      displayName: anonymize(),
      firstName(pass) {
        if (validatePassword(pass)) {
          return firstName;
        } else {
          return "Invalid Password";
        }
      },
      resetPassword(pass, newPass) {
        if (validatePassword(pass)) {
          password = newPass;
          return true;
        } else {
          return "Invalid Password";
        }
      },
      email(pass) {
        if (validatePassword(pass)) {
          return email;
        } else {
          return "Invalid Password";
        }
      },
      reanonymize(pass) {
        if (validatePassword(pass)) {
          this.displayName = anonymize();
          return true;
        } else {
          return "Invalid Password";
        }
      },
    };
  },
};
let fooBar = Object.create(Account).init("foo@bar.com", "123456", "foo", "bar");
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName("123456")); // logs 'foo'
console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password';
console.log(fooBar.resetPassword("123456", "abc")); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize("abc"); // returns true
console.log(displayName === fooBar.displayName); // logs false

//Mini Inventory Management System
class Item {
  constructor(name, category, quantity) {
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.SKU =
      `${name[0]}${name[1]}${name[2]}${category[0]}${category[1]}`.toUpperCase();
  }
}
let ItemManager = {
  items: [],
  create(name, category, quantity) {
    if (name && category && quantity) {
      this.items.push(new Item(name, category, quantity));
    }
    return "Valid item";
  },
  update(code, updates) {
    for (let a = 0; a < this.items.length; a++) {
      if (this.items[a].SKU === code) {
        Object.assign(this.items[a], updates);
      }
    }
  },
  delete(code) {
    for (let a = 0; a < this.items.length; a++) {
      if (this.items[a].SKU === code) {
        this.items.splice(a, 1);
        a--;
      }
    }
  },
  inStock() {
    let report = [];
    for (let a = 0; a < this.items.length; a++) {
      if (this.items[a].quantity > 0) {
        report.push(this.items[a]);
      }
    }
    return report;
  },
  itemsInCategory(cate) {
    let report = [];
    for (let a = 0; a < this.items.length; a++) {
      if (this.items[a].category === cate) {
        report.push(this.items[a]);
      }
    }
    return report;
  },
};
let ReportManager = {
  target: undefined,
  init(target) {
    this.target = target;
  },
  reportInStock() {
    let report = "";
    this.target.items.forEach((elem) => {
      if (elem.quantity > 0) {
        report += `${elem.name} `;
      }
    });
    console.log(report);
    return report;
  },
  createReporter(code) {
    return {
      itemInfo(code) {
        for (let a = 0; a < ReportManager.target.length; a++) {
          if (this.items[a].SKU === code) {
            console.log(`skuCode: ${this.items[a].SKU}`);
            console.log(`itemName: ${this.items[a].name}`);
            console.log(`category: ${this.items[a].category}`);
            console.log(`quantity: ${this.items[a].quantity}`);
          }
        }
      },
    };
  },
};
ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update("SOCSP", { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory("sports");

ItemManager.delete("SOCSP");
// returns list the remaining 3 valid items
// (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
