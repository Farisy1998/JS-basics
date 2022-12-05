// Primitive types or Value types
let x = 10;
let y = x;

console.log(y);
x = 20;
console.log(y); // The value of y is not changed

// Reference types
const a = { value: 10 };
const b = a;

console.log(b);
a.value = 20;
console.log(b); // The value of y is changed

// Here, in the primitive type. The value stored in the variable x is copied
// to the variable y. So, if any change made to variable x will not reflect
// to the variable y. Because they are independed variable.
// But in the reference type, the value or object is not stored in the
// variable x.Instead it is store in another memory location, and the
// address of that memory location is stored in the variable x. So, when we
// are copying the content in the variable x to y. Internally the address
// stored in the variable x is copied to the variable y. Because of that, if
// any change made to the variable x will also reflect in the variable y.

// In conclusion, the Primitives are copied by their value and Reference
// types are copied by reference.
