//----------------scope-----------------------------

// scope example

        // function f1(){
        //     var a=10;
        //     function f2(){
        //         var b=20;
        //         console.log(a+b); //30
        //     }
        //     f2();
        //     console.log(a); //10
        //  } 
        // f1();

//RHS LOOK UP --Reference error

        // function f1(){
        //     var a=10;
        //     function f2(){
        //         console.log(a+b); //Reference error
        //     }
        //     f2();
        //     console.log(a);
        //  } 
        // f1();

// rhs look up --> no error
        // var b=30;
        // function f1(){
        //     var a=10;
        //     function f2(){
        //         console.log(a+b); 
        //     }
        //     f2();
        //     console.log(a);
        //  } 
        // f1();

//lhs look up ---> non-strict mode and strict mode

//"use strict"; //  ReferenceError
        // function f1(){
        //     a=10;
        //     function f2(){
        //         console.log(a); 
        //     }
        //     f2();
        //     console.log(a);
        //  } 
        // f1(); 

//lhs look up ---> strict mode

        //"use strict";
        // function f1(){
        //     x=10;
        //     function f2(){
        //         console.log(x); 
        //     }
        //     f2();
        //     console.log(x);
        //  } 
        // f1();






