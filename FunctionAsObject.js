// In JS a function is an object.
// let me show:-
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(2);
console.log(circle1);
// If we create an object using the 'new' operator. Internally the JS engine
// make a call to a special function called call() function by creating an
// empty object. That is,
Circle.call({}, 1, /* arg2, arg3, ...*/);
// Here the first argument ie, empty object of the call function '{}' will
// act as the target for point the this keyword in the function. And if we
// create an object with out the 'new' operator, the first argument will be
// the global object. ie, window object. Like,
Circle.call(window, 1);

// Similar to the call function. There is an another function called;
Circle.apply({}, [1, 2, 3]); // here we pass the args list as array.

console.log(Circle.name); // Like objects, here we can access the members of
// of a Circle object.
console.log(Circle.length); // Will return the no: of arguments.
// Like an object in JS, the circle also have a property called constructor
// property. This constructor property is holding a Function() which is
// a constructor function that is used to create an object from the function.
console.log(Circle.constructor);

// We can allso use the below syntax to declare the Circle function
// other than the syntax in line no: 10.
// Here it is:-

const Circle2 = new Function(
  "radius",
  `
    this.radius = radius;
    this.draw = function () {
    console.log("draw");
  };
`
); // The drclared Circle function internally in JS represented like this.

// Now we can call the Circle2 just like calling the Circle function to
// create an object.
const myCircle = new Circle2(1);
console.log(myCircle);
