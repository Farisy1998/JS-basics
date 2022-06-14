const numbers = [1, 2, 3, 4, 5];

// const joined = numbers.join(',');   // Here the join() parameter is optional
const joined = numbers.join('-')

console.log(joined);

const msg = "This is my first message";
const splitMsg = msg.split(' ');

const joinedMsg = splitMsg.join('-');
console.log(joinedMsg);