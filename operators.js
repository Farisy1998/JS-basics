// 1. Arithmetic Operators
// ------------------------------
let x = 10;
let y = 3;

// console.log(x + y); // Addition
// console.log(x - y); // Sutraction
// console.log(x * y); // Multiplication
// console.log(x / y); // Division
// console.log(x % y); // Modules - finding the reminder of x/y
// console.log(x ** y);    // Exponentiation - finding the power of x

// Increment (++)
console.log(++x); // pre increment
console.log(x++); // post increment
console.log(x);

// Decrement (--)
console.log(--x); // pre decrement
console.log(x--); // post decrement
console.log(x);

// 2. Assignment Operators (=)
// -----------------------------------
x++; // which is same as, x = x + 1
// Like that, if we have to increment x by 5. Then the above procedure not convinient.
// So, we follow;
x += 5; // which is same as, x = x + 5
// Similarlly
x *= 5;

// 3. Comparison Operators
// -----------------------------
x = 1;
console.log(x > 0);
// The result of a comparison operator will be boolean values.

// 1.Relational operators
console.log(x >= 1);
console.log(x < 0);
console.log(x < 1);
console.log(x <= 1);

// 2.Equality operators
console.log(x === 1);
console.log(x !== 1);

// 1.Strict equality operator - (Both Type and value are checked)
console.log(1 === 1);
console.log("1" === 1);

// 2.Loose equality operator - (Value checking only)
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);
console.log("2" == 1);
// In thw case of the loose equality operator, if the type of the operant at
// the left side of the operartor is different from the type of the operant
// at the right side of the operartor. Then the JS will convert the type of the
// right operant to match with the type of the left operand. Here, only the
// value of the both operands are checked.

// 4.Ternary Operators
// -------------------------
let points = 90;
let typeOfCustomer = points > 100 ? "Gold" : "Silver";
console.log(typeOfCustomer);

// 5.Logical Operators
// -------------------------
// 1.Logical AND (&&)
// Returns true if both of the operants are true.
let hightIncome = false;
let goodCreditScore = false;
let eligibleForLoan = hightIncome && goodCreditScore;
console.log("Eligible for Loan", eligibleForLoan);

// 2.Logical OR (||)
// Returns true of one of the operand is true
console.log(false || true);

// 3.Logical NOT (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused ", applicationRefused);
// Here, the eligibleForLoan will be opposite of applicationRefused. That
// means, if the eligibleForLoan is true then the applicationRefused will
// be false and viseversa.

// Truthy and Falsy. ie, using logical operators with non boolean values.
// Falsy values in JS (not a boolean false):-
// undefined
// null
// 0
// false (boolean false)
// "" (empty string)
// NaN (Not a Number)

// Anything that is not a falsy is truthy.

console.log(false || true);
console.log(false || "Farisy"); // Truthy expression
// In the above expression, the first operant is false. So, the execution
// continues and the JS engine will evaluates that the second operant is a
// truthy value (ie, not a boolean true). So, because it is a truthy value.
// The JS will rerturn that tuthy value. And it will ignore the opeands after
// that truthy value, even there are millions of operands.
// Eg:-
console.log(false || 1 || 2 || 3);
console.log("" || 10);
console.log(true || "Hi");
// Application senario of the truthy and falsy.
// Eg:- Color of a T-Shirt that a use want to buy.
let userColor = "red";
let defaultColor = "blue";
let selectedColor = userColor || defaultColor; // returns a truthy value
console.log(selectedColor);
// In the above senario, if the user selected a color then the selectedColor
// will be the userColor. Otherwise the selectedColor will be the defaultColor.

// 6.Bitwise Operators
// -------------------------
// 1.Bitwise OR (|)
// 1 = 00000001
// 2 = 00000010
// R = 00000011
console.log(1 | 2);

// 2.Bitwise AND (&)
// 1 = 00000001
// 2 = 00000010
// R = 00000000
console.log(1 & 2);

// Realworld senario of bitwise operators
// Access control system
// Read, Write and Execute permissions
// To implement these permission. We use 3 bits from the right side os a 8
// bit binary and we are not bothered about the existing 5 bits. ie,
// Read ->    00000100 -> 4
// Write ->   00000010 -> 2
// Execute -> 00000001 -> 1
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
const rootUser = 7;
let myPermission = 0;

myPermission = myPermission | writePermission;
let message = myPermission & writePermission ? "yes" : "no";
console.log(message);
// Here, with the bitwise OR operator we can add permission. And with
// bitwise AND operator we can check if we have a given permission.

// Operator Precidence
// -----------------------
// case 1
console.log(2 + 3 * 4); // 14
// case 2
console.log((2 + 3) * 4); // 20
// In case 1, the multiplication operator have the higher precidence
// In case 2, the operatiion enclose with in the paranthesisi have the
// hiher precedence.
// Operators in the order of decresing precedence.
// () -> *, / -> +, -

// Excercise - Swapping variables
// -----------------------------------
let a = "red";
let b = "blue";

console.log(a);
console.log(b);

let backup = a;
a = b;
b = backup;

console.log(a);
console.log(b);
