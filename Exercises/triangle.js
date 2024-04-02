class Triangle {
  constructor(s1, s2, s3) {
    this.sides = [Number(s1), Number(s2), Number(s3)];
    if (s1 === s2 || s2 === s3 || s1 === s3) {
      if (s1 === s2 && s2 === s3) {
        this.type = "equilateral";
      } else {
        this.type = "isosceles";
      }
    } else {
      this.type = "scalene";
    }
    if (!Triangle.validTriangle(this.sides)) {
      throw new Error("Invalid Triangle");
    }
  }
  static validTriangle(Sides) {
    let sortedSides = Sides.sort((a, b) => a - b);
    if (
      sortedSides[2] < sortedSides[0] + sortedSides[1] &&
      sortedSides[0] > 0
    ) {
      return true;
    }
    return false;
  }
  kind() {
    return this.type;
  }
}
module.exports = Triangle;
