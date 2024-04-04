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

let Anagram = require("./anagram.js");

describe("Anagram", () => {
  test("No matches returns empty array", () => {
    let detector = new Anagram("diaper");
    expect(detector.match(["hello", "world", "zombies", "pants"])).toEqual([]);
  });

  test("Detect simple anagram", () => {
    let detector = new Anagram("ant");
    let anagrams = detector.match(["tan", "stand", "at"]);
    expect(anagrams).toEqual(["tan"]);
  });

  test("Detect multiple anagrams", () => {
    let detector = new Anagram("master");
    let anagrams = detector.match(["stream", "pigeon", "maters"]);
    expect(anagrams.sort()).toEqual(["maters", "stream"]);
  });

  test("Do not confuse different duplicates", () => {
    let detector = new Anagram("galea");
    expect(detector.match(["eagle"])).toEqual([]);
  });

  test("Identical word is not anagram", () => {
    let detector = new Anagram("corn");
    let anagrams = detector.match([
      "corn",
      "dark",
      "Corn",
      "rank",
      "CORN",
      "cron",
      "park",
    ]);
    expect(anagrams).toEqual(["cron"]);
  });

  test("Eliminate anagrams with same checksum", () => {
    let detector = new Anagram("mass");
    expect(detector.match(["last"])).toEqual([]);
  });

  test("Eliminate anagram subsets", () => {
    let detector = new Anagram("good");
    expect(detector.match(["dog", "goody"])).toEqual([]);
  });

  test("Detect anagram", () => {
    let detector = new Anagram("listen");
    let anagrams = detector.match(["enlists", "google", "inlets", "banana"]);
    expect(anagrams).toEqual(["inlets"]);
  });

  test("Multiple anagrams", () => {
    let detector = new Anagram("allergy");
    let anagrams = detector.match([
      "gallery",
      "ballerina",
      "regally",
      "clergy",
      "largely",
      "leading",
    ]);
    expect(anagrams.sort()).toEqual(["gallery", "largely", "regally"]);
  });

  test("Anagrams are case-insensitive", () => {
    let detector = new Anagram("Orchestra");
    let anagrams = detector.match(["cashregister", "Carthorse", "radishes"]);
    expect(anagrams).toEqual(["Carthorse"]);
  });
});

let Scrabble = require("./scrabble.js");

describe("Scrabble", () => {
  test("empty word scores zero", () => {
    expect(new Scrabble("").score()).toBe(0);
  });

  test("whitespace scores zero", () => {
    expect(new Scrabble(" \t\n").score()).toBe(0);
  });

  test("nil scores zero", () => {
    expect(new Scrabble(null).score()).toBe(0);
  });

  test("scores very short word", () => {
    expect(new Scrabble("a").score()).toBe(1);
  });

  test("scores other very short word", () => {
    expect(new Scrabble("f").score()).toBe(4);
  });

  test("simple word scores the number of letters", () => {
    expect(new Scrabble("street").score()).toBe(6);
  });

  test("complicated words score more", () => {
    expect(new Scrabble("quirky").score()).toBe(22);
  });

  test("scores are case-insensitive", () => {
    expect(new Scrabble("OXYPHENBUTAZONE").score()).toBe(41);
  });

  test("convenient scoring", () => {
    expect(Scrabble.score("alacrity")).toBe(13);
  });
});

let PerfectNumber = require("./perfect-number.js");

describe("PerfectNumber", () => {
  test("negative raises error", () => {
    expect(() => {
      PerfectNumber.classify(-1);
    }).toThrow();
  });

  test("classify deficient", () => {
    expect(PerfectNumber.classify(13)).toEqual("deficient");
  });

  test("classify perfect", () => {
    expect(PerfectNumber.classify(28)).toEqual("perfect");
  });

  test("classify abundant", () => {
    expect(PerfectNumber.classify(12)).toEqual("abundant");
  });
});
let Octal = require("./octal.js");

describe("Octal", () => {
  test("octal 1 is decimal 1", () => {
    let octal = new Octal("1");
    expect(octal.toDecimal()).toBe(1);
  });

  test("octal 10 is decimal 8", () => {
    let octal = new Octal("10");
    expect(octal.toDecimal()).toBe(8);
  });

  test("octal 17 is decimal 15", () => {
    let octal = new Octal("17");
    expect(octal.toDecimal()).toBe(15);
  });

  test("octal 11 is decimal 9", () => {
    let octal = new Octal("11");
    expect(octal.toDecimal()).toEqual(9);
  });

  test("octal 130 is decimal 88", () => {
    let octal = new Octal("130");
    expect(octal.toDecimal()).toBe(88);
  });

  test("octal 2047 is decimal 1063", () => {
    let octal = new Octal("2047");
    expect(octal.toDecimal()).toBe(1063);
  });

  test("octal 7777 is decimal 4095", () => {
    let octal = new Octal("7777");
    expect(octal.toDecimal()).toBe(4095);
  });

  test("octal 1234567 is decimal 342391", () => {
    let octal = new Octal("1234567");
    expect(octal.toDecimal()).toBe(342391);
  });

  test("invalid octal is decimal 0", () => {
    let octal = new Octal("carrot");
    expect(octal.toDecimal()).toBe(0);
  });

  test("8 is seeen as invalid and returns 0", () => {
    let octal = new Octal("8");
    expect(octal.toDecimal()).toBe(0);
  });

  test("9 is seeen as invalid and returns 0", () => {
    let octal = new Octal("9");
    expect(octal.toDecimal()).toBe(0);
  });

  test("6789 is seeen as invalid and returns 0", () => {
    let octal = new Octal("6789");
    expect(octal.toDecimal()).toBe(0);
  });

  test("abc1z is seen as invalid and returns 0", () => {
    let octal = new Octal("abc1z");
    expect(octal.toDecimal()).toBe(0);
  });

  test("valid octal formatted string 011 is decimal 9", () => {
    let octal = new Octal("011");
    expect(octal.toDecimal()).toBe(9);
  });

  test("234abc is seen as invalid and returns 0", () => {
    let octal = new Octal("234abc");
    expect(octal.toDecimal()).toBe(0);
  });
});

let SumOfMultiples = require("./sumOfMultiples.js");

describe("sum of multiples", () => {
  test("sum to one", () => {
    expect(SumOfMultiples.to(1)).toEqual(0);
  });

  test("sum to three", () => {
    expect(SumOfMultiples.to(4)).toEqual(3);
  });

  test("sum to ten", () => {
    expect(SumOfMultiples.to(10)).toEqual(23);
  });

  test("sum to one hundred", () => {
    expect(SumOfMultiples.to(100)).toEqual(2_318);
  });

  test("sum to one thousand", () => {
    expect(SumOfMultiples.to(1000)).toEqual(233_168);
  });

  test("configurable 7 13 17 to 20", () => {
    let obj = new SumOfMultiples(7, 13, 17);
    expect(obj.to(20)).toEqual(51);
  });

  test("configurable 4 6 to 15", () => {
    let obj = new SumOfMultiples(4, 6);
    expect(obj.to(15)).toEqual(30);
  });

  test("configurable 5 6 8 to 150", () => {
    let obj = new SumOfMultiples(5, 6, 8);
    expect(obj.to(150)).toEqual(4_419);
  });

  test("configurable 43 47 to 10,000", () => {
    let obj = new SumOfMultiples(43, 47);
    expect(obj.to(10_000)).toEqual(2_203_160);
  });
});

let BeerSong = require("./beer-song.js");

describe("Beer Song", () => {
  test("first verse", () => {
    let expected =
      "99 bottles of beer on the wall, 99 bottles of beer.\n" +
      "Take one down and pass it around, 98 bottles of beer " +
      "on the wall.\n";

    expect(BeerSong.verse(99)).toBe(expected);
  });

  test("another verse", () => {
    let expected =
      "3 bottles of beer on the wall, 3 bottles of beer.\n" +
      "Take one down and pass it around, 2 bottles of beer " +
      "on the wall.\n";

    expect(BeerSong.verse(3)).toBe(expected);
  });

  test("2 bottles verse", () => {
    let expected =
      "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer " +
      "on the wall.\n";

    expect(BeerSong.verse(2)).toBe(expected);
  });

  test("1 bottle verse", () => {
    let expected =
      "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.\n";

    expect(BeerSong.verse(1)).toBe(expected);
  });

  test("no bottles verse", () => {
    let expected =
      "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";

    expect(BeerSong.verse(0)).toBe(expected);
  });

  test("a couple of verses", () => {
    let expected =
      "99 bottles of beer on the wall, 99 bottles of beer.\n" +
      "Take one down and pass it around, 98 bottles of beer " +
      "on the wall.\n\n98 bottles of beer on the wall, " +
      "98 bottles of beer.\nTake one down and pass it " +
      "around, 97 bottles of beer on the wall.\n";

    expect(BeerSong.verses(99, 98)).toBe(expected);
  });

  test("a few verses", () => {
    let expected =
      "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer " +
      "on the wall.\n\n1 bottle of beer on the wall, 1 " +
      "bottle of beer.\nTake it down and pass it around, " +
      "no more bottles of beer on the wall.\n\n" +
      "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";

    expect(BeerSong.verses(2, 0)).toBe(expected);
  });

  test("the whole song", () => {
    let expected = wholeSong();
    expect(BeerSong.lyrics()).toBe(expected);
  });
});

function wholeSong() {
  return (
    "99 bottles of beer on the wall, 99 bottles of beer.\n" +
    "Take one down and pass it around, 98 bottles of beer on the wall.\n\n" +
    "98 bottles of beer on the wall, 98 bottles of beer.\n" +
    "Take one down and pass it around, 97 bottles of beer on the wall.\n\n" +
    "97 bottles of beer on the wall, 97 bottles of beer.\n" +
    "Take one down and pass it around, 96 bottles of beer on the wall.\n\n" +
    "96 bottles of beer on the wall, 96 bottles of beer.\n" +
    "Take one down and pass it around, 95 bottles of beer on the wall.\n\n" +
    "95 bottles of beer on the wall, 95 bottles of beer.\n" +
    "Take one down and pass it around, 94 bottles of beer on the wall.\n\n" +
    "94 bottles of beer on the wall, 94 bottles of beer.\n" +
    "Take one down and pass it around, 93 bottles of beer on the wall.\n\n" +
    "93 bottles of beer on the wall, 93 bottles of beer.\n" +
    "Take one down and pass it around, 92 bottles of beer on the wall.\n\n" +
    "92 bottles of beer on the wall, 92 bottles of beer.\n" +
    "Take one down and pass it around, 91 bottles of beer on the wall.\n\n" +
    "91 bottles of beer on the wall, 91 bottles of beer.\n" +
    "Take one down and pass it around, 90 bottles of beer on the wall.\n\n" +
    "90 bottles of beer on the wall, 90 bottles of beer.\n" +
    "Take one down and pass it around, 89 bottles of beer on the wall.\n\n" +
    "89 bottles of beer on the wall, 89 bottles of beer.\n" +
    "Take one down and pass it around, 88 bottles of beer on the wall.\n\n" +
    "88 bottles of beer on the wall, 88 bottles of beer.\n" +
    "Take one down and pass it around, 87 bottles of beer on the wall.\n\n" +
    "87 bottles of beer on the wall, 87 bottles of beer.\n" +
    "Take one down and pass it around, 86 bottles of beer on the wall.\n\n" +
    "86 bottles of beer on the wall, 86 bottles of beer.\n" +
    "Take one down and pass it around, 85 bottles of beer on the wall.\n\n" +
    "85 bottles of beer on the wall, 85 bottles of beer.\n" +
    "Take one down and pass it around, 84 bottles of beer on the wall.\n\n" +
    "84 bottles of beer on the wall, 84 bottles of beer.\n" +
    "Take one down and pass it around, 83 bottles of beer on the wall.\n\n" +
    "83 bottles of beer on the wall, 83 bottles of beer.\n" +
    "Take one down and pass it around, 82 bottles of beer on the wall.\n\n" +
    "82 bottles of beer on the wall, 82 bottles of beer.\n" +
    "Take one down and pass it around, 81 bottles of beer on the wall.\n\n" +
    "81 bottles of beer on the wall, 81 bottles of beer.\n" +
    "Take one down and pass it around, 80 bottles of beer on the wall.\n\n" +
    "80 bottles of beer on the wall, 80 bottles of beer.\n" +
    "Take one down and pass it around, 79 bottles of beer on the wall.\n\n" +
    "79 bottles of beer on the wall, 79 bottles of beer.\n" +
    "Take one down and pass it around, 78 bottles of beer on the wall.\n\n" +
    "78 bottles of beer on the wall, 78 bottles of beer.\n" +
    "Take one down and pass it around, 77 bottles of beer on the wall.\n\n" +
    "77 bottles of beer on the wall, 77 bottles of beer.\n" +
    "Take one down and pass it around, 76 bottles of beer on the wall.\n\n" +
    "76 bottles of beer on the wall, 76 bottles of beer.\n" +
    "Take one down and pass it around, 75 bottles of beer on the wall.\n\n" +
    "75 bottles of beer on the wall, 75 bottles of beer.\n" +
    "Take one down and pass it around, 74 bottles of beer on the wall.\n\n" +
    "74 bottles of beer on the wall, 74 bottles of beer.\n" +
    "Take one down and pass it around, 73 bottles of beer on the wall.\n\n" +
    "73 bottles of beer on the wall, 73 bottles of beer.\n" +
    "Take one down and pass it around, 72 bottles of beer on the wall.\n\n" +
    "72 bottles of beer on the wall, 72 bottles of beer.\n" +
    "Take one down and pass it around, 71 bottles of beer on the wall.\n\n" +
    "71 bottles of beer on the wall, 71 bottles of beer.\n" +
    "Take one down and pass it around, 70 bottles of beer on the wall.\n\n" +
    "70 bottles of beer on the wall, 70 bottles of beer.\n" +
    "Take one down and pass it around, 69 bottles of beer on the wall.\n\n" +
    "69 bottles of beer on the wall, 69 bottles of beer.\n" +
    "Take one down and pass it around, 68 bottles of beer on the wall.\n\n" +
    "68 bottles of beer on the wall, 68 bottles of beer.\n" +
    "Take one down and pass it around, 67 bottles of beer on the wall.\n\n" +
    "67 bottles of beer on the wall, 67 bottles of beer.\n" +
    "Take one down and pass it around, 66 bottles of beer on the wall.\n\n" +
    "66 bottles of beer on the wall, 66 bottles of beer.\n" +
    "Take one down and pass it around, 65 bottles of beer on the wall.\n\n" +
    "65 bottles of beer on the wall, 65 bottles of beer.\n" +
    "Take one down and pass it around, 64 bottles of beer on the wall.\n\n" +
    "64 bottles of beer on the wall, 64 bottles of beer.\n" +
    "Take one down and pass it around, 63 bottles of beer on the wall.\n\n" +
    "63 bottles of beer on the wall, 63 bottles of beer.\n" +
    "Take one down and pass it around, 62 bottles of beer on the wall.\n\n" +
    "62 bottles of beer on the wall, 62 bottles of beer.\n" +
    "Take one down and pass it around, 61 bottles of beer on the wall.\n\n" +
    "61 bottles of beer on the wall, 61 bottles of beer.\n" +
    "Take one down and pass it around, 60 bottles of beer on the wall.\n\n" +
    "60 bottles of beer on the wall, 60 bottles of beer.\n" +
    "Take one down and pass it around, 59 bottles of beer on the wall.\n\n" +
    "59 bottles of beer on the wall, 59 bottles of beer.\n" +
    "Take one down and pass it around, 58 bottles of beer on the wall.\n\n" +
    "58 bottles of beer on the wall, 58 bottles of beer.\n" +
    "Take one down and pass it around, 57 bottles of beer on the wall.\n\n" +
    "57 bottles of beer on the wall, 57 bottles of beer.\n" +
    "Take one down and pass it around, 56 bottles of beer on the wall.\n\n" +
    "56 bottles of beer on the wall, 56 bottles of beer.\n" +
    "Take one down and pass it around, 55 bottles of beer on the wall.\n\n" +
    "55 bottles of beer on the wall, 55 bottles of beer.\n" +
    "Take one down and pass it around, 54 bottles of beer on the wall.\n\n" +
    "54 bottles of beer on the wall, 54 bottles of beer.\n" +
    "Take one down and pass it around, 53 bottles of beer on the wall.\n\n" +
    "53 bottles of beer on the wall, 53 bottles of beer.\n" +
    "Take one down and pass it around, 52 bottles of beer on the wall.\n\n" +
    "52 bottles of beer on the wall, 52 bottles of beer.\n" +
    "Take one down and pass it around, 51 bottles of beer on the wall.\n\n" +
    "51 bottles of beer on the wall, 51 bottles of beer.\n" +
    "Take one down and pass it around, 50 bottles of beer on the wall.\n\n" +
    "50 bottles of beer on the wall, 50 bottles of beer.\n" +
    "Take one down and pass it around, 49 bottles of beer on the wall.\n\n" +
    "49 bottles of beer on the wall, 49 bottles of beer.\n" +
    "Take one down and pass it around, 48 bottles of beer on the wall.\n\n" +
    "48 bottles of beer on the wall, 48 bottles of beer.\n" +
    "Take one down and pass it around, 47 bottles of beer on the wall.\n\n" +
    "47 bottles of beer on the wall, 47 bottles of beer.\n" +
    "Take one down and pass it around, 46 bottles of beer on the wall.\n\n" +
    "46 bottles of beer on the wall, 46 bottles of beer.\n" +
    "Take one down and pass it around, 45 bottles of beer on the wall.\n\n" +
    "45 bottles of beer on the wall, 45 bottles of beer.\n" +
    "Take one down and pass it around, 44 bottles of beer on the wall.\n\n" +
    "44 bottles of beer on the wall, 44 bottles of beer.\n" +
    "Take one down and pass it around, 43 bottles of beer on the wall.\n\n" +
    "43 bottles of beer on the wall, 43 bottles of beer.\n" +
    "Take one down and pass it around, 42 bottles of beer on the wall.\n\n" +
    "42 bottles of beer on the wall, 42 bottles of beer.\n" +
    "Take one down and pass it around, 41 bottles of beer on the wall.\n\n" +
    "41 bottles of beer on the wall, 41 bottles of beer.\n" +
    "Take one down and pass it around, 40 bottles of beer on the wall.\n\n" +
    "40 bottles of beer on the wall, 40 bottles of beer.\n" +
    "Take one down and pass it around, 39 bottles of beer on the wall.\n\n" +
    "39 bottles of beer on the wall, 39 bottles of beer.\n" +
    "Take one down and pass it around, 38 bottles of beer on the wall.\n\n" +
    "38 bottles of beer on the wall, 38 bottles of beer.\n" +
    "Take one down and pass it around, 37 bottles of beer on the wall.\n\n" +
    "37 bottles of beer on the wall, 37 bottles of beer.\n" +
    "Take one down and pass it around, 36 bottles of beer on the wall.\n\n" +
    "36 bottles of beer on the wall, 36 bottles of beer.\n" +
    "Take one down and pass it around, 35 bottles of beer on the wall.\n\n" +
    "35 bottles of beer on the wall, 35 bottles of beer.\n" +
    "Take one down and pass it around, 34 bottles of beer on the wall.\n\n" +
    "34 bottles of beer on the wall, 34 bottles of beer.\n" +
    "Take one down and pass it around, 33 bottles of beer on the wall.\n\n" +
    "33 bottles of beer on the wall, 33 bottles of beer.\n" +
    "Take one down and pass it around, 32 bottles of beer on the wall.\n\n" +
    "32 bottles of beer on the wall, 32 bottles of beer.\n" +
    "Take one down and pass it around, 31 bottles of beer on the wall.\n\n" +
    "31 bottles of beer on the wall, 31 bottles of beer.\n" +
    "Take one down and pass it around, 30 bottles of beer on the wall.\n\n" +
    "30 bottles of beer on the wall, 30 bottles of beer.\n" +
    "Take one down and pass it around, 29 bottles of beer on the wall.\n\n" +
    "29 bottles of beer on the wall, 29 bottles of beer.\n" +
    "Take one down and pass it around, 28 bottles of beer on the wall.\n\n" +
    "28 bottles of beer on the wall, 28 bottles of beer.\n" +
    "Take one down and pass it around, 27 bottles of beer on the wall.\n\n" +
    "27 bottles of beer on the wall, 27 bottles of beer.\n" +
    "Take one down and pass it around, 26 bottles of beer on the wall.\n\n" +
    "26 bottles of beer on the wall, 26 bottles of beer.\n" +
    "Take one down and pass it around, 25 bottles of beer on the wall.\n\n" +
    "25 bottles of beer on the wall, 25 bottles of beer.\n" +
    "Take one down and pass it around, 24 bottles of beer on the wall.\n\n" +
    "24 bottles of beer on the wall, 24 bottles of beer.\n" +
    "Take one down and pass it around, 23 bottles of beer on the wall.\n\n" +
    "23 bottles of beer on the wall, 23 bottles of beer.\n" +
    "Take one down and pass it around, 22 bottles of beer on the wall.\n\n" +
    "22 bottles of beer on the wall, 22 bottles of beer.\n" +
    "Take one down and pass it around, 21 bottles of beer on the wall.\n\n" +
    "21 bottles of beer on the wall, 21 bottles of beer.\n" +
    "Take one down and pass it around, 20 bottles of beer on the wall.\n\n" +
    "20 bottles of beer on the wall, 20 bottles of beer.\n" +
    "Take one down and pass it around, 19 bottles of beer on the wall.\n\n" +
    "19 bottles of beer on the wall, 19 bottles of beer.\n" +
    "Take one down and pass it around, 18 bottles of beer on the wall.\n\n" +
    "18 bottles of beer on the wall, 18 bottles of beer.\n" +
    "Take one down and pass it around, 17 bottles of beer on the wall.\n\n" +
    "17 bottles of beer on the wall, 17 bottles of beer.\n" +
    "Take one down and pass it around, 16 bottles of beer on the wall.\n\n" +
    "16 bottles of beer on the wall, 16 bottles of beer.\n" +
    "Take one down and pass it around, 15 bottles of beer on the wall.\n\n" +
    "15 bottles of beer on the wall, 15 bottles of beer.\n" +
    "Take one down and pass it around, 14 bottles of beer on the wall.\n\n" +
    "14 bottles of beer on the wall, 14 bottles of beer.\n" +
    "Take one down and pass it around, 13 bottles of beer on the wall.\n\n" +
    "13 bottles of beer on the wall, 13 bottles of beer.\n" +
    "Take one down and pass it around, 12 bottles of beer on the wall.\n\n" +
    "12 bottles of beer on the wall, 12 bottles of beer.\n" +
    "Take one down and pass it around, 11 bottles of beer on the wall.\n\n" +
    "11 bottles of beer on the wall, 11 bottles of beer.\n" +
    "Take one down and pass it around, 10 bottles of beer on the wall.\n\n" +
    "10 bottles of beer on the wall, 10 bottles of beer.\n" +
    "Take one down and pass it around, 9 bottles of beer on the wall.\n\n" +
    "9 bottles of beer on the wall, 9 bottles of beer.\n" +
    "Take one down and pass it around, 8 bottles of beer on the wall.\n\n" +
    "8 bottles of beer on the wall, 8 bottles of beer.\n" +
    "Take one down and pass it around, 7 bottles of beer on the wall.\n\n" +
    "7 bottles of beer on the wall, 7 bottles of beer.\n" +
    "Take one down and pass it around, 6 bottles of beer on the wall.\n\n" +
    "6 bottles of beer on the wall, 6 bottles of beer.\n" +
    "Take one down and pass it around, 5 bottles of beer on the wall.\n\n" +
    "5 bottles of beer on the wall, 5 bottles of beer.\n" +
    "Take one down and pass it around, 4 bottles of beer on the wall.\n\n" +
    "4 bottles of beer on the wall, 4 bottles of beer.\n" +
    "Take one down and pass it around, 3 bottles of beer on the wall.\n\n" +
    "3 bottles of beer on the wall, 3 bottles of beer.\n" +
    "Take one down and pass it around, 2 bottles of beer on the wall.\n\n" +
    "2 bottles of beer on the wall, 2 bottles of beer.\n" +
    "Take one down and pass it around, 1 bottle of beer on the wall.\n\n" +
    "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take it down and pass it around, no more bottles of beer on the wall.\n\n" +
    "No more bottles of beer on the wall, no more bottles of beer.\n" +
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
  );
}

let Series = require("./series.js");

describe("Series", () => {
  test("test simple slices of one", () => {
    let series = new Series("01234");
    expect(series.slices(1)).toEqual([[0], [1], [2], [3], [4]]);
  });

  test("test simple slices of one again", () => {
    let series = new Series("92834");
    expect(series.slices(1)).toEqual([[9], [2], [8], [3], [4]]);
  });

  test("test simple slices of two", () => {
    let series = new Series("01234");
    expect(series.slices(2)).toEqual([
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
  });

  test("test other slices of two", () => {
    let series = new Series("98273463");
    let expected = [
      [9, 8],
      [8, 2],
      [2, 7],
      [7, 3],
      [3, 4],
      [4, 6],
      [6, 3],
    ];
    expect(series.slices(2)).toEqual(expected);
  });

  test("test simple slices of two again", () => {
    let series = new Series("37103");
    expect(series.slices(2)).toEqual([
      [3, 7],
      [7, 1],
      [1, 0],
      [0, 3],
    ]);
  });

  test("test simple slices of three", () => {
    let series = new Series("01234");
    expect(series.slices(3)).toEqual([
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  test("test simple slices of three again", () => {
    let series = new Series("31001");
    expect(series.slices(3)).toEqual([
      [3, 1, 0],
      [1, 0, 0],
      [0, 0, 1],
    ]);
  });

  test("test other slices of three", () => {
    let series = new Series("982347");
    let expected = [
      [9, 8, 2],
      [8, 2, 3],
      [2, 3, 4],
      [3, 4, 7],
    ];
    expect(series.slices(3)).toEqual(expected);
  });

  test("test simple slices of four", () => {
    let series = new Series("01234");
    expect(series.slices(4)).toEqual([
      [0, 1, 2, 3],
      [1, 2, 3, 4],
    ]);
  });

  test("test simple slices of four again", () => {
    let series = new Series("91274");
    expect(series.slices(4)).toEqual([
      [9, 1, 2, 7],
      [1, 2, 7, 4],
    ]);
  });

  test("test simple slices of five", () => {
    let series = new Series("01234");
    expect(series.slices(5)).toEqual([[0, 1, 2, 3, 4]]);
  });

  test("test simple slices of five again", () => {
    let series = new Series("81228");
    expect(series.slices(5)).toEqual([[8, 1, 2, 2, 8]]);
  });

  test("test simple slice that blows up", () => {
    let series = new Series("01234");
    expect(() => {
      series.slices(6);
    }).toThrow();
  });

  test("test more complicated slice that blows up", () => {
    let sliceString = "01032987583";
    let series = new Series(sliceString);
    expect(() => {
      series.slices(sliceString.length + 1);
    }).toThrow();
  });
});

const Diamond = require("./diamond.js");

describe("Diamond", () => {
  test("letter a", () => {
    let answer = Diamond.makeDiamond("A");
    expect(answer).toBe("A\n");
  });

  test("letter b", () => {
    let answer = Diamond.makeDiamond("B");
    expect(answer).toBe(" A \nB B\n A \n");
  });

  test("letter c", () => {
    let answer = Diamond.makeDiamond("C");
    let expected = "  A  \n" + " B B \n" + "C   C\n" + " B B \n" + "  A  \n";
    expect(answer).toBe(expected);
  });

  test("letter e", () => {
    let answer = Diamond.makeDiamond("E");
    let expected =
      "    A    \n" +
      "   B B   \n" +
      "  C   C  \n" +
      " D     D \n" +
      "E       E\n" +
      " D     D \n" +
      "  C   C  \n" +
      "   B B   \n" +
      "    A    \n";
    expect(answer).toBe(expected);
  });
});

let Robot = require("./robot-name.js");
Math.seedrandom = require("seedrandom");

describe("Robot Name", () => {
  const NAME_REGEXP = /^[A-Z]{2}\d{3}$/;
  const DIFFERENT_ROBOT_NAME_SEED = 1234;
  const SAME_INITIAL_ROBOT_NAME_SEED = 1000;

  test("has name", () => {
    expect(new Robot().name()).toMatch(NAME_REGEXP);
  });

  test("name sticks", () => {
    let robot = new Robot();
    let name = robot.name();
    expect(robot.name()).toBe(name);
  });

  test("different robots have different names", () => {
    Math.seedrandom(DIFFERENT_ROBOT_NAME_SEED);

    let robot1 = new Robot();
    let robot2 = new Robot();

    expect(robot1.name()).not.toBe(robot2.name());
  });

  test("different name when chosen name is taken", () => {
    Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
    let robot1 = new Robot();
    Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
    let robot2 = new Robot();
    expect(robot1.name()).not.toBe(robot2.name());
  });

  test("reset name", () => {
    Math.seedrandom(DIFFERENT_ROBOT_NAME_SEED);

    let robot = new Robot();
    let name1 = robot.name();
    robot.reset();
    let name2 = robot.name();

    expect(name1).not.toBe(name2);
  });
});

const Clock = require("./clock.js");

describe("Clock", () => {
  test("on the hour", () => {
    expect(Clock.at(8).toString()).toBe("08:00");
    expect(Clock.at(9).toString()).toBe("09:00");
  });

  test("past the hour", () => {
    expect(Clock.at(11, 9).toString()).toBe("11:09");
  });

  test("add a few minutes", () => {
    let clock = Clock.at(10).add(3);
    expect(clock.toString()).toBe("10:03");
  });

  test("adding does not mutate", () => {
    let oldClock = Clock.at(10);
    let newClock = oldClock.add(3);
    expect(newClock).not.toBe(oldClock);
  });

  test("subtract fifty minutes", () => {
    let clock = Clock.at(0).subtract(50);
    expect(clock.toString()).toBe("23:10");
  });

  test("subtracting does not mutate", () => {
    let oldClock = Clock.at(10);
    let newClock = oldClock.subtract(50);
    expect(newClock).not.toBe(oldClock);
  });

  test("add over an hour", () => {
    let clock = Clock.at(10).add(61);
    expect(clock.toString()).toBe("11:01");
  });

  test("wrap around at midnight", () => {
    let clock = Clock.at(23, 30).add(60);
    expect(clock.toString()).toBe("00:30");
  });

  test("add more than a day", () => {
    let clock = Clock.at(10).add(3061);
    expect(clock.toString()).toBe("13:01");
  });

  test("subtract a few minutes", () => {
    let clock = Clock.at(10, 30).subtract(5);
    expect(clock.toString()).toBe("10:25");
  });

  test("subtract minutes", () => {
    let clock = Clock.at(10).subtract(90);
    expect(clock.toString()).toBe("08:30");
  });

  test("equivalent clocks", () => {
    let clock1 = Clock.at(15, 37);
    let clock2 = Clock.at(15, 37);

    expect(clock1.isEqual(clock2)).toBe(true);
  });

  test("wrap around at negative midnight", () => {
    let clock = Clock.at(0, 30).subtract(60);
    expect(clock.toString()).toBe("23:30");
  });

  test("subtract more than a day", () => {
    let clock = Clock.at(10).subtract(3061);
    expect(clock.toString()).toBe("06:59");
  });

  test("inequivalent clocks", () => {
    let clock1 = Clock.at(15, 37);
    let clock2 = Clock.at(15, 36);
    let clock3 = Clock.at(14, 37);

    expect(clock1.isEqual(clock2)).toBe(false);
    expect(clock1.isEqual(clock3)).toBe(false);
  });

  test("wrap around backwards", () => {
    let clock = Clock.at(0, 30).subtract(60);
    expect(clock.toString()).toEqual("23:30");
  });
});

("use strict");

let Meetup = require("./meetup.js");

function dateAsString(year, month, day) {
  let date = new Date(year, month - 1, day);
  return date.toString();
}

// Define a class Meetup with a constructor taking a month and a year
// and a method day(weekday, schedule).
// where weekday is one of: monday, tuesday, wednesday, etc.
// and schedule is: first, second, third, fourth, fifth, last, or teenth.

/* eslint-disable-next-line max-lines-per-function, max-statements */
describe("meetup()", () => {
  test("test first Monday of March 2013", () => {
    let meetup = new Meetup(2013, 3);
    let expected = dateAsString(2013, 3, 4);
    expect(meetup.day("Monday", "first").toString()).toBe(expected);
  });

  test("test first Monday of april 2013", () => {
    let meetup = new Meetup(2013, 4);
    let expected = dateAsString(2013, 4, 1);
    expect(meetup.day("monday", "FIRST").toString()).toBe(expected);
  });

  test("test first Tuesday of may 2013", () => {
    let meetup = new Meetup(2013, 5);
    let expected = dateAsString(2013, 5, 7);
    expect(meetup.day("Tuesday", "first").toString()).toBe(expected);
  });

  test("test first Wednesday of june 2013", () => {
    let meetup = new Meetup(2013, 6);
    let expected = dateAsString(2013, 6, 5);
    expect(meetup.day("wednesday", "first").toString()).toBe(expected);
  });

  test("test first Thursday of july 2013", () => {
    let meetup = new Meetup(2013, 7);
    let expected = dateAsString(2013, 7, 4);
    expect(meetup.day("Thursday", "first").toString()).toBe(expected);
  });

  test("test first Friday of august 2013", () => {
    let meetup = new Meetup(2013, 8);
    let expected = dateAsString(2013, 8, 2);
    expect(meetup.day("Friday", "first").toString()).toBe(expected);
  });

  test("test first Saturday of september 2013", () => {
    let meetup = new Meetup(2013, 9);
    let expected = dateAsString(2013, 9, 7);
    expect(meetup.day("Saturday", "first").toString()).toBe(expected);
  });

  test("test first Sunday of october 2013", () => {
    let meetup = new Meetup(2013, 10);
    let expected = dateAsString(2013, 10, 6);
    expect(meetup.day("Sunday", "first").toString()).toBe(expected);
  });

  test("test second Monday of november 2013", () => {
    let meetup = new Meetup(2013, 11);
    let expected = dateAsString(2013, 11, 11);
    expect(meetup.day("Monday", "second").toString()).toBe(expected);
  });

  test("test second Tuesday of december 2013", () => {
    let meetup = new Meetup(2013, 12);
    let expected = dateAsString(2013, 12, 10);
    expect(meetup.day("Tuesday", "second").toString()).toBe(expected);
  });

  test("test second Wednesday of january 2014", () => {
    let meetup = new Meetup(2014, 1);
    let expected = dateAsString(2014, 1, 8);
    expect(meetup.day("Wednesday", "second").toString()).toBe(expected);
  });

  test("test second Thursday of february 2014", () => {
    let meetup = new Meetup(2014, 2);
    let expected = dateAsString(2014, 2, 13);
    expect(meetup.day("Thursday", "second").toString()).toBe(expected);
  });

  test("test second Friday of march 2014", () => {
    let meetup = new Meetup(2014, 3);
    let expected = dateAsString(2014, 3, 14);
    expect(meetup.day("Friday", "second").toString()).toBe(expected);
  });

  test("test second Saturday of april 2014", () => {
    let meetup = new Meetup(2014, 4);
    let expected = dateAsString(2014, 4, 12);
    expect(meetup.day("Saturday", "second").toString()).toBe(expected);
  });

  test("test second Sunday of may 2014", () => {
    let meetup = new Meetup(2014, 5);
    let expected = dateAsString(2014, 5, 11);
    expect(meetup.day("Sunday", "second").toString()).toBe(expected);
  });

  test("test third Monday of june 2014", () => {
    let meetup = new Meetup(2014, 6);
    let expected = dateAsString(2014, 6, 16);
    expect(meetup.day("Monday", "third").toString()).toBe(expected);
  });

  test("test third Tuesday of july 2014", () => {
    let meetup = new Meetup(2014, 7);
    let expected = dateAsString(2014, 7, 15);
    expect(meetup.day("Tuesday", "third").toString()).toBe(expected);
  });

  test("test third Wednesday of august 2014", () => {
    let meetup = new Meetup(2014, 8);
    let expected = dateAsString(2014, 8, 20);
    expect(meetup.day("Wednesday", "third").toString()).toBe(expected);
  });

  test("test third Thursday of september 2014", () => {
    let meetup = new Meetup(2014, 9);
    let expected = dateAsString(2014, 9, 18);
    expect(meetup.day("Thursday", "third").toString()).toBe(expected);
  });

  test("test third Friday of october 2014", () => {
    let meetup = new Meetup(2014, 10);
    let expected = dateAsString(2014, 10, 17);
    expect(meetup.day("Friday", "third").toString()).toBe(expected);
  });

  test("test third Saturday of november 2014", () => {
    let meetup = new Meetup(2014, 11);
    let expected = dateAsString(2014, 11, 15);
    expect(meetup.day("Saturday", "third").toString()).toBe(expected);
  });

  test("test third Sunday of december 2014", () => {
    let meetup = new Meetup(2014, 12);
    let expected = dateAsString(2014, 12, 21);
    expect(meetup.day("Sunday", "third").toString()).toBe(expected);
  });

  test("test fourth Monday of january 2015", () => {
    let meetup = new Meetup(2015, 1);
    let expected = dateAsString(2015, 1, 26);
    expect(meetup.day("Monday", "fourth").toString()).toBe(expected);
  });

  test("test fourth Tuesday of february 2015", () => {
    let meetup = new Meetup(2015, 2);
    let expected = dateAsString(2015, 2, 24);
    expect(meetup.day("Tuesday", "fourth").toString()).toBe(expected);
  });

  test("test fourth Wednesday of march 2015", () => {
    let meetup = new Meetup(2015, 3);
    let expected = dateAsString(2015, 3, 25);
    expect(meetup.day("Wednesday", "fourth").toString()).toBe(expected);
  });

  test("test fourth Thursday of april 2015", () => {
    let meetup = new Meetup(2015, 4);
    let expected = dateAsString(2015, 4, 23);
    expect(meetup.day("Thursday", "fourth").toString()).toBe(expected);
  });

  test("test fourth Friday of may 2015", () => {
    let meetup = new Meetup(2015, 5);
    let expected = dateAsString(2015, 5, 22);
    expect(meetup.day("Friday", "fourth").toString()).toBe(expected);
  });

  test("test fourth Saturday of june 2015", () => {
    let meetup = new Meetup(2015, 6);
    let expected = dateAsString(2015, 6, 27);
    expect(meetup.day("Saturday", "fourth").toString()).toBe(expected);
  });

  test("test fourth Sunday of july 2015", () => {
    let meetup = new Meetup(2015, 7);
    let expected = dateAsString(2015, 7, 26);
    expect(meetup.day("Sunday", "fourth").toString()).toBe(expected);
  });

  test("test fifth Monday of august 2015", () => {
    let meetup = new Meetup(2015, 8);
    let expected = dateAsString(2015, 8, 31);
    expect(meetup.day("Monday", "fifth").toString()).toBe(expected);
  });

  test("test fifth Tuesday of september 2015", () => {
    let meetup = new Meetup(2015, 9);
    let expected = dateAsString(2015, 9, 29);
    expect(meetup.day("Tuesday", "fifth").toString()).toBe(expected);
  });

  test("test fifth Wednesday of october 2015", () => {
    let meetup = new Meetup(2015, 10);
    expect(meetup.day("Wednesday", "fifth")).toBeNull();
  });

  test("test fifth Thursday of november 2015", () => {
    let meetup = new Meetup(2015, 11);
    expect(meetup.day("Thursday", "fifth")).toBeNull();
  });

  test("test fifth Friday of december 2015", () => {
    let meetup = new Meetup(2015, 12);
    expect(meetup.day("Friday", "fifth")).toBeNull();
  });

  test("test fifth Saturday of january 2016", () => {
    let meetup = new Meetup(2016, 1);
    let expected = dateAsString(2016, 1, 30);
    expect(meetup.day("Saturday", "fifth").toString()).toBe(expected);
  });

  test("test fifth Sunday of february 2016", () => {
    let meetup = new Meetup(2016, 2);
    expect(meetup.day("Sunday", "fifth")).toBeNull();
  });

  test("test fifth Monday of february 2016", () => {
    let meetup = new Meetup(2016, 2);
    let expected = dateAsString(2016, 2, 29);
    expect(meetup.day("Monday", "fifth").toString()).toBe(expected);
  });

  test("test last Monday of march 2016", () => {
    let meetup = new Meetup(2016, 3);
    let expected = dateAsString(2016, 3, 28);
    expect(meetup.day("Monday", "last").toString()).toBe(expected);
  });

  test("test last Tuesday of april 2016", () => {
    let meetup = new Meetup(2016, 4);
    let expected = dateAsString(2016, 4, 26);
    expect(meetup.day("Tuesday", "last").toString()).toBe(expected);
  });

  test("test last Wednesday of may 2016", () => {
    let meetup = new Meetup(2016, 5);
    let expected = dateAsString(2016, 5, 25);
    expect(meetup.day("Wednesday", "last").toString()).toBe(expected);
  });

  test("test last Thursday of june 2016", () => {
    let meetup = new Meetup(2016, 6);
    let expected = dateAsString(2016, 6, 30);
    expect(meetup.day("Thursday", "last").toString()).toBe(expected);
  });

  test("test last Friday of july 2016", () => {
    let meetup = new Meetup(2016, 7);
    let expected = dateAsString(2016, 7, 29);
    expect(meetup.day("Friday", "last").toString()).toBe(expected);
  });

  test("test last Saturday of august 2016", () => {
    let meetup = new Meetup(2016, 8);
    let expected = dateAsString(2016, 8, 27);
    expect(meetup.day("Saturday", "last").toString()).toBe(expected);
  });

  test("test last Sunday of september 2016", () => {
    let meetup = new Meetup(2016, 9);
    let expected = dateAsString(2016, 9, 25);
    expect(meetup.day("Sunday", "last").toString()).toBe(expected);
  });

  test("test last Sunday of february 2015", () => {
    let meetup = new Meetup(2015, 2);
    let expected = dateAsString(2015, 2, 22);
    expect(meetup.day("Sunday", "last").toString()).toBe(expected);
  });

  test("test teenth Monday of october 2016", () => {
    let meetup = new Meetup(2016, 10);
    let expected = dateAsString(2016, 10, 17);
    expect(meetup.day("Monday", "teenth").toString()).toBe(expected);
  });

  test("test teenth Tuesday of november 2016", () => {
    let meetup = new Meetup(2016, 11);
    let expected = dateAsString(2016, 11, 15);
    expect(meetup.day("Tuesday", "teenth").toString()).toBe(expected);
  });

  test("test teenth Wednesday of december 2016", () => {
    let meetup = new Meetup(2016, 12);
    let expected = dateAsString(2016, 12, 14);
    expect(meetup.day("Wednesday", "teenth").toString()).toBe(expected);
  });

  test("test teenth Thursday of january 2017", () => {
    let meetup = new Meetup(2017, 1);
    let expected = dateAsString(2017, 1, 19);
    expect(meetup.day("Thursday", "teenth").toString()).toBe(expected);
  });

  test("test teenth Friday of february 2017", () => {
    let meetup = new Meetup(2017, 2);
    let expected = dateAsString(2017, 2, 17);
    expect(meetup.day("Friday", "teenth").toString()).toBe(expected);
  });

  test("test teenth Saturday of march 2017", () => {
    let meetup = new Meetup(2017, 3);
    let expected = dateAsString(2017, 3, 18);
    expect(meetup.day("Saturday", "teenth").toString()).toBe(expected);
  });

  test("test teenth Sunday of april 2017", () => {
    let meetup = new Meetup(2017, 4);
    let expected = dateAsString(2017, 4, 16);
    expect(meetup.day("Sunday", "teenth").toString()).toBe(expected);
  });
});

const { SimpleLinkedList, Element } = require("./simple-linked-list.js");

describe("Simple Linked List", () => {
  test("element datum", () => {
    let element = new Element(1);
    expect(element.datum()).toBe(1);
  });

  test("element tail", () => {
    let element = new Element(1);
    expect(element.isTail()).toBe(true);
  });

  test("element next default", () => {
    let element = new Element(1);
    expect(element.next()).toBe(null);
  });

  test("element next initialization", () => {
    let element1 = new Element(1);
    let element2 = new Element(2, element1);
    expect(element2.next()).toEqual(element1);
  });

  test("empty list size", () => {
    let list = new SimpleLinkedList();
    expect(list.size()).toBe(0);
  });

  test("empty list empty", () => {
    let list = new SimpleLinkedList();
    expect(list.isEmpty()).toBe(true);
  });

  test("pushing element on list", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.size()).toBe(1);
  });

  test("empty list 1 element", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.isEmpty()).toBe(false);
  });

  test("peeking at list", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    expect(list.size()).toBe(1);
    expect(list.peek()).toBe(1);
  });

  test("peeking at empty list", () => {
    let list = new SimpleLinkedList();
    expect(list.peek()).toBe(null);
  });

  test("access head element", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    let head = list.head();
    expect(head instanceof Element).toBe(true);
    expect(head.datum()).toBe(1);
    expect(head.isTail()).toBe(true);
  });

  test("items are stacked", () => {
    let list = new SimpleLinkedList();
    list.push(1);
    list.push(2);

    expect(list.size()).toBe(2);
    expect(list.head().datum()).toBe(2);
    expect(list.head().next().datum()).toBe(1);
  });

  test("push 10 items", () => {
    let list = new SimpleLinkedList();

    for (let datum = 1; datum <= 10; datum++) {
      list.push(datum);
    }

    expect(list.size()).toBe(10);
    expect(list.peek()).toBe(10);
  });

  test("pop one item", () => {
    let list = new SimpleLinkedList();
    list.push(1);

    expect(list.pop()).toBe(1);
    expect(list.size()).toBe(0);
  });

  test("popping frenzy", () => {
    let list = new SimpleLinkedList();

    for (let datum = 1; datum <= 10; datum++) {
      list.push(datum);
    }

    for (let count = 1; count <= 6; count++) {
      list.pop();
    }

    expect(list.size()).toBe(4);
    expect(list.peek()).toBe(4);
  });

  test("from a: empty array", () => {
    let list = SimpleLinkedList.fromArray([]);

    expect(list.size()).toBe(0);
    expect(list.peek()).toBe(null);
  });

  test("from a: null", () => {
    let list = SimpleLinkedList.fromArray(null);
    expect(list.size()).toBe(0);
    expect(list.peek()).toBe(null);
  });

  test("from a: 2 element array", () => {
    let list = SimpleLinkedList.fromArray([1, 2]);
    expect(list.size()).toBe(2);
    expect(list.head().datum()).toBe(1);
    expect(list.head().next().datum()).toBe(2);
  });

  test("from a: 10 item array", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(arr);
    expect(list.size()).toBe(10);
    expect(list.peek()).toBe(1);
    expect(
      list
        .head()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .next()
        .datum(),
    ).toBe(10);
  });

  test("to a: empty list", () => {
    let list = new SimpleLinkedList();
    expect(list.toArray()).toEqual([]);
  });

  test("to a: of 1 element list ", () => {
    let list = SimpleLinkedList.fromArray([1]).toArray();
    expect(list).toEqual([1]);
  });

  test("to a: of a 2 element list", () => {
    let list = SimpleLinkedList.fromArray([1, 2]).toArray();
    expect(list).toEqual([1, 2]);
  });

  test("reverse 2 element list", () => {
    let list = SimpleLinkedList.fromArray([1, 2]);
    // reversedList and list need not be the same object
    let reversedList = list.reverse();

    expect(reversedList.peek()).toBe(2);
    expect(reversedList.head().next().datum()).toBe(1);
    expect(reversedList.head().next().isTail()).toBe(true);
  });

  test("reverse 10 element list", () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(data);
    expect(data.reverse()).toEqual(list.reverse().toArray());
  });

  test("roundtrip 10 element array", () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list = SimpleLinkedList.fromArray(data).toArray();
    expect(list).toEqual(data);
  });
});

let CustomSet = require("./custom-set.js");

describe("CustomSet", () => {
  describe("empty: returns true if the set contains no elements", () => {
    test("sets with no elements are empty", () => {
      const actual = new CustomSet().isEmpty();
      expect(actual).toBe(true);
    });

    test("sets with elements are not empty", () => {
      const actual = new CustomSet([1]).isEmpty();
      expect(actual).toBe(false);
    });
  });

  describe("contains: sets can report if they contain an element", () => {
    test("nothing is contained in an empty set", () => {
      const actual = new CustomSet().contains(1);
      expect(actual).toBe(false);
    });

    test("when the element is in the set", () => {
      const actual = new CustomSet([1, 2, 3]).contains(1);
      expect(actual).toBe(true);
    });

    test("when the element is not in the set", () => {
      const actual = new CustomSet([1, 2, 3]).contains(4);
      expect(actual).toBe(false);
    });
  });

  describe("subset: a set is a subset if all of its elements are contained in the other set", () => {
    test("empty set is a subset of another empty set", () => {
      const actual = new CustomSet().isSubset(new CustomSet());
      expect(actual).toBe(true);
    });

    test("empty set is a subset of non-empty set", () => {
      const actual = new CustomSet().isSubset(new CustomSet([1]));
      expect(actual).toBe(true);
    });

    test("non-empty set is not a subset of empty set", () => {
      const actual = new CustomSet([1]).isSubset(new CustomSet());
      expect(actual).toBe(false);
    });

    test("set is a subset of set with exact same elements", () => {
      const actual = new CustomSet([1, 2, 3]).isSubset(
        new CustomSet([1, 2, 3]),
      );
      expect(actual).toBe(true);
    });

    test("set is a subset of larger set with same elements", () => {
      const actual = new CustomSet([1, 2, 3]).isSubset(
        new CustomSet([4, 1, 2, 3]),
      );
      expect(actual).toBe(true);
    });

    test("set is not a subset of set that does not contain its elements", () => {
      const actual = new CustomSet([1, 2, 3]).isSubset(
        new CustomSet([4, 1, 3]),
      );
      expect(actual).toBe(false);
    });
  });

  describe("disjoint: sets are disjoint if they share no elements", () => {
    test("the empty set is disjoint with itself", () => {
      const actual = new CustomSet().isDisjoint(new CustomSet([]));
      expect(actual).toBe(true);
    });

    test("empty set is disjoint with non-empty set", () => {
      const actual = new CustomSet().isDisjoint(new CustomSet([1]));
      expect(actual).toBe(true);
    });

    test("non-empty set is disjoint with empty set", () => {
      const actual = new CustomSet([1]).isDisjoint(new CustomSet([]));
      expect(actual).toBe(true);
    });

    test("sets are not disjoint if they share an element", () => {
      const actual = new CustomSet([1, 2]).isDisjoint(new CustomSet([2, 3]));
      expect(actual).toBe(false);
    });

    test("sets are disjoint if they share no elements", () => {
      const actual = new CustomSet([1, 2]).isDisjoint(new CustomSet([3, 4]));
      expect(actual).toBe(true);
    });
  });

  describe("isSame: sets with the same elements are equal", () => {
    test("empty sets are equal", () => {
      const actual = new CustomSet().isSame(new CustomSet());
      expect(actual).toBe(true);
    });

    test("empty set is not equal to non-empty set", () => {
      const actual = new CustomSet().isSame(new CustomSet([1, 2, 3]));
      expect(actual).toBe(false);
    });

    test("non-empty set is not equal to empty set", () => {
      const actual = new CustomSet([1, 2, 3]).isSame(new CustomSet());
      expect(actual).toBe(false);
    });

    test("sets with the same elements are equal", () => {
      const actual = new CustomSet([1, 2]).isSame(new CustomSet([2, 1]));
      expect(actual).toBe(true);
    });

    test("sets with different elements are not equal", () => {
      const actual = new CustomSet([1, 2, 3]).isSame(new CustomSet([1, 2, 4]));
      expect(actual).toBe(false);
    });
  });

  describe("add: unique elements can be added to a set", () => {
    test("add to empty set", () => {
      const actual = new CustomSet().add(3);
      const expected = new CustomSet([3]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test("add to non-empty set", () => {
      const actual = new CustomSet([1, 2, 4]).add(3);
      const expected = new CustomSet([1, 2, 4, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test("adding an existing element does not change the set", () => {
      const actual = new CustomSet([1, 2, 3]).add(3);
      const expected = new CustomSet([1, 2, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });
  });

  describe("intersection: returns a set of all shared elements", () => {
    test("intersection of two empty sets is an empty set", () => {
      const actual = new CustomSet().intersection(new CustomSet());
      const expected = new CustomSet();
      expect(actual.isSame(expected)).toBe(true);
    });

    test("intersection of an empty set and non-empty set is an empty set", () => {
      const actual = new CustomSet().intersection(new CustomSet([3, 2, 5]));
      const expected = new CustomSet([]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test("intersection of a non-empty set and an empty set is an empty set", () => {
      const actual = new CustomSet([1, 2, 3, 4]).intersection(
        new CustomSet([]),
      );
      const expected = new CustomSet([]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test("intersection of two sets with no shared elements is an empty set", () => {
      const actual = new CustomSet([1, 2, 3]).intersection(
        new CustomSet([4, 5, 6]),
      );
      const expected = new CustomSet([]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test("intersection of two sets with shared elements is a set of the shared elements", () => {
      const actual = new CustomSet([1, 2, 3, 4]).intersection(
        new CustomSet([3, 2, 5]),
      );
      const expected = new CustomSet([2, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });
  });

  describe("difference of a set is a set of all elements that are only in the first set", () => {
    test("difference of two empty sets is an empty set", () => {
      const actual = new CustomSet().difference(new CustomSet());
      const expected = new CustomSet();
      expect(actual.isSame(expected)).toBe(true);
    });

    test("difference of empty set and non-empty set is an empty set", () => {
      const actual = new CustomSet().difference(new CustomSet([3, 2, 5]));
      const expected = new CustomSet();
      expect(actual.isSame(expected)).toBe(true);
    });

    test("difference of a non-empty set and an empty set is the non-empty set", () => {
      const actual = new CustomSet([1, 2, 3, 4]).difference(new CustomSet());
      const expected = new CustomSet([1, 2, 3, 4]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test("difference of two non-empty sets is a set of elements that are only in the first set", () => {
      const actual = new CustomSet([3, 2, 1]).difference(new CustomSet([2, 4]));
      const expected = new CustomSet([3, 1]);
      expect(actual.isSame(expected)).toBe(true);
    });
  });

  describe("union: returns a set of all elements in either set", () => {
    test("union of empty sets is an empty set", () => {
      const actual = new CustomSet().union(new CustomSet());
      const expected = new CustomSet();
      expect(actual.isSame(expected)).toBe(true);
    });

    test("union of an empty set and non-empty set is the non-empty set", () => {
      const actual = new CustomSet().union(new CustomSet([2]));
      const expected = new CustomSet([2]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test("union of a non-empty set and empty set is the non-empty set", () => {
      const actual = new CustomSet([1, 3]).union(new CustomSet());
      const expected = new CustomSet([1, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });

    test("union of non-empty sets contains all unique elements", () => {
      const actual = new CustomSet([1, 3]).union(new CustomSet([2, 3]));
      const expected = new CustomSet([1, 2, 3]);
      expect(actual.isSame(expected)).toBe(true);
    });
  });
});
