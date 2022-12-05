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
// first param -> index from where the elements to be added
// second param -> delete count, if needed
// third param -> elements to be added
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
let middle = newNumbers.splice(1, 2);
// first param -> index from where the elements to be added
// second param -> delete count, if needed
console.log(middle); // returns the array of deleted numbers.
console.log(newNumbers);

// Finding elements (Primitives)
// ------------------------
const another = [1, 2, 3, 1, 4, 5];

console.log(another.indexOf('a')); // returns -1, because a is not present in the array
console.log(another.indexOf(1));
console.log(another.lastIndexOf(1)); // retuns the last index at with the 1 is present
console.log(another.includes(5)); // returns true, if the element exist.
console.log(another.indexOf(1) !== -1); // returns true, if the element exist.
console.log(another.indexOf(1, 2)); // first parameter -> element to find
                            // Second param -> index from where the search want to begin

// Finding elements (Objects)
// -------------------------------
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b ' },
];

let course = courses.find(function (courses) {
    return courses.name === 'a';
}); // This find function will return the element if the criteria matches to 
// the element in the array. Otherwise it will return undefined.
console.log(course);

let courseIndex = courses.findIndex(function (courses) {
    return courses.name === 'a';
}); // The findIndex function will return the index if the criteria matches with
// the element in the array. Otherwise it will return -1;
console.log(courseIndex);

// Arrow function
// ---------------------
const anotherCourse = courses.find(courses => courses.name === 'a');
console.log(anotherCourse);