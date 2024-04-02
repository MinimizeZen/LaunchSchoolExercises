let Triangle = require("./triangle.js");

describe("Triangle", () => {
  test("equilateral triangles have equal sides", () => {
    const triangle = new Triangle(2, 2, 2);
    expect(triangle.kind()).toEqual("equilateral");
  });

  test("larger equilateral triangles also have equal sides", () => {
    const triangle = new Triangle(10, 10, 10);
    expect(triangle.kind()).toEqual("equilateral");
  });

  test("isosceles triangles have last two sides equal", () => {
    const triangle = new Triangle(3, 4, 4);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles trianges have first and last sides equal", () => {
    const triangle = new Triangle(4, 3, 4);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles triangles have two first sides equal", () => {
    const triangle = new Triangle(4, 4, 3);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles triangles have in fact exactly two sides equal", () => {
    const triangle = new Triangle(10, 10, 2);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("scalene triangles have no equal sides", () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("scalene triangles have no equal sides at a larger scale too", () => {
    const triangle = new Triangle(10, 11, 12);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("scalene triangles have no equal sides in descending order either", () => {
    const triangle = new Triangle(5, 4, 2);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("very small triangles are legal", () => {
    const triangle = new Triangle(0.4, 0.6, 0.3);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("test triangles with no size are illegal", () => {
    expect(() => {
      new Triangle(0, 0, 0);
    }).toThrow();
  });

  test("triangles with negative sides are illegal", () => {
    expect(() => {
      new Triangle(3, 4, -5);
    }).toThrow();
  });

  test("triangles violating triangle inequality are illegal", () => {
    expect(() => {
      new Triangle(1, 1, 3);
    }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 2", () => {
    expect(() => {
      new Triangle(7, 3, 2);
    }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 3", () => {
    expect(() => {
      new Triangle(10, 1, 3);
    }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 4", () => {
    expect(() => {
      new Triangle(1, 1, 2);
    }).toThrow();
  });
});

let DNA = require("./dna.js");

describe("DNA", () => {
  test("no difference between empty strands", () => {
    let dna = new DNA("");
    expect(dna.hammingDistance("")).toBe(0);
  });

  test("no difference between identical strands", () => {
    let dna = new DNA("GGACTGA");
    expect(dna.hammingDistance("GGACTGA")).toBe(0);
  });

  test("complete hamming distance in small strand", () => {
    let dna = new DNA("ACT");
    expect(dna.hammingDistance("GGA")).toBe(3);
  });

  test("hamming distance in off by one strand", () => {
    let strand = "GGACGGATTCTGACCTGGACTAATTTTGGGG";
    let distance = "AGGACGGATTCTGACCTGGACTAATTTTGGGG";
    let dna = new DNA(strand);
    expect(dna.hammingDistance(distance)).toBe(19);
  });

  test("small hamming distance in middle somewhere", () => {
    let dna = new DNA("GGACG");
    expect(dna.hammingDistance("GGTCG")).toBe(1);
  });

  test("larger distance", () => {
    let dna = new DNA("ACCAGGG");
    expect(dna.hammingDistance("ACTATGG")).toBe(2);
  });

  test("ignores extra length on other strand when longer", () => {
    let dna = new DNA("AAACTAGGGG");
    expect(dna.hammingDistance("AGGCTAGCGGTAGGAC")).toBe(3);
  });

  test("ignores extra length on original strand when longer", () => {
    let dna = new DNA("GACTACGGACAGGGTAGGGAAT");
    let distance = "GACATCGCACACC";
    expect(dna.hammingDistance(distance)).toBe(5);
  });

  test("does not actually shorten original strand", () => {
    let dna = new DNA("AGACAACAGCCAGCCGCCGGATT");
    expect(dna.hammingDistance("AGGCAA")).toBe(1);
    expect(dna.hammingDistance("AGACATCTTTCAGCCGCCGGATTAGGCAA")).toBe(4);
    expect(dna.hammingDistance("AGG")).toBe(1);
  });
});

let RomanNumeral = require("./roman-numeral.js");

describe("RomanNumeral", () => {
  test("1", () => {
    let number = new RomanNumeral(1);
    expect(number.toRoman()).toBe("I");
  });

  test("2", () => {
    let number = new RomanNumeral(2);
    expect(number.toRoman()).toBe("II");
  });

  test("3", () => {
    let number = new RomanNumeral(3);
    expect(number.toRoman()).toBe("III");
  });

  test("4", () => {
    let number = new RomanNumeral(4);
    expect(number.toRoman()).toBe("IV");
  });

  test("5", () => {
    let number = new RomanNumeral(5);
    expect(number.toRoman()).toBe("V");
  });

  test("6", () => {
    let number = new RomanNumeral(6);
    expect(number.toRoman()).toBe("VI");
  });

  test("9", () => {
    let number = new RomanNumeral(9);
    expect(number.toRoman()).toBe("IX");
  });

  test("27", () => {
    let number = new RomanNumeral(27);
    expect(number.toRoman()).toBe("XXVII");
  });

  test("48", () => {
    let number = new RomanNumeral(48);
    expect(number.toRoman()).toBe("XLVIII");
  });

  test("59", () => {
    let number = new RomanNumeral(59);
    expect(number.toRoman()).toBe("LIX");
  });

  test("93", () => {
    let number = new RomanNumeral(93);
    expect(number.toRoman()).toBe("XCIII");
  });

  test("141", () => {
    let number = new RomanNumeral(141);
    expect(number.toRoman()).toBe("CXLI");
  });

  test("163", () => {
    let number = new RomanNumeral(163);
    expect(number.toRoman()).toBe("CLXIII");
  });

  test("402", () => {
    let number = new RomanNumeral(402);
    expect(number.toRoman()).toBe("CDII");
  });

  test("575", () => {
    let number = new RomanNumeral(575);
    expect(number.toRoman()).toBe("DLXXV");
  });

  test("911", () => {
    let number = new RomanNumeral(911);
    expect(number.toRoman()).toBe("CMXI");
  });

  test("1024", () => {
    let number = new RomanNumeral(1024);
    expect(number.toRoman()).toBe("MXXIV");
  });

  test("3000", () => {
    let number = new RomanNumeral(3000);
    expect(number.toRoman()).toBe("MMM");
  });
});
