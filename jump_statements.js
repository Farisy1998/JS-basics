//break and continue
let val=0;
while(val<=10)
{

    //if(i==5) break;
    if(val%2 === 0)
    {
        val++;
        continue; //if JS engine sees the continue keyword it will jump to the begining 
                  //of the loop and strats execution
    }
    console.log(val);
    val++;
}