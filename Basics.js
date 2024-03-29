// Variables
// ------------
let name;
let firstName = "Salmanul";
let lastName = "Farisy";
console.log(name, firstName, lastName);

// console parse every output to a string and log it.
// Ex:-
console.log(typeof typeof 123);

// var
var a = 20;
var a = 30;

// let
let b = 10;
b = 15;

// const
const c = 5;

// var -> re-declare and re-assign.
// let -> re-assign.
// const -> No re-declare and re-assign.
// Note:- var is function scoped and not block scoped. ie, variables declared
// using var can be access any where in side a function, even it was declared
// inside a block with in the function.
// let and const are block scoped (ES6 feature).

// Global Scope -> variables or constants declared globally can be accessible
//                 any where from the program.
// Local Scope -> variables or constants declared locally can be accessible
//                inside a function or a block.
// Note:- Local variables or constants in a function or a block will take
// precidence over local variables or constants.

// Constands - Constands in JS cannot be re-assigned
// -------------------------------------------------------
const interestRate = 0.3;
//interestRate = 1; // Throw an error
console.log(interestRate);

// Primitive Types
// ---------------------
let nickName = "Farisy"; // String literal
let age = 20; // Number literal
let isApproved = false; // Boolean literal
let color = undefined; // undefined
let selectedColor = null; // null

// Dynamic Typing - JS is a dymnamicaly typed language. That means, the type of
// a variable is identified at runtime.
// ------------------------------------------
console.log(typeof nickName);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof color);
console.log(typeof selectedColor);

// Objects in JS (Reference Types)
// ------------------
// 1.Object, 2.Arrays, 3.Functions

// 1.Objects
// --------------
let person = {
  name: "Farisy",
  age: 23,
}; // object literal
console.log(person);

// Dot notation - it is the most convinient and easy way to use
console.log(person.name);

// Bracket notation
console.log(person["name"]);
// or
let selection = "age";
console.log(person[selection]);

// 2.Arrays
// ---------
// Arrays i JS are dynamic. That means it can store any type of values, not
// specific. Also the array in JS is an object. let me show these;
let selectedColors = ["red", "blue", "green", 1];
console.log(typeof selectedColors);
console.log(selectedColors[0]);
// Array index is strting at 0.
// The array in JS can grow dynamically as through out the program. let me show
selectedColors[4] = "purple";
console.log(selectedColors[4]);
// As array is an object, it have many properties and methods. Like;
console.log(selectedColors.length);
console.log(selectedColors.indexOf("green"));

// 3.Functions - Function are bulding blocks of JS
// -----------------------------------------------------
// function that perfoming a task:-
function greet(firstName, lastName) {
  // body
  console.log("Hello " + firstName + " " + lastName);
}

greet("John", "Smith"); // function is called and arguments are passed

// function that calculate a value:-
function squre(number) {
  return number * number;
}
console.log(squre(2));

// new mwthod of function call
(function myFun() {
  console.log("Inside myFun()");
})(); // iife calling
