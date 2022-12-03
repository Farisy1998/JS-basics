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
