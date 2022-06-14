// Template literals uses `` pactic charecters
// Ex:-

const msg = "This is my first message.";
console.log(msg);

// with templatel iteral
const anotherMsg = `One man said 'Everything is possible and nothing is impossible' from his most experience.`
console.log(anotherMsg);

// Also the template literals will be useful in formating the string, like:-
// const mail=
// `Hi john, 

// Thank you for joinig my mailing list.

// Regards,
// Salmanul Farisy K

// contact @
// Ph: 9947441869`;

// console.log(mail);

// Also with the template literals we can add placeholders to the string
// like;

const name="Salmanul Farisy K";
const contact=9947441869;
const newMail=
`Hi john, 

Thank you for joinig my mailing list.

Regards,
${name}

contact @
Ph: ${contact}`;

console.log(newMail);

// We can also use mathematical or any exressions and we cal also even call a function 
// that returns a value with in that '{}' of the placeholder.