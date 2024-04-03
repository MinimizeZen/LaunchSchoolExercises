class Anagram {
  constructor(str) {
    this.Str = str;
    this.sortedStr = this.Str.toLowerCase().split("").sort().join("");
  }
  match(arr) {
    let output = [];
    for (let str of arr) {
      if (
        output.includes(str) ||
        str.toLowerCase() === this.Str.toLowerCase()
      ) {
        continue;
      }
      if (str.toLowerCase().split("").sort().join("") === this.sortedStr) {
        output.push(str);
      }
    }
    return output;
  }
}
module.exports = Anagram;
