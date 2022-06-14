function Circle(radius) {
    this.radius=radius;
    this.draw = function() {
        console.log("Drawing...");
    };
}

const circle=new Circle(3);
console.log(circle);    

// In JS every object has a property called constructor
// property and this property will return the function
// name which is reasonable for creating the object, here
// it will return the funCircle function.

// When we created a function using this keyword syntax
// like structure, the js engine will use a 'Function' constructor
// for creating the object. And we can see this by acessing the
// constuctor property (ie, c.constructor).

console.log(circle.constructor);
                                
// Here is how the js will internally do the object creation by using 
// the 'Function' constructor.                         

// Internally the js engine will create the object by using the followig syntax:-
//ie, 

        const Circle2 = new Function('radius', `
            this.radius=radius;
            this.draw=function() {
                console.log("draw");
            }
        `);

// Methods of a function as object

// call()
Circle.call({}, 1);      // The first arg of the call method is a self arg which
                        // point to the this operator in the funCircle itself. And
                        // remaning args are actual args.
                        // The first arg in cal methord ie, {} can also bw replace
                        // the 'window' arg ie, call(window, 1) which will point to
                        // to the currently executing global object ie, window.
// apply()
Circle.apply({}, [1])    // The apply func: is used to pass arguments in arrays
