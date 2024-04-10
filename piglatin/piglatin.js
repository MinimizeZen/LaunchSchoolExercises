const { getWords } = require("./addword.js");
function pigLatinSentence() {
  return getWords()
    .map((value) => translate(value))
    .join(" ");
}
function translate(value) {
  return value.slice(1) + value[0] + "ay";
}
module.exports = pigLatinSentence;
