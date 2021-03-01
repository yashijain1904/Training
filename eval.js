// shadowing of variable x

    // function f1(){
    //     var x=10;
    //     function f2()
    //     {
    //           x=20;
    //           function f3()
    //             {
    //              console.log(x+" inside f3"); //20
    //             }
    //         f3();
    //     }
    //     f2();
    //     console.log(x+" inside f1");   //20
    //  } 
    // f1();

//eval function
        // function foo(str, a) {
        // 	eval( str ); // cheating!
        // 	console.log( a, b );
        // }

        // var b = 2;

        // foo( "var b = 3;", 1 ); // 1 3
        // console.log(b); //2

//in strict mode

    // function foo(str) {
    
    //     "use strict";
           //eval( str);
    //     console.log( a ); // ReferenceError: a is not defined
    //  }
    
    //  foo( "var a = 2" );

 //with example

    //  function foo(obj) {
    // 	with (obj) {
    // 		a = 2;
    // 	}
    // }

    // var o1 = {
    // 	a: 3
    // };

    // var o2 = {
    // 	b: 3
    // };

    // foo( o2 );
    // console.log( o2.a ); // undefined
    // console.log( a ); // 2 -- Oops, leaked global! because global variable create by lhs in non strict mode

//collision avoidance

    // function foo() {
    // 	function bar(a) {
    // 		var i = 3; // changing the `i` in the enclosing scope's for-loop // can resolve infinite loop by var i=3;
    // 		console.log( a + i );
    // 	}

    // 	for (var i=0; i<10; i++) {
    // 		bar( i * 2 ); // oops, infinite loop ahead!
    // 	}
    // }

    // foo();

//Invoking Function Expressions Immediately
    // var a = 2;

    // (function foo(){

    // 	var a = 3;
    // 	console.log( a ); // 3

    // })();

    // console.log( a ); // 2

//doubt resolve
    // undefined = true; // setting a land-mine for other code! avoid!

    // (function IIFE( undefined ){

    //     var a;
    //     if (a === undefined) {
    //         console.log( "Undefined is safe here!" );
    //     }

    // })();

  //doubt resolve
    // var foo = true;

    // if (foo) {
    //     var bar = foo * 2;
    //     //bar = something( bar );
    //     console.log( bar );
    // }
    
  // let example
        // var foo = true;

        // if (foo) {
        //     { // <-- explicit block
        //         let bar = foo * 2;
        //         console.log( bar );
        //     }
        //     console.log( bar );     // referenceerror b not define
        // }
     
    //const example
    
        // var foo = true;

        // if (foo) {
        //     var a = 2;
        //     const b = 3; // block-scoped to the containing `if`

        //     a = 3; // just fine!
        //     b = 4; // error!
        // }

        // console.log( a ); // 3
        // //console.log( b ); // ReferenceError!
       
     //hoisting is done per scope

        // function foo() {
        //     console.log( a ); // undefined
        //     var a = 2;
        //     console.log( a ); // 2
        // }   
        // foo();
        

     