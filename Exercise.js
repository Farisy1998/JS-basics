// Maximum of two numbers
// ----------------------------
function max(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}
console.log(max(2, 5));

// Landscape or Portrait
// --------------------------
function isLandscape(width, height) {
  return width > height;
}
console.log(isLandscape(1256, 125));

// FizzBuzz Game
// ---------------------
// Divisibe by 3 => Fizz
// Divisible by 5 => Buzz
// Both divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => Not a number
let output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}

// Demerit Points
// --------------------
checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoints = 5;

  if (speed < speedLimit + kmPerPoints) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoints);
  if (points < 12) console.log("Points", points);
  else console.log("License Suspended");
}

// Odd and Even number
// ----------------------
showNumbers(10);

function showNumbers(limit) {
  let i = 0;
  while (i <= limit) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
    i++;
  }
}

// Counting Truthy
// ---------------------
const array = [0, 2, 3, "", false];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let item of array) {
    if (item) count++;
  }
  return count;
}

// Show Properties of an object
// -------------------------------
const movie = {
  title: "a",
  releasedYear: 2022,
  rating: 4.5,
  director: "b",
};
showStringProps(movie);

function showStringProps(obj) {
  for (let key in obj) {
    typeof obj[key] === "string" ? console.log(key, obj[key]) : 0;
  }
}

// Sum of multiples of 3 and 5
// ---------------------------------
console.log(sum(10));

function sum(limit) {
  let i = 1;
  let sum = 0;

  while (i <= limit) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
    i++;
  }

  return sum;
}

// Grading System
// -------------------
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "E";
  else if (average < 70) return "D";
  else if (average < 80) return "C";
  else if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let total = 0;
  for (let value of array) total += value;
  return total / array.length;
}

// Show Stars
// ----------------
showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";

    for (let i = 0; i < row; i++) pattern += "*";

    console.log(pattern);
  }
}

// Prime Numbers
// ------------------
showPrimes(10);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

// Factory function and Constructor function
// ---------------------------------------------
const address = {
  state: "Kerala",
  city: "Kothamangalam",
  zipCode: 686671,
};
iterate(address);

function iterate(address) {
  for (let key in address) // Enumerating through the address object
    console.log(key, address[key]);
}

// Factory function
const anotherAddress = createAddress("Karnataka", "Banglore", 12345);
console.log(anotherAddress);

function createAddress(state, city, zipCode) {
  return {
    state,
    city,
    zipCode,
  };
}

// Constructor function
const addressObj = new Address("Kerala", "Kozhikode", 123456);
console.log(addressObj);

function Address(state, city, zipCode) {
  this.state = state;
  this.city = city;
  this.zipCode = zipCode;
}

// Object Equality
// -------------------
// Use the above Address constructor function
const address1 = new Address("a", "b", 0);
const address2 = new Address("a", "b", 0);

console.log(areEqual(address1, address2));
function areEqual(address1, address2) {
  for (let key in address1)
    if (address1[key] !== address2[key])
      return false;
  return true;
}

console.log(isSame(address1, address2));
function isSame(address1, address2) {
  return address1 === address2 ? true : false;
}

// Blog Post Object
// ------------------------
const post = {
  title: 'a',
  body: 'abc',
  author: 'xyz',
  views: 100,
  comments: [
    { author: 'a', body: 'b', },
    { author: 'c', body: 'd' },
  ],
  isLive: true,
};
console.log(post);

// Constructor Function
// ------------------------
const anotherPost = new Post('a', 'b', 'c');
console.log(anotherPost);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

// Price Range Objects
// -----------------------
let priceRange = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Pricey", minPerPerson: 21, maxPerPerson: 50 },
];
console.log(priceRange);