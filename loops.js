//for loop
for(let i=0;i<5;i++)
{
    if(i%2 != 0)
    {
        console.log(i);
    }
}


//while loop
let i=0;
while(i<=5)
{
    if(i%2 != 0)
    {
        console.log(i);
    }
    i++;
}


//do while
let j=0;
do{
    if(i%2 != 0)
    {
        console.log(i);
    }
    i++;
}while(i<=5);


//infinate loops
// let k=0;
// while(k<5)
// {
//     console.log(i);
// } 


//for in loops
const person={
    name:'farisy',
    age:23
};

for (let key in person)
    console.log(key, person[key]);

// const colors=['red','green','blue'];
// for(let index in colors)
//     console.log(colors[index]);


//for of loops
const colors=['red','green','blue'];
for(let color of colors)
    console.log(color);

//for in loops is used to iterate over properties of 
//an object and for of loops is used to iterate over elements 
//or items in an array