//Operators
    //Arithametic, Assignment, Comparison, Logical & Bitwise operators.
        //Arithametic opertr
        let x=10;
        let y=3;
        //Expression(x+y) is a statement whcih produces some value
        console.log(x+y) //Addition
        console.log(x-y) //Subtract
        console.log(x*y) //Multiplication
        console.log(x/y) //Division
        console.log(x%y)//reminder of division
        console.log(x**y)// exponentation
        console.log(++x)// pre increment
        console.log(x++)//post increment
        console.log(--x)// pre decement
        console.log(x--)// post decrement

        //Assignment opertr
        let a=15;
        a++;
        a=a+5;
        //or a+=5
        //a*=3

        //comparison opertr
        let b=23;
        console.log(b>25);
        console.log(b>=23);
        console.log(b<25);
        console.log(b<=23);
        console.log(b==23);
        console.log(b!=25);

        //Equality opertr
        //Strict equality opertr (both type and value  elements on either side of equality opetr should be equal)
        //console.log(1 === 1); will return true
        //console.log('1' === 1);   will return false
        //BUT if
        //console.log(1 == 1);   will return true
        //consoe.log('1' == 1);  will return true

        //loose equality opertr (only value tobe equal)
        console.log(1==1);
        console.log('1' == 1);
        console.log(true == 1);


        //Ternory opertr
        let points=110;
        let type = points > 100 ? 'gold' : 'silver';
        console.log(type);


        //Logical opertr
        //AND(&&), OR(||) and NOT(!)
        //AND
        /*console.log(false && true);

        let highIncome = true;
        let goodCreditScore = true;
        let eligibleForLoan = highIncome && goodCreditScore;
        console.log(eligibleForLoan);*/

        //OR
        // console.log(false && true);

        // let highIncome = false;
        // let goodCreditScore = true;
        // let eligibleForLoan = highIncome || goodCreditScore;
        // console.log(eligibleForLoan);

        //NOT
        console.log(false && true);

        let highIncome = false;
        let goodCreditScore = false;
        let eligibleForLoan = highIncome || goodCreditScore;
        console.log('Eligbible', eligibleForLoan);

        let applicationRefused = !eligibleForLoan;

        console.log('ApplicationRefused', applicationRefused);

         //The result of a logical expression not be true or false
         //ex:
         console.log(false || 'farisy'); //The string is not empty it has charecters. So it is truthy
         console.log(false || 1);
         console.log(false || 0);
         //Falsy (false):
            //undefined
            //null
            //0
            //false
            //''
            //NaN

         //Anything that is not Falsy it is Truthy

         console.log(false || 1 || 2); //short circuting

         //ex:
         let userColor='red';
         let defaultColor='blue';
         let currentColor=userColor || defaultColor
         console.log(currentColor); //The JS interpret the value of a boolen expression. if it founds that 
                                    //it is falsy or truthy, then it will ignore the next boolean value andreturn 
                                    //the first boolen value only. Otherwise it will continue.

        

        //Bitwise Opertr - They work under individual bits
        //Bitwise OR(|)
            //1 = 00000001
            //       |
            //2 = 00000010
            //--------------
            //    00000011 - 3
            console.log(1 | 2);
        //Bitwise AND(&)
            //1 = 00000001
            //       &
            //2 = 00000010
            //--------------
            //    00000000 - 0
            console.log(1 & 2);
        
            //Access control system
            //Read, Write and Excecute
            //Read - 00000100
            //Write - 00000100
            //Exceute - 00000001

            const readPermission = 4;
            const writePermission = 2;
            const executePermission = 1;
            
            let myPermission =0;
            myPermission=myPermission | readPermission | writePermission;
            console.log(myPermission);

            let message=(myPermission & readPermission) ? 'yes' : 'no'