
let numbers = [2, 3, 1];

console.log(numbers.sort()); // First convert it to string and sort it and return it 
                             // to the array.
console.log(numbers.reverse()); // To reverse the elements in an array.


// Sorting with array of objects.

const courses = [
    {id : 1, name : "Node.js"},
    {id : 2, name : "javascript"}
];

console.log(courses.sort(function(a, b) {
    
    if(a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if(a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    if(a.name.toUpperCase() === b.name.toUpperCase()) return 0;
    
}));

