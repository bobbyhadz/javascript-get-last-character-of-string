// EXAMPLE 1 - Get the last Character of a String in JavaScript

const str = 'abcde';

// ✅ Get the last character of a string using charAt()
const last = str.charAt(str.length - 1);
console.log(last); // 👉️ e

// ✅ Get the last character of a string using slice()
const lst = str.slice(-1);
console.log(lst); // 👉 'e'

const lst2 = str.slice(-2);
console.log(lst2); // 👉️ 'de'

// ✅ Get the last character of a string using String.at()
const last_ = str.at(-1);
console.log(last_); // 👉️ e

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the last Character of a String using indexing

// const str = 'abcde';

// const last = str[str.length - 1];
// console.log(last); // 👉️ e

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the last Character of a String using slice()

// const str = 'abcde';

// const last = str.slice(-1);
// console.log(last); // 👉 'e'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the last character of a String using String.at()

// const str = 'bobbyhadz';

// const last = str.at(-1);
// console.log(last); // 👉️ z

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the last N characters of a String in JavaScript

// const str = 'bobbyhadz.com';

// // ✅ get the last 2 characters of a string
// const last2 = str.slice(-2);
// console.log(last2); // 👉️ om

// // ✅ get the last 3 characters of a string
// const last3 = str.slice(-3);
// console.log(last3); // 👉️ com

// // ✅ get the last 4 characters of a string
// const last4 = str.slice(-4);
// console.log(last4); // 👉 .com

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get the last N characters of a string using `String.substring`

// function getLastNchars(str, n) {
//   return str.substring(str.length - n);
// }

// const str = 'bobbyhadz.com';

// // ✅ get the last 2 characters of a string
// console.log(getLastNchars(str, 2)); // 👉️ om

// // ✅ get the last 3 characters of a string
// console.log(getLastNchars(str, 3)); // 👉️ com

// // ✅ get the last 4 characters of a string
// console.log(getLastNchars(str, 4)); // 👉️ .com
