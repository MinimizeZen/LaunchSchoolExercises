let accum = ""
let str = "The Munsters are creepy and spooky."
let arrStr = Array.from(str)
for (let i = 0; i < arrStr.length; i++) {
  console.log(arrStr);
  console.log(arrStr[i]);
  console.log(arrStr[i].toUpperCase());

  (arrStr[i] === arrStr[i].toUpperCase()) ? accum = accum + arrStr[i].toLowerCase() : accum = accum + arrStr[i].toUpperCase()
}
console.log(accum);
