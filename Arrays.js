const numbers = [3, 4];
console.log(numbers);

// Adding elements in to the array
// ------------------------------------
// End
numbers.push(5, 6);
console.log(numbers);

//Begining
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(2, 0, "a", "b", "c");
// first argument -> start index
// second argument -> delete count, if needed
// third argument -> elements to be added from the start index
console.log(numbers);

// Deleting elements from the array
// --------------------------------------
const newNumbers = [1, 2, 3, 4, 5, 6];

// End
let last = newNumbers.pop();
console.log(last);
console.log(newNumbers);

// Begining
let first = newNumbers.shift();
console.log(first);
console.log(newNumbers);

// Middle
// const middle = newNumbers.splice(1, 2); // return an array of deleted elements
// first argument -> start index
// second argument -> delete count, if needed
// console.log(middle); // returns the array of deleted numbers.

const element = newNumbers.splice(1, 2)[1]; // return 1nd indexed element from
// the array of deleted elements.
console.log(element);
console.log(newNumbers);

// Finding elements (Primitives)
// ------------------------
const another = [1, 2, 3, 1, 4, 5];

console.log(another.indexOf("a")); // returns -1, because a is not present in the array
console.log(another.indexOf(1));
console.log(another.lastIndexOf(1)); // retuns the last index at with the 1 is present
console.log(another.includes(5)); // returns true, if the element exist.
console.log(another.indexOf(1) !== -1); // returns true, if the element exist.
console.log(another.indexOf(1, 2)); // first argument -> element to find
// Second argument -> index from where the search want to begin

// Finding elements (Objects)
// -------------------------------
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b " },
];

let course = courses.find(function (courses) {
  return courses.name === "a";
}); // This find function will return the element if the criteria matches to
// the element in the array. Otherwise it will return undefined.
console.log(course);

let courseIndex = courses.findIndex(function (courses) {
  return courses.name === "a";
}); // The findIndex function will return the index if the criteria matches with
// the element in the array. Otherwise it will return -1;
console.log(courseIndex);

// Arrow function
// ---------------------
const playVideo = (/* argument */) => {
  console.log("play");
};
playVideo();

const anotherCourse = courses.find((courses) => courses.name === "a");
console.log(anotherCourse);

// Removing all elements from the array
// -----------------------------------------
let numbers1 = [1, 2, 3, 4];
let anotherNumbers = numbers1;

// Solution 1
// numbers1 = []; // The array shouldn't be declared as const. If does, it will
// throw an error.
// With this approch, if any other object is referencing or pointing to this
// numbers1 array.Then this object will exist in the memory as old object
// and a new object of numbers1 array will be created in the memory.

// Solution 2
numbers1.length = 0;

// Solution 3
// numbers1.splice(0, numbers1.length);

// Solution 4
// while (numbers1.length > 0)
//     numbers1.pop();
console.log(numbers1);
console.log(anotherNumbers);

// Combining and Slicing array
// ----------------------------------
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// for combine
// const combined = firstArray.concat(secondArray); // returns a new array
// OR using spread operator will be,
// const combined = [...firstArray, ...secondArray]; // more flexible way.
// also
const combined = [...firstArray, "a", ...secondArray, "b"];
console.log(combined);

// for slice
const sliced = combined.slice(1, 4); // upto 4th index, 4th index is not included
console.log(sliced);
// if we called slice() method with no arguments, it will slice the entire array.

const copy = [...combined]; // copying an array using spread operator.
// Note:-
// If array of objects or object are combined. Actually, their reference are copied.
// Means, in primitives types values are copied. But in reference type references
// are copied

// Iterate over the array
// --------------------------
const digits = [1, 2, 3, 4, 5];

// using for-of loop
for (let digit of digits) console.log(digit);

// using forEach loop
digits.forEach((digit, index) => console.log(index, digit));

// Joining Array
// --------------------
const joinedArray = digits.join(","); // seperate the array elements by a coma(,)
console.log(joinedArray);
// Ex:-
const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

const joinedString = parts.join("-");
console.log(joinedString);

// Sorting Array
// ------------------
const toSort = [5, 2, 3, 1, 4];

console.log(toSort);
toSort.sort(); // Sort the array
console.log(toSort);

// If the array elements are objects
const languagesCourse = [
  { id: 1, course: "Node.js" },
  { id: 2, course: "JavaScript" },
  { id: 3, course: "C++" },
];

languagesCourse.sort((a, b) => {
  // The sort method takes 2 paremeters, that will be the 2 objects from the array.
  // a  <b - return -1
  // a > b - return 1
  // a === b -> return 0
  if (a.course < b.course) return -1;
  if (a.course > b.course) return 1;
  return 0;
});
console.log(languagesCourse);

// Reversing Array
// -----------------------
const reverse = toSort.reverse();
console.log(reverse);

// Testing the elements in an array
// -----------------------------------
const values = [1, 2, -1, 3, 4, 5];

// every() -> checks, wheather every elements in an array matches the given criteria.
const allPositive = values.every((value) => value >= 0);
// return true. If all the elements are positive. Else return false.
console.log(allPositive);

// some() -> checks, wheather aleast one element in an array matches the given criteria.
const atLeastOnePositive = values.some((value) => value >= 0);
console.log(atLeastOnePositive);
// Note:- if there are a millions of elements in the array. The some function
// only check the first element.

// Filtering an array
// -------------------------
const toFilter = [1, 2, 3, -1, -3, 4, 5];
// filter all positive numbers
const filtered = toFilter.filter((value) => value >= 0);
console.log(filtered);

// Mapping Array
// ---------------------
const toMap = [1, 2, 3];

// mapping to html components
const mapped = toMap.map((value) => "<li>" + value + "</li>");
const html = "<ul>" + mapped.join(" ") + "</ul>";
console.log(html);

// mapping to objects
const mappedObj = toMap.map((value) => ({ value }));
console.log(mappedObj);

//method chaining
const array = [1, 2, 3, "a", 4, 5, "b"];

const filteredNumbers = array
  .filter((e) => typeof e === "number")
  .map((n) => ({ value: n }))
  .filter((n) => n.value % 2 === 0)
  .map((obj) => obj.value);
console.log(filteredNumbers);

// Reducing an array
// -----------------------
const toReduce = [1, -1, 2, 3];

// The reduce fun: will reduce the given array to a single value.
let sum = toReduce.reduce((accumilator, currentValue) => {
  // operation of the callback fun:
  // a=0, c=1 => a=1
  // a=1, c=-1 => a=0
  // a=0, c=2 => a=2
  // a=2, c=3 => a=5
  return accumilator + currentValue;
}, 0);
// The above reduce() takes 2 arguments. first arg is a callback fun: and
// second arg is the initial value of accumilator (it is optional). If the
// accumilator does'nt set with any initial value, it vill defaultly set to
// the first value in the array.
console.log(sum);
