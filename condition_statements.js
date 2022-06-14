//if...else
let hour=13;
if(hour >= 6 && hour < 12)
{
    console.log('Good Morning...');
}
else if(hour<18 && hour>=12)
{
    console.log('Good Afternoon');
}
else
{
    console.log('Good Evening');
}


//Switch Case
let role='guest';

switch(role){
    case 'guest' :
        console.log('Guest user');
        break;
    case 'Modarator':
        console.log('Moderator user');
        break;
    default :
        console.log('Unknown user');
}
