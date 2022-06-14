//Factory functions to create objects

function createCircle(radius)       //Use camel namimg convension for the factory function
{
    return {
        radius,     // if the name of both key and value is same, then we want to use only one notation for both key and value
        draw() {    // we can also declare a function like this instead of the previous notation
            console.log('Drawing...');
        }
    }
}

const circle1=createCircle(2);

console.log(circle1);
console.log(circle1.radius);
circle1.draw();

const circle2=createCircle(4);
console.log(circle2);