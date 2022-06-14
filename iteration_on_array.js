
let numbers = [1, 2, 3, 4, 5];

for(number of numbers) {
    console.log(numbers.indexOf(number), ':' ,number);
}


// Another method

// numbers.forEach(function(number){
//     console.log(numbers.indexOf(number), ':', number);
// });


// Using arrow function
numbers.forEach((number, index) => console.log(index, ':', number));