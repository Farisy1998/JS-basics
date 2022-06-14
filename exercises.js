//Exercise
//Swapping variables
let a='red';
let b='blue';
console.log(a+" & "+b);

let temp=a;
a=b;
b=temp;
console.log(a+" & "+b);

//Exercise: Maximum of two no:s
function maxNum(n1,n2)
{
    return (n1>n2) ? n1+" is greater" : n2+" is greater";
}

console.log(maxNum(20,33));

//Exercise: image is in landsacpe or portrait
function isLandscape(width, height)
{
    return (width>height) ? "The image is landscape" : "The image is portrait";
}
    
console.log(isLandscape(200, 1500));



//Exercise: fizzBuzz game
//if the number is:
    //divisible by 3 => Fizz
    //divisible by 5 => Buzz
    //divisible by both 3 & 5 => FizzBuzz
    //not divisible by both 3 or 5 => input
    //not a number => 'Not a number'
function fizzBuzz(input)
{
    if(typeof input !== 'number')
        return NaN;
    else if((input%3 === 0) && (input%5 === 0))
        return "FizzBuzz";
    else if(input%3 === 0)   
        return "Fizz";
    else if(input%5 === 0)
        return "Buzz";
    else
        return input;
}

console.log(fizzBuzz(false));



//Exercise: Demerit points
function checkSpeed(speed)
{
    const speedLimit=70;
    const kmPerPoint = 5

    if( speed < speedLimit+kmPerPoint ) 
        return "Ok";
    const points = Math.floor((speed-speedLimit)/kmPerPoint);
    if(points>=12)
        return "License Suspended";
    return points+" points";
        
}

console.log(checkSpeed(130));



//Exercise: Odd or Even
function checkNum(number)
{
    if(number % 2 === 0)
        return "Even number";
    return "Odd number";
}

console.log(checkNum(10));



//Exercise: count truthy
function countTruthy(array)
{
    let count=0;
    for(item of array)
    {
        if(item)
            count++;
    }
    return count;
}

console.log(countTruthy([0,null, undefined, '', 1, 2, 3]));



//Exersice: String properties
const movie={
    title: 'Memento',
    releaseYear: 2004,
    rating: 4.7,
    director: 'Chrystopher Nolen'
}

showProperties(movie);

function showProperties(obj)
{
    for(properties in obj)
        console.log(properties, ": "+obj[properties]);
}



//Exersice: Multiples of 3 and 5
console.log(sum(10));

function sum(limit)
{
    let sum=0;
    for(i=1;i<=10;i++)
    {
        if( i % 3 === 0 || i % 5 === 0 )
            sum+=i;
    }

    return sum;
}



//Exersice: Grade
//1-59: E
//60-69: D
//70-79: C
//80-89: B
//90-100: A
const marks=[80,80,50];
console.log(calcGrade(marks));

function calcGrade(marks)
{
    let m=0;
    for(i of marks)
    {
        m=m+marks[i];
    }
    avg=m/marks.length;
    if(avg <= 59)
    {
        return "E grade";
    }
    if(60 <= avg <= 69)
    {
        return "D grade";
    }
    if(70 <= avg <= 79)
    {
        return "C grade";
    }
    if(80 <= avg <= 89)
    {
        return "B grade";
    }
    if(90 <= avg <= 100)
    {
        return "A grade";
    }
}



//Exersice: Printing stars
printStars(5);

function printStars(count)
{
    for(let row=1; row<=count;row++)
    {
        let pattern="";
        for( let col=1; col<=row;col++)
        {
            pattern+="*";
        }
        console.log(pattern);
    }
}



//Exersice: Prime numbers
//with a limit
showPrime(12);

function showPrime(limit) {
    for(let number=2;number<=limit;number++) {
        isPrime=true;
        for(let factor = 2; factor < number; factor++ ) {
            if(number % factor === 0)
            {
                isPrime=false;
                break;
            }
        }
        if(isPrime) console.log(number);
    }
}

//with out limit
console.log(prime(2));

function prime(number)
{
    if(isAPrime(number)) return number + " is a prime";
    return number + " is not a prime";
}

function isAPrime(number)
{
    for(factor=2; factor<number; factor++)
        if(number % factor === 0)
            return false;
    return true;
}



// Exercise
// const address = {
//     street:"Koovalloor",
//     city:"Palarimangalam",
//     zipCode:686671
// };

// function showAddress(address) {
//     for(let key in address) {
//         console.log(key,":", address[key]);
//     }
// }

// showAddress(address);


// Using factory function
// function createAddress() {
//     return {
//         street:"Koovalloor",
//         city:"Palarimangalam",
//         zipCode:686671
//     };
// }

// const address=createAddress();

// console.log(address);


//Using constructor function

// function SetAddress(street, city, zipCode) {
//     this.street=street;
//     this.city=city;
//     this.zipCode=zipCode;
// }

// const address=new SetAddress("Koovalloor", "Pallarimangalam", 686671);
// console.log(address.street);
// console.log(address.city);
// console.log(address.zipCode);



//Exercise

function Address(street, city, zipCode) {
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}

const address1 = new Address('a', 'b', 0123);

const address2 = new Address('a', 'b', 0123);

function areEqual(address1, address2) {
    if(address1.street === address2.street && address1.city === address2.city && address1.zipCode == address2.zipCode) {
        return true;
    }
    return false;
}

function areSame(address1, address2) {
    if(address1 === address2) {
        return true;
    }
    return false;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));



// Exercise
// Block post object

let post = {
    title:'a',
    body:'b',
    author:'c',
    views:10,
    comments:[
        {author:'a'},
        {body:'b'}
    ],
    isLive:true
};

console.log(post);


// Exercise
// Array of objects
 let priceRange = [
     {label:'$', toolTip:'Inexpensive', minPerPerson:0, maxPerPerson:10},
     {label:'$$', toolTip:'Moderate', minPerPerson:11, maxPerPerson:20},
     {label:'$$$', toolTip:'Expensive',minPerPerson:21, maxPerPerson:30}
 ];

 console.log(priceRange);