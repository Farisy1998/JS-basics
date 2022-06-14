// In js Strings are Objects aswell as primitives

// Primitive type
let msg="Hello";
console.log("msg is "+typeof(msg));
//or
console.log(msg[1],msg[2]);

// Object type
let message= new String("Hello");   // using String() constructor fun:
console.log("message is "+typeof(message));
console.log(message);
console.log(message.length);

//For more infos, folloew the link:-
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String