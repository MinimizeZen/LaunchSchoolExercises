class SumOfMultiples {
  constructor(...args) {
    this.set = args;
  }
  FindMultiples(num) {
    let list = new Set();
    for (let val of this.set) {
      for (let add = val; add < num; add += val) {
        list.add(add);
      }
    }
    return Array.from(list);
  }
  static sum(arr) {
    return arr.reduce((accum, elem) => accum + elem, 0);
  }

  static to(num) {
    let a = new SumOfMultiples(3, 5);
    return a.to(num);
  }
  to(num) {
    return SumOfMultiples.sum(this.FindMultiples(num));
  }
}
module.exports = SumOfMultiples;
