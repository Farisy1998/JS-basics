// Arrays

const numbers = [3, 4];
console.log(numbers);

// To add elements to the end of the array
numbers.push(5, 6);
console.log(numbers);

// To add elements to the begining of the array
numbers.unshift(1, 2);
console.log(numbers);

// To add elements to a purticular position of an array
// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers);

// Finding elements from an array in primitive types
console.log(numbers.indexOf(1));
console.log(numbers.indexOf('1'));

numbers.push(1,3);
console.log(numbers);
console.log(numbers.lastIndexOf(1));

console.log(numbers.includes(1));   // Return true, if the element 1 exists in the array


// Finding elements from an array in reference types
const courses = [
    { id : 1, name : 'a'},
    { id : 2, name : 'b'},
    { id : 3, name : 'c'},
];

const courseFound = courses.find(function(course){  // The function inside the find()
                                                    // method is a call-back function
    return course.name === 'a';
});

console.log(courseFound);


// Removing elements from array
console.log(numbers);

const popedFromLast=numbers.pop();  // To remove an element from the last of the array
console.log(popedFromLast);     // Retrun the poped element
console.log(numbers);

const popedFromFirst=numbers.shift();   // To remove an element from the first of the array
console.log(popedFromFirst);    // Retrun the poped element
console.log(numbers);

const popedFromAnyPos=numbers.splice(2, 2); // To remove an element from the any position of the array
console.log(popedFromAnyPos);   // Retrun the poped element
console.log(numbers);
