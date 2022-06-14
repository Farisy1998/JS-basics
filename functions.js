//Functions - fundamental bulding block of JS
        //performing a task
        function greet(name, lastName) //parameter declared
        {
            //function body

            console.log("Hello "+name+lastName);
        }
        greet("Farisy"," K"); //argument passed
        greet("Mary");

        //performing calculation
        function squre(no)
        {
            return no*no;
        }
        let number=squre(2);
        console.log(number);
        //or
        console.log(squre(16)); //two function call here