class CustomSet {
  constructor(arr) {
    this.set = {};
    this.size = 0;
    if (arr) {
      this.add(...arr);
    }
  }
  add(...elements) {
    elements.forEach((elem) => this.#addElem(elem));
    this.size = Object.keys(this.set).length;
    return this;
  }
  #addElem(elem) {
    this.set[elem] = true;
  }
  #getSet() {
    return Object.keys(this.set);
  }
  #getSizedSets(set1, set2) {
    return set1.#getSet().length > set2.#getSet().length
      ? [set2.#getSet(), set1.#getSet()]
      : [set1.#getSet(), set2.#getSet()];
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.getSize() === 0;
  }
  isSame(inSet) {
    // let [smallerSet, biggerSet] = this.getSizedSets(this, inSet);
    // let same = true;
    // for (let a = 0; a < smallerSet.length; a++) {
    //   if (!biggerSet.includes(smallerSet[a])) {
    //     same = false;
    //     break;
    //   }
    // }
    // return same;
    return this.getSize() === inSet.getSize() && inSet.isSubset(this);
  }
  contains(elem) {
    return this.#getSet().includes(String(elem));
  }
  isDisjoint(inSet) {
    let disj = true;
    let [smallerSet, biggerSet] = this.#getSizedSets(this, inSet);
    for (let a = 0; a < smallerSet.length; a++) {
      if (biggerSet.includes(smallerSet[a])) {
        disj = false;
      }
    }
    return disj;
  }
  isSubset(inSet) {
    let same = true;
    inSet = inSet.#getSet();
    let set = this.#getSet();
    for (let a = 0; a < set.length; a++) {
      if (!inSet.includes(set[a])) {
        same = false;
        break;
      }
    }
    return same;
  }

  intersection(inSet) {
    let out = [];
    let [smallerSet, biggerSet] = this.#getSizedSets(this, inSet);
    for (let a = 0; a < smallerSet.length; a++) {
      if (biggerSet.includes(smallerSet[a])) {
        out.push(smallerSet[a]);
      }
    }
    return new CustomSet(out);
  }
  difference(inSet) {
    let out = [];
    inSet = inSet.#getSet();
    let set = this.#getSet();
    for (let a = 0; a < set.length; a++) {
      if (!inSet.includes(set[a])) {
        out.push(set[a]);
      }
    }
    return new CustomSet(out);
  }
  union(inSet) {
    let out = new CustomSet();
    out.add(...this.#getSet());
    out.add(...inSet.#getSet());
    return out;
  }
}
module.exports = CustomSet;
