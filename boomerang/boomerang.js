class Boomerang {
  static boomerang(arr) {
    if (arr.length < 2 || arr[0] === arr[1]) {
      return false;
    }
    let dir = Boomerang.checkDir(arr[0], arr[1]);
    let rev = 0;
    for (let ind = 1; ind < arr.length; ind++) {
      if (arr[ind] === arr[ind - 1]) {
        return false;
      }
      if (Boomerang.checkDir(arr[ind - 1], arr[ind]) !== dir) {
        rev += 1;
        dir = !dir;
      }
    }
    return rev === 1;
  }
  static checkDir(num1, num2) {
    return num1 > num2;
  }
}

module.exports = Boomerang;
