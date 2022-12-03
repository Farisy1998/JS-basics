// Like factory function, the constructor function is also used to construct
// or create or produce an object.
// Constructor function follows PascalCase naming convension.

function Circle(radius) {
  // In JS unclike other programing language like java, the 'this' keyword will
  // behave differentlly in different occation. Here, the this operator will
  // points to the current object from whoch the constructor function is called.
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// While using the constructor function. We use the 'new' operator to create
// an object.
const circle = new Circle(1);
// The new operator does three things:
// 1. It will create an empty object ( {} ).
// 2. It will then points the this operator to the early created empty object.
// 3. Finaly, it will return an object to the object variable.

console.log(circle);
