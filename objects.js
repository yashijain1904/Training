//objects vs string
 
     //var strPrimitive = "I am a string";
    // console.log(typeof strPrimitive);							// "string"
    // console.log(strPrimitive instanceof String);	            // false

    // var strObject = new String( "I am a string" );
    // console.log(typeof strObject); 								// "object"
    // console.log(strObject instanceof String);                   // true

//length and charAt()
   
    // console.log( strPrimitive.length );			// 13
    // console.log( strPrimitive.charAt( 3 ) );    //m

//contents of objects
        // var myObject = {
        //         a: 2
        // };

        // console.log(myObject.a);		// 2  --> refer as property acces

        // console.log(myObject["a"]);	// 2  --> refer as key access

//difference btw . and []

        // var wantA = true;
        // var myObject = {
        //     a: 2,
        //     name:"yashi"
        // };

        // var idx;

        // if (wantA) {
        //     idx = "a";
        // }

        // console.log( myObject.idx ); // undefined
        // console.log( myObject["name"] ); // yashi
        // console.log( myObject[idx] ); // 2

//computed property name
        
        // var prefix = "foo";

        // var myObject = {
        //     [prefix + "bar"]: "hello",
        //     [prefix + "baz"]: "world"
        // };

        // console.log(myObject["foobar"]); // hello
        // console.log(myObject.foobaz); // world

//methods      
        // function foo() {
        // 	console.log( "foo" );
        //     console.log( this.a );
        // }

        // var someFoo = foo;	// variable reference to `foo`
        // var a=100;
        // var myObject = {
        // 	someFoo: foo,
        //      a:10
        // };

        // myObject.someFoo.call(myObject);

//declare a function expression as part of the object-literal
        // var myObject = {
        //     foo: function foo() {
        //         console.log( "foo" );
        //     }
        // };
        
        // var someFoo = myObject.foo;
        
        // someFoo();		// function foo(){..}
        
        // myObject.foo();	// function foo(){..}    

//Arrays -> add property to array 
        // var myArray = [ "foo", 42, "bar" ];

        // myArray["baz"] = "baz";

        // console.log(myArray.length);	// 3

        // console.log(myArray.baz);	// "baz"   
        // console.log(myArray);     


//passing number as property name to array      
        // var myArray = [ "foo", 42, "bar" ];
        // myArray["3"] = "bazi";
        // console.log(myArray.length);	// 4   
        // console.log(myArray[3]);	// "baz"   
        // console.log(myArray);  

//cloning of objects
//        var circle={
//            radius:2,
//            places:['A','B'],
//            draw(){console.log("draw")}
//        };

//        //reference is pass
//                var newobj=circle;
//                newobj.radius=3;
//                console.log(newobj,circle); //both circle and newobj radius =3
       
//        //shallow copy
//             var newobj=Object.assign({},circle);
//                 //here primitive datatypes values not affected 
//                         newobj.radius=3;
//                         console.log(newobj,circle); //newobj radius=3 and circle radius =2

//                 //non-premitive like array they change in both objects      
//                         newobj.places[0]='C';
//                         console.log(newobj,circle);

//         //deep copy
//             var newobj= JSON.parse( JSON.stringify( circle ) );
//                 //here primitive datatypes values not affected 
//                         newobj.radius=3;
//                         console.log(newobj,circle) ///newobj radius=3 and circle radius =2
   
//                 //non-premitive like array they also not  change in both objects      
//                         newobj.places[0]='C';
//                         console.log(newobj,circle); //only newobj.places[0] change to 'C'

//property descripter

        // var myObject = {
        // a: 2
        // };


        // Object.defineProperty( myObject, "b", {  //define b property
        // value: 3,
        // writable: true,
        // configurable: true,
        // enumerable: true
        // } );

        // console.log(Object.getOwnPropertyDescriptor( myObject, "b" )); //{ value: 3, writable: true, enumerable: true, configurable: true }
        // console.log(myObject);  //{ a: 2, b: 3 }
          
 //writable
            //without strict mode

                //var myObject = {};

                // Object.defineProperty( myObject, "a", {
                //     value: 2,
                //     writable: false, // not writable!
                //     configurable: true,
                //     enumerable: true
                // } );

                // myObject.a = 3;

                // myObject.a; // 2

            
            //with strict mode
                    // "use strict";

                    // var myObject = {};
                    
                    // Object.defineProperty( myObject, "a", {
                    //     value: 2,
                    //     writable: false, // not writable!
                    //     configurable: true,
                    //     enumerable: true
                    // } );
                    
                    // myObject.a = 3; // TypeError           
                   
 //configurable to false is one way action and cannot be undone
 //if the property is already configurable:false, writable can always be changed from true to false 
 //without error, but not back to true if already false.
        //  var myObject = {
        // 	a: 2
        // };

        // myObject.a = 3;
        // myObject.a;					// 3

        // Object.defineProperty( myObject, "a", {
        //         value: 4,
        //         writable: true,
        //         configurable: false,	// not configurable!
        //         enumerable: true
        // } );

        // myObject.a;					// 4
        // myObject.a = 5;
        // myObject.a;					// 5

        // Object.defineProperty( myObject, "a", {
        //         value: 6,
        //         writable: true,
        //         configurable: true,
        //         enumerable: true
        // } ); // TypeError    
        
//delete in configurable: false not possible
        // var myObject = {
        // 	a: 2
        // };

        // myObject.a;				// 2
        // delete myObject.a;
        // myObject.a;				// undefined

        // Object.defineProperty( myObject, "a", {
        // 	value: 2,
        // 	writable: true,
        // 	configurable: false,
        // 	enumerable: true
        // } );

        // myObject.a;				// 2
        // delete myObject.a;
        // myObject.a;      //2
       
 //object constant
        //  var myObject = {};

        //  Object.defineProperty( myObject, "FAVORITE_NUMBER", {
        //          value: 42,
        //          writable: false,
        //          configurable: false
        //  } ); 
     
 //prevent extensions- prevent an object from having new properties added to it,
                    // but otherwise leave the rest of the object's properties alone

        // //"use strict"; //typeerror
        // var myObject = {
        //         a: 2
        // };
        
        // Object.preventExtensions( myObject );
        
        // myObject.b = 3;
        // console.log(myObject.b); // undefined        
     
//  [[get]]  --> internally call on object for accessing property  
        //  var b=10;
        //  var myObject = {
        // 	a: 2
        // };

        // console.log(myObject.b); // undefined
       
//  getter
        // var myObject = {
        // 	// define a getter for `a`
        // 	get a() {
        // 		return 2;
        // 	}
        // };

        // Object.defineProperty(
        // 	myObject,	// target
        // 	"b",		// property name
        // 	{			// descriptor
        // 		// define a getter for `b`
        // 		get: function(){ return this.a * 2 },

        // 		// make sure `b` shows up as an object property
        // 		enumerable: true
        // 	}
        // );

        // console.log(myObject.a); // 2

        // console.log(myObject.b); // 4     

        // myObject.a = 3;  //here value and writable ignored

        // console.log(myObject.a); // 2

 //setter
     
        //  var myObject = {
        // 	// define a getter for `a`
        // 	get a() {
        // 		//return this.a;
        //                 return this._a_;
        // 	},

        // 	// define a setter for `a`
        // 	set a(val) {
        // 		//this.a= val * 2;
        //                 this._a_ = val * 2;
        // 	}
        // };

        // myObject.a = 2;

        // console.log(myObject.a); // 4       

//existence
        // var myObject = {
        // 	a: 2
        // };

        // console.log(("a" in myObject));				// true
        // console.log(("b" in myObject));				// false

        // console.log(myObject.hasOwnProperty( "a" ));	// true
        // console.log(myObject.hasOwnProperty( "b" ));	// false        

//enumeration
        // var myObject = { };

        // Object.defineProperty(
        // 	myObject,
        // 	"a",
        // 	// make `a` enumerable, as normal
        // 	{ enumerable: true, value: 2 }
        // );

        // Object.defineProperty(
        // 	myObject,
        // 	"b",
        // 	// make `b` non-enumerable
        // 	{ enumerable: false, value: 3 }
        // );
        
        // for (var k in myObject) {              //print properties
        //         console.log( k, myObject[k] );   // "a" 2
        // }
        
 //iteration  for arrays,string,nodelist ,set

        //1st method for..of  as iterator
                //    var myArray = [ 1, 2, 3 ];

                //    for (var v of myArray) {  //for ..in will print index
                //            console.log( v );
                //    }
                   // 1
                   // 2
                   // 3       

        //2nd method
                // var myArray = [ 1, 2, 3 ];
                // var it = myArray[Symbol.iterator]();

                // console.log(it.next()); // { value:1, done:false }
                // console.log(it.next()); // { value:2, done:false }
                // console.log(it.next()); // { value:3, done:false }
                // console.log(it.next()); // { done:true }        

        // myObject.propertyIsEnumerable( "a" ); // true
        // myObject.propertyIsEnumerable( "b" ); // false

        // Object.keys( myObject ); // ["a"]
        // Object.getOwnPropertyNames( myObject ); // ["a", "b"]    
        
 //       

  // vastly simplified `mixin(..)` example: --> explicit mixin
        // function mixin( sourceObj, targetObj ) {
        // 	for (var key in sourceObj) {
        // 		// only copy if not already present
        // 		if (!(key in targetObj)) {
        // 			targetObj[key] = sourceObj[key];
        // 		}
        // 	}

        // 	return targetObj;
        // }

        // var Vehicle = {
        // 	engines: 1,

        // 	ignition: function() {
        // 		console.log( "Turning on my engine." );
        // 	},

        // 	drive: function() {
        // 		this.ignition();
        // 		console.log( "Steering and moving forward!" );
        // 	}
        // };

        // var Car = mixin( Vehicle, {
        // 	wheels: 4,

        // 	drive: function() {
        // 		Vehicle.drive.call( this );
        // 		console.log( "Rolling on all " + this.wheels + " wheels!" );
        // 	}
        // } );

        // console.log(Car.drive());

//implicit mixin
        // var Something = {
        // 	cool: function() {
        // 		this.greeting = "Hello World";
        // 		this.count = this.count ? this.count + 1 : 1;
        // 	}
        // };

        // Something.cool();
        // Something.greeting; // "Hello World"
        // Something.count; // 1

        // var Another = {
        // 	cool: function() {
        // 		// implicit mixin of `Something` to `Another`
        // 		Something.cool.call( this );
        // 	}
        // };

        // Another.cool();
        // Another.greeting; // "Hello World"
        // Another.count; // 1 (not shared state with `Something`)        