function utf16Value(str) {
  return str.split('').reduce((accum, element) => accum + element.charCodeAt(0), 0)
}
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811
