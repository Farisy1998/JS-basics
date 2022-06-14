// Dynamic nature of objects in JS

const Kushaq= {     // While using the const keyword, we cannot reassign the Kushaq object
    // to an new one like, Kushaq = {};
cc: 1000,
color: 'Black'
}

console.log(Kushaq);
Kushaq.price='10 lack';     // dynamically creating the property price for the object kushaq
Kushaq.start= function(){
console.log("Starting...");
}
console.log(Kushaq);

delete Kushaq.start;    // dynamically deleting the method start of the object kushaq
delete Kushaq.price;    // dynamically deleting the property price of the object kushaq
console.log(Kushaq);

// Note:- Here the kushaq object is a cosntant, but we are changing the properties of the object 
// even it is a constant and we really confusing  about what type of constant is that, the constnt which allows
// to change it's value, what is it?. No don't worry, it is really a constant, but here we are only changing the 
// property of the kuzhaq object and we are not re-assigning the kushaq object to its new peoperties like,
// 
//                      kushaq = {
//    
//                      }



// In JS every object has a property called constructor

function MyCar(cc, color) {
this.cc=cc;
this.color= color;
}
const alto=new MyCar(800, 'Black');
console.log(alto.constructor);


function  superCar(cc, color) {
return {
cc,
color
}
}

const m5= superCar(4395, 'red');
console.log(m5.constructor);