class Diamond {
  static makeDiamond(Char) {
    let out = "";
    Char = Char.toUpperCase();
    let ind = Char.charCodeAt(0) - 65;
    let a = 0;
    let dir = 1;
    do {
      if (a !== 0) {
        out += `${" ".repeat(ind - a)}${String.fromCharCode(a + 65)}${" ".repeat(a * 2 - 1)}${String.fromCharCode(a + 65)}${" ".repeat(ind - a)}\n`;
      } else {
        out += `${" ".repeat(ind - a)}A${" ".repeat(ind - a)}\n`;
      }
      if (a === ind) {
        dir = -1;
      }
      a += dir;
    } while (a !== -1);

    return out;
  }
}
module.exports = Diamond;
