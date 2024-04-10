let words = [];
function addWord(value) {
  words.push(value);
}
function getWords() {
  return [...words];
}
module.exports = { addWord, getWords };
