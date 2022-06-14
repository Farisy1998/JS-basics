//objects in JS
let circle = {
    radius: 1,  // variable and it's value with in an object
    loc: {      // an object with in an object
        x: 1,   
        y:2
    },
    isVisible: true,    // boolean it's value with in an object
    draw: function() {  // a function with in an object
        console.log('drawing');
    },
    move: function() {
        console.log('moving');
    }
};

circle.draw(); // according to oops concept, here the draw is a method which 
                // has a functionality of logging a drawing message to the console

circle.move();//    ''    ''     ''      ''      ''       ''