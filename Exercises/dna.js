class DNA {
  constructor(dna) {
    this.DNA = dna;
  }
  hammingDistance(Dna) {
    let dist = 0;
    for (let a = 0; a < Math.min(Dna.length, this.DNA.length); a++) {
      if (Dna[a] !== this.DNA[a]) {
        dist++;
      }
    }
    return dist;
  }
}
module.exports = DNA;
