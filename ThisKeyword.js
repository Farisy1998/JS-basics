// In JS, 'this' is a keyword which will reference to the object that is
// executing the current function.

// ------------------------------------------------------------------
// If this is inside a method of an object -> this will reference to that object
// itself.
const video = {
  title: "a",
  play() {
    console.log(this); // this will reference to the video object itself.
  },
};

video.stop = function () {
  console.log(this); // similarlly the stop method is also the part of video
  // object. this will reference to the video object.
};

video.play();
video.stop();

// -------------------------------------------------------------
// If this is inside a regular function -> this reference to the window object
// in browser or global in node.

const videoObj = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(tag, this.title); // here this will reference to the window
            // object. Becuz the this is inside a call back function, which is
            // a regular function. So, the this will return the window object,
            // even it is inside a method of an object. The regular function
            // was called by the window object in the browser.

            // So, if we want to get the this to points to the videoObj object
            // we want to pass a this argument as second argument next to the 
            // call back function of forEach.
        }, this)
    }
}

videoObj.showTags();

// ------------------------------------------------------------------
// If this inside a constructor function. Let see,
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b'); // Here this will reference to the Video object. Becuz
// when ever we call a function using the new operator or when we create an
// object using the new operator.The new operator does 3 things:-
// 1. It will create a new empty object ( {} ).
// 2. It will then points the this operator to the early created empty object.
// 3. Finaly, it will return an object to the object variable.
// So, when we try to display the this keyword. it will return the newlly
// created object. That is, here in the case the 'Video' object

// Chaning the value of 'this'
// ----------------------------------

// Approch 1 -> assigning this to a new object.
const videoObj2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(tag, self.title);
        })
    },
};

videoObj2.showTags();

// Approch 2 -> Since functions in JS are object. They have methods in-build
// to access certain functionalities.

//Ex:-
function playVideo() {
    console.log(this);
}

playVideo();
playVideo.call({ name: 'farisy' }, 1, 2); // using call() method the this will points
                                    // to the object that we passed inside call().
playVideo.apply({ name: 'farisy' }, [1, 2]); // using apply() method.
// The difference b/w apply() and call() is. If we have multiple no: of arguments.
// Then we have to pass those arguments ad array in apply() and just as normal
// arguments in call().

const fun = playVideo.bind({ name: 'farisy' }); // using bind() method.
// Since the bind() method will not call the playVideo() function. Instead 
// it will retrun a new function.
fun();
// OR
playVideo.bind({ name: 'farisy' })();

// using bind() method
const movie = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(tag, this.title);
        }.bind(this))
    }
}

movie.showTags();

// Using arrow function syntax
const theMovie = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        this.tags.forEach(tag => {
            console.log(tag, this.title);
        })
    }
};

theMovie.showTags();
// while using the arrow function. The arrow function actually inherit the
// 'this' from the containing function. And 'this' is not rebound to a new
// object.