const currentDate=new Date()  //Date() is a constructor function.
console.log(currentDate);
// Visit the below link for more infos about the Date object:-
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const date1=new Date('2018 May 11 09:00');
// The similar date using the Date object's numeric values
const date2=new Date(2018, 4, 11, 9);
console.log(date2);

// The Date object have get and set methods
console.log(currentDate.getDate(), currentDate.getHours());
//console.log(currentDate.setFullYear(2017)); // This method will set the date of 
                                              // currentDate date variable to 2017
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());
console.log(currentDate.toISOString());     // This is the standard date-time format