class PerfectNumber {
  constructor(num) {
    this.num = num;
    if (num < 0 || !Number.isInteger(num)) {
      throw new Error("Invalid Number type");
    }
    this.type = PerfectNumber.Classify(this.num);
  }
  static FindDivs(num) {
    let list = [];
    for (let a = 1; a <= num / 2; a++) {
      if (num % a === 0) {
        list.push(a);
      }
    }
    return list;
  }
  static sum(arr) {
    return arr.reduce((accum, elem) => accum + elem, 0);
  }
  static Classify(num) {
    let total = PerfectNumber.sum(PerfectNumber.FindDivs(num));
    if (total < num) {
      return "deficient";
    }
    if (total > num) {
      return "abundant";
    }
    return "perfect";
  }
  static classify(num) {
    return new PerfectNumber(num).type;
  }
}
module.exports = PerfectNumber;
