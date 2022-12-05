// In JS every object have a property called constuctor.
// When we create an object using object literal syntax,
const x = {   // Object literal syntax.
  value: 1,
};
// The JS will use a special build-in constructor function called Object()
// to create the object x. It will look like,
// const x = new Object();

console.log(x.constructor);

// Eg:-
// Creating object using factory function or object literal syntax:-
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const myCircle = createCircle(2);
console.log(myCircle.constructor);

// On other hand, if we create an object using a constuctor function. Unlike
// factory function, the JS use the Constructor function itself to create the
// object and the constuctor function will be the constructor property of that
// object.

//Eg:-
// Creating object using constructor function:-
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(3);
console.log(another.constructor);

// Internally the difference is:-
// const circle = new Object(); -> object literal
// const circle = new Circle(); -> constructor function
// In conclusion, the constuctor property is used to create a new object.
