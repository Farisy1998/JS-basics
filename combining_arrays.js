
let first = [1, 2, 3];
let second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

// Another method to slice the array. ie, slice()

const slice = combined.slice(1, 4); // Here the start index will included and end index will excluded.
console.log(slice);

// For object type arrays

const objArray1 = [
    {fruit1 : "Apple"},
    {fruit2 : "Musambi"}
];
const objArray2 = objArray1;

console.log(objArray2);

// When dealing with arrays of objects, here the references (memory location) of the
// 2 fruit objects are stored in the objArray1 and that reference is copied to the 
// objArray2 variable. So any changes made to the objects stored in objArray1 will 
// instanlttly reflected back in objArray2 also.