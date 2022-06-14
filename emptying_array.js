
let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// numbers.length=0;   // This statement will empty the array by truncating all the elements
//                     // from thew array
// console.log(numbers);


// // or, another method to empty an array
// numbers.splice(0, numbers.length);

// console.log(numbers);


// or, another method to empty an array

while(numbers.length > 0) {
    numbers.pop();
}

console.log(numbers);