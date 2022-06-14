const circle = {
    radius:1,
    draw() {
        console.log("Draw");
    }
};

// The for-in loop is used with objects to access it's properties.
for (let key in circle) {
    console.log(key, circle[key]);
}

// The for-of loop is used to iterate over array elements
// for (key of circle) {
//   console.log(key, circle[key]);
// }
// So the abl=ove for-of loop will return an error
// So we code like;
      for (let key of Object.keys(circle)) {
        // The Object.keys() method will return an array with 
        // elemets as keys. So, then we can use the for-of loop
        // to iterate over the array.
        // The Object is a build in constructor. So when an object
        // is trying to get created, the object that is going to create
        // will be transilated into a biuld in object function ie,
            // function Object() {
              
            // }
        // (we already learned that in js functions
        // are objects, which can have properties and its values
        // like actual objects).
        console.log(key, circle[key]);
      }

      // Also we can use entries insted of keys porperty
            for(let entry of Object.entries(circle)) {
              console.log(entry);   // The enrtries property of the Object is used to
                                    // return a single entry or a single key value pair
                                    // of the object with in an array. So, more than one
                                    // array will be returned with alll of the arrays having
                                    // 2 elements of key and the value of that key.
            }

// To check wheather a property is present in an object
if('radius' in circle) console.log("yes");
else console.log("No");