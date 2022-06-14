
let first = [1, 2, 3];
let second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined);

const copyOfArray = [0, 1, ...combined, 'Farisy', ...first, 'a', 'b'];
// We can also customize the array by adding elements to the array at any position 
// while using the spread operator


// Spread opearator with objects

const person = {
    name : "Farisy",
    age : 24
};
console.log(person);

const newPerson = {
    ...person,      // Spread operator is used with objects.
    gender : "Male"
};
console.log(newPerson);