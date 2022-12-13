// Object creation in JS
// ------------------------------
// using object literal syntax
const person = { // const person = new Object();
    name: 'john',
    age: 20,
    talk() {
        return 'talking';
    },
};

console.log(person);

// using a constructor function
function Person() {
    this.name = 'varun';
    this.age = 25;
    this.talk = function () {
        return 'talking';
    };
}

const me = new Person(); // {}, this -> {}
console.log(me);
console.log(me.age);
console.log(Person.age);

// using a factory function
function human(name, age) {
    return {
        name,
        age,
        talk() {
            return 'talking';
        },
    };
}

const you = human('arjun', 22); // const you = new Object();
console.log(you);

// using class
class SuperHuman{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.do = function () {
            return 'doing';
        };
    }

    talk() {
        return 'talking';
    }
}

const he = new SuperHuman('jojy', 26);
console.log(he);
console.log(he.do);
console.log(he.talk());

// Note:- In object creation,
// object literal syntax = factory function
// constructor function = class

// Whenever an object is created using 'this' keyword. The properties and methods
// are set to the object's property itself. Otherwise it will set as the
// Prototype properties of the object.