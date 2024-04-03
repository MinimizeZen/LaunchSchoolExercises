class Series {
  constructor(series) {
    this.series = series;
  }
  slices(len) {
    if (len > this.series.length) {
      throw new Error("Length longer than series");
    }
    let slices = [];
    for (let a = 0; a + len <= this.series.length; a++) {
      slices.push(
        this.series
          .slice(a, a + len)
          .split("")
          .map((elem) => Number(elem)),
      );
    }
    return slices;
  }
}
module.exports = Series;
