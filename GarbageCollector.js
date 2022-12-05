// In JS when we create an object or variable, it will be allocated with a
// memory.
const x = { value: 1 }; // memory is allocated to the object x
console.log(x);

// When we done using this object or a variable. The JS will deallocate the
// memory of that object or variable. For perfoming this operation, in JS
// there is a special program or a component called Garbage Collector. The
// duity of this garbage collector is to collect objects or variables that
// are not in use or un-wanted and take away from the memory by deallocation
// of the memory. This will lead to improve the perfomance of our program and
// better memory management.
