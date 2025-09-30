//  30/09/2025


// index.js
// =========================================
// JavaScript Data Types Summary
// =========================================

// 1. STRING → sequence of characters
let name = "Alice";
console.log(typeof name, name); // string Alice

// 2. NUMBER → integers & floating-point numbers
let age = 21;
let pi = 3.14;
console.log(typeof age, age); // number 21
console.log(typeof pi, pi);   // number 3.14

// 3. BIGINT → very large integers (add 'n' at the end)
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber, bigNumber); // bigint 123456789012345678901234567890n

// 4. BOOLEAN → true or false
let isStudent = true;
console.log(typeof isStudent, isStudent); // boolean true

// 5. UNDEFINED → declared but not assigned
let notAssigned;
console.log(typeof notAssigned, notAssigned); // undefined undefined

// 6. NULL → intentional empty value
let emptyValue = null;
console.log(typeof emptyValue, emptyValue); // object null  (JS quirk!)

// 7. SYMBOL → unique identifiers
let id = Symbol("id");
console.log(typeof id, id); // symbol Symbol(id)

// =========================================
// NON-PRIMITIVE TYPES (REFERENCE)
// =========================================

// 8. OBJECT → key-value pairs
let person = { name: "Alice", age: 21 };
console.log(typeof person, person); // object { name: "Alice", age: 21 }

// 9. ARRAY → ordered list (special type of object)
let numbers = [1, 2, 3];
console.log(typeof numbers, numbers); // object [1, 2, 3]

// 10. FUNCTION → callable object
function greet() {
  return "Hello!";
}
console.log(typeof greet, greet()); // function Hello!

// Extra: DATE (built-in object)
let today = new Date();
console.log(typeof today, today); // object current date

// Extra: REGEX (regular expression object)
let pattern = /abc/;
console.log(typeof pattern, pattern); // object /abc/
