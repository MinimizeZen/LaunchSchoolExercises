class RomanNumeral {
  static ROMAN_NUMERALS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  constructor(num) {
    this.num = num;
  }
  toRoman() {
    let Val = this.num;
    let RomanNum = "";
    let RomanNums = Object.keys(RomanNumeral.ROMAN_NUMERALS)
      .map((elem) => elem)
      .sort((a, b) => b - a);
    console.log(RomanNums);
    while (Val > 0) {
      let Operat = Number(RomanNums.find((elem) => elem <= Val));
      Val -= Operat;
      RomanNum += RomanNumeral.ROMAN_NUMERALS[Operat];
    }
    return RomanNum;
  }
}
module.exports = RomanNumeral;
