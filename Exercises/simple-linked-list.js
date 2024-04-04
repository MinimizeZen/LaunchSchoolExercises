class Element {
  constructor(val, elem) {
    this.data = val;
    this.nextElem = elem ? elem : null;
  }
  next() {
    return this.nextElem;
  }
  isTail() {
    return Boolean(!this.nextElem);
  }
  datum() {
    return this.data;
  }
  recRev(...arr) {
    if (this.next()) {
      arr = this.nextElem.recRev(...arr, this);
    }
    this.nextElem = arr.pop();
    return arr;
  }
}
class SimpleLinkedList {
  constructor() {
    this.list = [];
    this.headElem = null;
  }
  static fromArray(arr) {
    let SLL = new SimpleLinkedList();
    if (arr) {
      arr
        .slice()
        .reverse()
        .forEach((elem) => SLL.push(elem));
    }
    return SLL;
  }
  peek() {
    return this.headElem ? this.headElem.datum() : null;
  }
  push(val) {
    let elem = new Element(val, this.headElem);
    this.list.push(elem);
    this.headElem = elem;
  }
  pop() {
    let ret = this.list.pop();
    if (this.head()) {
      this.list[this.list.length - 1].nextElem = null;
    }
    return ret.datum();
  }
  head() {
    this.headElem = this.list[this.list.length - 1];
    return this.headElem;
  }
  reverse() {
    this.head().recRev(null);
    this.list = this.list.reverse();
    this.head();
    return this;
  }
  toArray() {
    let arr = this.list.reverse().map((elem) => elem.datum());
    return arr;
  }
  size() {
    return this.list.length;
  }
  isEmpty() {
    return this.list.length === 0;
  }
}
// let a = SimpleLinkedList.fromArray([1, 2]);
// console.log(a);
// console.log(a.toArray());
// a.reverse();
// console.log(a);
// console.log(a.peek());
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let list = SimpleLinkedList.fromArray(data).toArray();
// console.log(data, list);
module.exports = { Element, SimpleLinkedList };
