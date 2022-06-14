const courses = [
    { id : 1, name : 'a'},
    { id : 2, name : 'b'},
    { id : 3, name : 'c'},
];

const courseFound = courses.find(course => course.name === 'a');    //Using arrow function

console.log(courseFound);