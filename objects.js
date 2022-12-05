// OOP's programming style

const circle = {
  radius: 1,
  location: {
    x: 2,
    y: 3,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

circle.draw();

// In JS, the objects are dynamic in nature. Means, the object can grow or
// shrink, or in other words we can add or delete the member of an object.
// let me show:

const car = {
  name: "Meclaren",
};

// Adding a data member
car.color = "Black";
console.log(car);

// Adding a method
car.start = function () {
  console.log("start");
};
console.log(car);

// Deleting a data member
delete car.color;
console.log(car);

// Deleting a method
delete car.start;
console.log(car);

// Enumeration Properties of an Object
// --------------------------------------
const circle1 = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// If we want to iterate over properties of an object, we use for-in loop
for (let key in circle1) {
  console.log(key, circle1[key]);
}

// If we want to use for-of loop to iterates over an array,
// for (key of circle1) {
//   console.log(key);
// }
// The above foor-of loop will throw an error with 'circle is not iterable'.
// Because, we earlier told that the for-of loop is used to iterates over
// the elements of an array or maps.
// So, here we use the Object.keys to iterates over the key of the 'circle1'
// object. Look,
for (let key of Object.keys(circle1)) {
  console.log(key);
}
// When we use the Object.keys(), this method will return an array of
// properties. So, since the arrays are iterable. We can use the for-of loop
// to iterates over this array.

// In earlier Constructor Property lecture we have told that, for every object in
// JS there have a build-in property called constructor, and the value of this property
// will be a function or a constructor function. So, internally the JS have
// this Object function declare in somewhere else. And, if we try to create
/// an object using object literal syntax (ie, const x = { value : 10 };).
// Internally the JS engine will transilate a call to this Object constructor
// function. And that call looks like this,
// const x = new Object();

// And we have learned that, all functions in JS are objects. So we can access
// the members of this functions using the Dot operator. Like,
// Object.keys();

// Similarlly to thte kaeys method. There is an another method called entries.
for (let entry of Object.entries(circle1)) {
  console.log(entry);
}
// The entries method will return an array with a key-value pair. The first
// element in this array will be the key and the second element will be the
// value.

// To check, wheather the given property is exist in an object, we use the
// 'in' operator
if ("radius" in circle1) console.log("Yes");

// Cloning Object
// ----------------------

// Ex:- Cloning the circle1 object
// method 1 - using for-in loop
// const another = {};
// for (let key in circle1) {
//   another[key] = circle1[key];
// }
// console.log(another);

// method 2 - using Object.assign method
// const another = Object.assign({}, circle1);
// If we want to add additional properties to the another object. We can do,
// const another = Object.assign({ color: "red" }, circle1, /* obj2, obj3, ... */);
// With the Object.assign() method, we can combine or copy multiple objects
// into a single object.

// method 3 - using spread operator
// const another = { ...circle1 };
// If we want to add additional properties to the another object. We can do,
const another = { color: "green", ...circle1 };
console.log(another);

// Bulid-in Objects in JS
// ----------------------------

// 1.Math
// The Math object is used to deal with mathematical calculations.
// refer doc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// 2.String
// ----------------
// In JS we have 2 kinds of Strings,
// 1.String primitive
const message = "Hi";

// 2.String object
const anotherString = new String("Hi");

console.log(typeof message);
console.log(typeof anotherString);

// In String primitive, when we try to accesss the members of the string
// uisng the Dot operator '.' (ie, message.length). At that time the JS will
// wrap that string primitive to an object.

// refer doc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 3.Date
// ------------------
const now = new Date();
console.log(now);
const dob = new Date(1998, 3, 6, 10);
console.log(dob);

const date1 = new Date("March 3 2006");
console.log(date1);

// setter methods
const date2 = new Date();
date2.setFullYear(2018);
date2.setMonth(0);
date2.setDate(1);
date2.setHours(6);
date2.setMinutes(30);
console.log(date2);

// getter methods
console.log(date2.getFullYear());
console.log(date2.getDate());
console.log(date2.getHours());
