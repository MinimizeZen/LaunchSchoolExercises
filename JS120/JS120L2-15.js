// 1) => undefined undefined is a undefined.
// returnVal is called without providing any context. the "this." in logReturnVal refers to the global object
// 2)

let turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription() {
    return (
      this.firstName + " " + this.lastName + " is a " + this.occupation + "."
    );
  },
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

// 3) use .bind(turk) on logReturnVal;
// 4) no. The unnamed function inside forEach causes the context to be lost this inside of it would refer to the global object. Title will work but series title will be undefined
// 5)
// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     let self = this;
//     this.titles.forEach(function (title) {
//       console.log(self.seriesTitle + ": " + title);
//     });
//   },
// };

// TESgames.listGames();

// 6)
// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     this.titles.forEach(function (title) {
//       console.log(this.seriesTitle + ": " + title);
//     }, this);
//   },
// };
//
// TESgames.listGames();
// 7)
const TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames: function () {
    this.titles.forEach((title) => {
      console.log(this.seriesTitle + ": " + title);
    });
  },
};

TESgames.listGames();

// 8) 0 increment is invoked without context this inside the function will be global
// 9)
let foo = {
  a: 0,
  incrementA: function () {
    let increment = function () {
      this.a += 1;
    }.bind(this);

    increment();
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
