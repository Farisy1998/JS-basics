for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Finding odd number between 1 and 5
console.log("Odd numbers b/w 1 and 5");
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// for-in loop
// The for-in loop is used to iterates over the properties of an object.
const person = {
  name: "Farisy",
  age: 20,
};

for (let key in person) {
  console.log(key, person[key]);
}
// for-in loop on array
let selectedColors = ["red", "green", "blue"];
for (let index in selectedColors) {
  console.log(index, selectedColors[index]);
}

// for-of loop
// The for-of loop is used to iterates over the elements of an array.
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// Note: In for-in loops, we will deal with the index of each element. But in
// for-of loop, we deal with each item.
