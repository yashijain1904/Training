// example-1
    // function foo() {
    //     var a = 2;

    //     function bar() {
    //         console.log( a ); // 2
    //     }

    //     bar();
    // }

    // foo();

    //when functions are passed as arguments
    // function foo() {
    //     var a = 2;

    //     function baz() {
    //         console.log( a ); // 2
    //     }

    //     bar( baz );
    // }

    // function bar(fn) {
    //     fn(); 
    // }    

//closure with settimeout function()

    // function wait(message) {

    //     setTimeout( function timer(){
    //         console.log( message );
    //     }, 1000 );

    // }

    // wait( "Hello, closure!" );

//closure example
    // function foo() {
    //     var a = 2;
    //     function bar() {
    //         console.log( a );
    //     }
    //     return bar;
    // }
    // var baz = foo();
    // baz();    // 2     

//loops + closure

  //this will print 6 6 6 6 6
        // for (var i=1; i<=5; i++) {
        //     setTimeout( function timer(){
        //         console.log( i ); 
        //     }, i*1000 );
        // }
      
    //this will print 1 2 3 4 5
        // for (let i=1; i<=5; i++) {
        //     setTimeout( function timer(){
        //         console.log( i ); 
        //     }, i*1000 );
        // }


         // or using let because variable will be declared not just once for the loop, but each iteration
        // And, it will, helpfully, be initialized at each subsequent iteration with the value from the 
        //end of the previous iteration.

           //this will print 1 2 3 4 5 beacuse i has block scope
        // for (var i=1; i<=5; i++) {
        //     (function(){
        //         var j = i;
        //         setTimeout( function timer(){
        //             console.log( j );
        //         }, j*1000 );
        //     })();
        // }
           
    //modules
        // function CoolModule() {
        //     var something = "cool";
        //     var another = [1, 2, 3];
        
        //     function doSomething() {
        //         console.log( something );
        //     }
        
        //     function doAnother() {
        //         console.log( another.join( " ! " ) );
        //     }
        
        //     return {
        //         doSomething: doSomething,
        //         doAnother: doAnother
        //     };
        // }
        
        // var foo = CoolModule();
        
        // foo.doSomething(); // cool
        // foo.doAnother(); // 1 ! 2 ! 3        

    //Modules are just functions, so they can receive parameters:

        // function CoolModule(id) {
        //     function identify() {
        //         console.log( id );
        //     }

        //     return {
        //         identify1: identify
        //     };
        // }

        // var foo1 = CoolModule( "foo 1" );
        // var foo2 = CoolModule( "foo 2" );

        // foo1.identify1(); // "foo 1"
        // foo2.identify1(); // "foo 2"  
        
    //
            // var foo = (function CoolModule(id) {
            //     function change() {
            //         // modifying the public API
            //         publicAPI.identify = identify2;
            //     }
            
            //     function identify1() {
            //         console.log( id );
            //     }
            
            //     function identify2() {
            //         console.log( id.toUpperCase() );
            //     }
            
            //     var publicAPI = {
            //         change: change,
            //         identify: identify1
            //     };
            
            //     return publicAPI;
            // })( "foo module" );
            
            // foo.identify(); // foo module
            // foo.change();
            // foo.identify(); // FOO MODULE    

    //this example-1
            // var stu={
            //     name:"yashi",
            //     edu:"btech",
            //     sum:function(){
            //     var a=10;
            //     var b=20;
            //     console.log(a+b + " is sum"); //30 is sum
            //     console.log(this); //{ name: 'yashi', edu: 'btech', sum: [Function: sum] }
            //     } 
            // }   
            // stu.sum();
    
    //this example-2
            // function identify() {
            //     return this.name.toUpperCase();
            // }
            
            // function speak() {
            //     var greeting = "Hello, I'm " + identify.call( this );
            //     console.log( greeting );
            // }
            
            // var me = {
            //     name: "Kyle"
            // };
        
            
            // speak.call( me ); // Hello, I'm KYLE

             // identify.call( me ); // KYLE
            // identify.call( you ); // READER

    //incorrect working
            // function foo(num) {
            //     console.log( "foo: " + num );
            //     this.count++; // here this doesn't represent foo
            // }
            
            // foo.count = 0;
            
            // var i;
            
            // for (i=0; i<10; i++) {
            //     if (i > 5) {
            //         foo( i );
            //     }
            // }
            // console.log( foo.count ); // 0   
            // //console.log( this); //undefined
            
    //correct working
    
            // function foo(num) {
            //     console.log( "foo: " + num );
            //     data.count++;
            // }
            
            // var data = {
            //     count: 0
            // };
            
            // var i;
            
            // for (i=0; i<10; i++) {
            //     if (i > 5) {
            //         foo( i );
            //     }
            // }
        
            // console.log( data.count ); // 4

     // another correct way

            // function foo(num) {
            //     console.log( "foo: " + num );

            //     // keep track of how many times `foo` is called
            //     // Note: `this` IS actually `foo` now, based on
            //     // how `foo` is called (see below)
            //     this.count++;
            // }
            
            // foo.count = 0;
            
            // var i;
            
            // for (i=0; i<10; i++) {
            //     if (i > 5) {
            //         // using `call(..)`, we ensure the `this`
            //         // points at the function object (`foo`) itself
            //         foo.call( foo, i );
            //     }
            // }
        
            // console.log( foo.count ); // 4       

             

