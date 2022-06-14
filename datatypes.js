//Datatypes
//1. Primitives or value types
let name="Farisy"; //string literal
let age=23; //number literal
let isAprooved=true; //boolean literal
let myName=undefined; //undefined
let selectorColor=null; //null

//Dynamic typing- JS is a dynamic PL
console.log(typeof(name)); //or console.log(typeof name);

//2. Reference types or objects
//object ex: Person, Car etc..
let person={
    name:"Farisy",
    age:"23"
};
//console.log(person);
console.log(person.name);
person.name="Mosh";
console.log(person.name);
person['name']='Mary';
console.log(person.name);
let selection='age';
person['age']=32;
console.log(person.age);


//Arrays.
let selectorColors=["red","Blue"];
selectorColors[2]="green"
selectorColors[3]=1;
console.log(selectorColors[0]);
console.log(selectorColors.length);