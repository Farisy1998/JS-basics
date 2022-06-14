//value types - copied by value
let x1 = 10;
let y1 = x1;

console.log("x1 = "+x1+" and y1 = "+y1);

// reference types - copied by reference or address
let x2 = {value:23};
let y2 = x2;

console.log("x2 = "+x2.value+" and y2 = "+y2.value);
x2.value=30;
console.log("x2 = "+x2.value+" and y2 = "+y2.value);

//Ex:-
let number=10;

function increaseNumber(number) {
    number++;
}
    
increaseNumber(number);
console.log(number);    // Here the output will be 10. Because, the number variable inside the increaseNumber() 
                        // function is locala to the function itself only. So, any chages made to the number 
                        // variable with in function will not affect to the number variable outside of the 
                        // increaseNumber() function.

//Ex:-
let obj={value:10};

function increaseNumber(obj) {
    obj.value++;
}
    
increaseNumber(obj);
console.log(obj);   // here the output  will be 11. Because, the obj is a reference type
                    // variable. So, any changes made to the actual 'obj' variable, will also 
                    // be reflected to the value of 'obj' variable outside of the function.