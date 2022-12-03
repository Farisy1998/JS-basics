// OOP's programming style

const circle = {
  radius: 1,
  location: {
    x: 2,
    y: 3,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

circle.draw();

// In JS, the objects are dynamic in nature. Means, the object can grow or
// shrink, or in other words we can add or delete the member of an object.
// let me show:

const car = {
  name: "Meclaren",
};

// Adding a data member
car.color = "Black";
console.log(car);

// Adding a method
car.start = function () {
  console.log("start");
};
console.log(car);

// Deleting a data member
delete car.color;
console.log(car);

// Deleting a method
delete car.start;
console.log(car);
