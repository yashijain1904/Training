//call-stack and call-site

    // function baz() {
    //     // call-stack is: `baz`
    //     // so, our call-site is in the global scope

    //     console.log( "baz" );
    //     bar(); // <-- call-site for `bar`
    // }

    // function bar() {
    //     // call-stack is: `baz` -> `bar`
    //     // so, our call-site is in `baz`

    //     console.log( "bar" );
    //     foo(); // <-- call-site for `foo`
    // }

    // function foo() {
    //     // call-stack is: `baz` -> `bar` -> `foo`
    //     // so, our call-site is in `bar`

    //     console.log( "foo" );
    // }

    // baz(); // <-- call-site for `baz`

//Default binding 

    // function foo() {

    //     //"use strict";     //typeerror because this is undefined here
    //     console.log( this.a );
    // }

    // var a = 2;

    // foo(); // 2

//implicit binding
        // function foo() {
        //     console.log( this.a );
        // }

        // var obj = {
        //     a: 2,
        //     foo: foo
        // };

        // obj.foo();   //2
        //foo.call(obj); // 2   

// function foo() {
//     console.log( this.a );
// }

// var obj2 = {
//     a: 42,
//     foo: foo
// };

// var obj1 = {
//     a: 2,
//     obj2: obj2
// };

// obj1.obj2.foo(); // 42        

//passing callback function-- function callbacks lose their 'this' binding
  //this is undefined in my node js so program is not running

        // function foo() {
        // 	console.log( this.a ); //this refer to global object here not to obj because of callback function
        // }

        // function doFoo(fn) {
        // 	// `fn` is just another reference to `foo`

        // 	fn(); // <-- call-site!
        // }

        // var obj = {
        // 	a: 2,
        // 	foo: foo
        // };

        // var a = "oops, global"; // `a` also property on global object

        // doFoo( obj.foo ); // "oops, global"
        // //foo.call(obj); --> explicit binding
    

    //callback functions

        // function foo() {
        //     console.log( this.a );
        // }
        
        // var obj = {
        //     a: 2,
        //     foo: foo
        // };
        
        // var a = "oops, global"; // `a` also property on global object
        
        // setTimeout( obj.foo, 100 ); // "oops, global"

        // //explicit binding
        //    //setTimeout( function(){foo.call(obj);}, 100 ); // 2

    //hard binding- to resolve losing of this in callback

        // var a="yashi";
        // function foo(b,c) {
        //     console.log( this.a ,b,c );  
        // }
        
        // var obj = {
        //     a: 2
        // };
        
        // var bar = function() {
        //     foo.call( obj ,3,4);
        // };
        
        // bar(); // 2 3 4
        //setTimeout( bar, 100 ); // 2 3 4
        
        // `bar` hard binds `foo`'s `this` to `obj`
        // so that it cannot be overriden
        //bar.call( window ); // 2 3 4

    //new binding 
        // function foo(a) {
        //     this.a = a;
        // }
        
        // var bar = new foo( 2 );
        // console.log( bar.a ); // 2    


        
    //apply()
    
        // function foo([something,anything]) {
        //     console.log( this.a, something,anything );
        //     return this.a + something+anything;
        // }
        
        // var obj = {
        //     a: 2
        // };
        
        // var bar = function() {
        //     return foo.apply( obj, arguments );
        // };
        
        // var b = bar( [3,4] ); // 2 3 4
        // console.log( b ); // 9
       
    //bind()
        // function foo(something) {
        //     console.log( this.a, something );
        //     return this.a + something;
        // }
        
        // var obj = {
        //     a: 2
        // };
        
        // var bar = foo.bind( obj );
        
        // var b = bar( 3 ); // 2 3
        // console.log( b ); // 5   
        
    //forEach() internall do binding 
    
        // function foo(el) {
        //     console.log( el, this.id );
        // }
        
        // var obj = {
        //     id: "awesome"
        // };
        
        // // use `obj` as `this` for `foo(..)` calls
        // [1, 2, 3].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome

    //ignored this - by null/undefined in call()/apply()--> dynamic binding rules apply here
        // function foo() {
        //     console.log( this.a );
        // }
        
        // var a = 2;
        
        // foo.call( null ); // 2

    //arrow function and lexical this

        // function foo() {
        //     // return an arrow function
        //     return (a) => {
        //         // `this` here is lexically adopted from `foo()`
        //         console.log( this.a );
        //     };
        // }
        
        // var obj1 = {
        //     a: 2
        // };
        
        // var obj2 = {
        //     a: 3
        // };
        
        // var bar = foo.call( obj1 );
        // bar.call( obj2 ); // 2, not 3!    

        
    //arrow function    
        // function foo() {
        //     setTimeout(() => {
        //         // `this` here is lexically adopted from `foo()`
        //         console.log( this.a );
        //     },100);
        // }
        
        // var obj = {
        //     a: 2
        // };
        
        // foo.call( obj ); // 2    

    //self=this
        // function foo() {
        //     var self = this; // lexical capture of `this`
        //     setTimeout( function(){
        //         console.log( self.a );
        //     }, 100 );
        // }
        
        // var obj = {
        //     a: 2
        // };
        
        // foo.call( obj ); // 2    
