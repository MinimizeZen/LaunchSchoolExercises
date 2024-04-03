class Octal {
  constructor(num) {
    num = String(num);
    if (num.length === num.replaceAll(/[^0-7]/g, "").length) {
      this.oct = String(num);
    } else {
      this.oct = "0";
    }
  }
  toDecimal() {
    let decimal = 0;
    let oct = this.oct.split("");
    for (let a = oct.length - 1; a >= 0; a--) {
      decimal += Number(oct[a]) * Math.pow(8, oct.length - 1 - a);
    }
    return decimal;
  }
}
module.exports = Octal;
