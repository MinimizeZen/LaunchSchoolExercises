class Scrabble {
  static SCORELIST = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };
  static LETTERLIST = Object.keys(Scrabble.SCORELIST);
  constructor(word) {
    this.word = word
      ? String(word)
          .toUpperCase()
          .replaceAll(/[^A-Z]/g, "")
      : "";
    this.scoreVal = Scrabble.score(this.word);
  }
  static score(word) {
    let score = 0;
    word = String(word)
      .toUpperCase()
      .replaceAll(/[^A-Z]/g, "");
    word.split("").forEach((letter) => {
      Scrabble.LETTERLIST.forEach((set) => {
        if (set.includes(letter)) {
          score += Scrabble.SCORELIST[set];
        }
      });
    });
    return score;
  }
  score() {
    return this.scoreVal;
  }
}
module.exports = Scrabble;
