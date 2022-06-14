// Constructor function to create or to construct objects

function Circle(radius) {       //Use Pascal namimg convension for the constructor
    this.radius=radius;
    this.draw=function(){
        console.log('Drawing...');
    }

    //return this; // this statement is optional, because the function will itself return the object
}

const circle3 = new Circle(5);
console.log(circle3);
console.log(circle3.draw());

// Note:- While using factory function we write the object creation statement like the normal statement
// But while using the constructor function, we use the new operator to create an object
