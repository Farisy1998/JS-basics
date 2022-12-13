// Function declaration syntax
// --------------------------------
function walk() {
    console.log('walk');
}

// Function expression syntax (anonymous function)
// ----------------------------------------------------
const run = function () {
    console.log('run');
};
// In the above expression the run is actually an object, which reference
// to the memory location where the function is actually stored.
console.log(run.length); // retrun 0, becuz no arguments
run();
//OR
const move = run; // Here both move and run points to the same reference

//Function expression syntax
// -------------------------------
const start = function ignited() {
    console.log('start');
};
start();

// Hoisting
// ------------------
greeting();
function greeting() {
    console.log('Hi');
}

// When we defined a function using function declaration syntax. That function
// can be invoked before it's declaration. But we cannot do this technic with
// as function which is declared using function expression syntax.

// The reason for this kind of invocation is because, when the JS engine starts
// to execute our code. it will move all the functions which is defined using
// function decalration syntax to the top of the file. This process is called
// Hoisting in JS.

// Arguments
// -----------------
// Since the JS is a dynamic language. We can store any type of data to a
// variable. Like,
let x = 1;
x = 'a';
x = true;
// Also this can be possible with the arguments of a function. Let me show,
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(1)) // This cannot return an error. Instead, returns NaN (ie, 1 + undefined)
console.log(sum()); // retuns NaN (ie, undefined + undefined)
console.log(sum(1, 2, 3, 4, 5)) /// retuns 3
// If we want to return the sum of all the arguments that is more than the
// no: of parameters. Then we can do so.
// All the functions in the JS have a special kind of object called arguments.
// This arguments is an object with key as index and value as arguments that
// we passed to the function.
// Here it is,
function totalSum(/*we can completelly remove the params, becuz we are dealing with the arguments object only*/) {
    // console.log(arguments);
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

// totalSum(); // will shows the arguments object
console.log(totalSum(1, 2, 3, 4, 5)); // returns the sum of all arguments

// Rest Operator
// ----------------
function returnArgs(...args /*rest operator */) {
    console.log(args);
}

returnArgs(1, 2, 3, 4); // return an array of arguments

function totalSumOfNumbers(...args) {
    // because the args is an array, we can use reduce method and returns the
    // total sum of all the numbers. ie,
    return args.reduce((accumilator, currentValue) => accumilator + currentValue);
}

console.log(totalSumOfNumbers(1, 2, 3, 4, 5, 10));

// A real world application with the rest operator
// Calculating the total proce of the items in a cart and discounting
function totalPrice(discount, ...prices) {
    const totalPrice = prices.reduce((a, c) => a + c);
    return totalPrice * (1 - discount);
}

console.log(totalPrice(0.1, 20, 30));

// Note: The rest parameter should be last parameter. Otherwise it will throw
// error. Becuz, the parameters before the rest parameter will be mapped to
// the respective successive arguments and the rest of the parameters will
// be mapped to the rest parameter. So, there should not be any parameter
// after the rest parameter. That's why it is called as rest parameter or rest
// operator.

// DefaultParameter
// --------------------
function calculateInterest(principal, rate = 3.5, years = 5) {
    // OR we xa set the default value to rate and years by,
    // rate = rate || 3.5;
    // years = years || 5;

    // But starting from  ES6 we have a new way for this ie using Default value
    // for the parameters in function itself.

    // Note: Once you give a parameter a default value you also give all the 
    // parameter after that a default value. or, The default parameter should 
    // be the last parameter and no parameters should after that.

    return principal * rate / 100 * years;
}

console.log(calculateInterest(10000, 3.5, 5));

// Getter and Setter
// -----------------------
const Person = {
    firstName: 'Salmanul',
    lastName: 'Farisy K',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

Person.fullName = 'john smith'; // calling setter function

console.log(Person.fullName); // calling getter function
// Note:- The name of both setter and getter functions should be same.

// try, catch
// ------------------
const Car = {
    brand: 'BMW',
    model: 'X1',
    get car() {
        return `${this.brand} ${this.model}`;
    },
    set car(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter firatName and lastName');
        this.brand = parts[0];
        this.model = parts[1];
    },
};

try {
    Car.car = 'BMW X5';
    console.log(Car);
}
catch (e) {
    console.log(e);
}
