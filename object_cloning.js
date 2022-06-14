const circle = {
    radius:1,
    draw() {
        console.log("Draw");
    }
};

// const another = {};

// for (let key in circle) {
//     another[key] = circle[key];
// }

// Special syntax for object cloning
const another=Object.assign({}, circle);    // We can kept the '{}' empty or we can use 
                                            // it to add new property for the another object
                                            // ie;
                                            // const another=Object.assign({color:"red"}, circle);
// The above syntax is exactly similar to the for-in loop statement for object cloning.
// Both of them will return the same result.
console.log(another);

// OR we can also use the syntax
const another2={...circle};     // Here, by using the spread operator(...)

console.log(another2);