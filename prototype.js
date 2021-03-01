

// function Person(first, last, age, gender, interests) {

//     // property and method definitions
//     this.name = {
//       'first': first,
//       'last' : last
//     };
//     this.age = age;
//     this.gender = gender;
//   }

// var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// console.log(person1.__proto__);  //Person{}

// no prototype chaining

        // function Person(first, last, age, gender, interests) {
        //     this.name = {
        //       first,
        //       last
        //     };
        //     this.age = age;
        //     this.gender = gender;
        //     this.interests = interests;
        //   };

        //   Person.prototype.greeting = function() {
        //     alert('Hi! I\'m ' + this.name.first + '.');
        //   };

        //   function Teacher(first, last, age, gender, interests, subject) {
        //     Person.call(this, first, last, age, gender, interests);
        
        //     this.subject = subject;
        //   }
      
        // var t1=new Teacher("yashi","jain",22,"female","Dancing","CS");
        // var p1=new Person("abc","xyz",22,"female","hug");
        // console.log(t1.greeting()); //typeError 

//prototypal inheritance

        function Foo(name) {
        	this.name = name;
        }

        Foo.prototype.myName = function() {
        	return this.name;
        };

        function Bar(name,label) {
        	Foo.call( this, name );
        	this.label = label;
        }

        // // here, we make a new `Bar.prototype`
        // // linked to `Foo.prototype`

        //1st way 
            // pre-ES6
            // throws away default existing `Bar.prototype`
            //Bar.prototype = Object.create( Foo.prototype );
            //--> mylabel is only in bar beacuse new object create that link to foo.prototype

        //2nd way    
            // //Bar.prototype = Foo.prototype ; --> myLabel is also added to Foo because of refernce 

        //3rd way    
            // ES6+
            // modifies existing `Bar.prototype`
            Object.setPrototypeOf( Bar.prototype, Foo.prototype );

        Bar.prototype.myLabel = function() {
        	return this.label;
        };

        var a = new Bar( "a", "obj a" );
        var f1=new Foo("yashi");
        console.log(a.myName()); // "a"
        console.log(a.myLabel()); // "obj a"

        console.log(Object.getOwnPropertyNames(f1.__proto__)); //[constructor,myname]
        console.log(Object.getOwnPropertyNames(a.__proto__));   //[constructor,mylabel] 
        

// inheritance by classes

        // class Person {
        //     constructor(first, last, age, gender, interests) {
        //       this.name = {
        //         first,
        //         last
        //       };
        //       this.age = age;
        //       this.gender = gender;
        //       this.interests = interests;
        //     }
        
        //     greeting() {
        //       console.log(`Hi! I'm ${this.name.first}`);
        //     };
        
        //     farewell() {
        //       console.log(`${this.name.first} has left the building. Bye for now!`);
        //     };
        //   }

        //   class Teacher extends Person {
        //     constructor(first, last, age, gender, interests, subject, grade) {
        //       super(first, last, age, gender, interests);
        
        //       // subject and grade are specific to Teacher
        //       this.subject = subject;
        //       this.grade = grade;
        //     }
        //   }

        //   let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
        //     snape.greeting(); // Hi! I'm Severus.
        //     snape.farewell(); // Severus has left the building. Bye for now.
        //     snape.age // 58
        //     snape.subject; // Dark arts


//Setting & Shadowing Properties
     
    // myObject.foo = "bar";

   //1) when foo is in myobject --> foo in my object value changes to "bar"
    

   //2) when foo is not in myobject but in prototype chain

       //a)  it's not marked as read-only (writable:true) 
        //then a new property called foo is added directly to myObject,
        //resulting in a shadowed property.
        
        //b) writable:false ->the setting of the property value will
        // silently be ignored. Either way, no shadowing occurs.
        // -->use Object.defineProperty(..)  to add foo to myObject.

        //c) it's a setter, then the setter will always be called.
        // No foo will be added to (aka, shadowed on) myObject, nor will the foo setter be redefined.
        // -->use Object.defineProperty(..)  to add foo to myObject.

        // var anotherObject = {
        //     a: 2
        // };
        
        // var myObject = Object.create( anotherObject );
        
        // anotherObject.a; // 2
        // myObject.a; // 2
        
        // anotherObject.hasOwnProperty( "a" ); // true
        // myObject.hasOwnProperty( "a" ); // false
        
        // console.log(Object.getOwnPropertyDescriptor( anotherObject, "a" ));
        
        // myObject.a++; // oops, implicit shadowing!
        
        // console.log(anotherObject.a); // 2
        // console.log(myObject.a); // 3
        
        // console.log(myObject.hasOwnProperty( "a" )); // true


// "Constructors"

        // function Foo() {
        // 	this.val=10;
        // }

        // Foo.prototype.constructor === Foo; // true

        // var a = new Foo();  
        // a.constructor === Foo; // true

//Mechanics
        // function Foo(name) {
        // 	this.name = name;
        // }

        // Foo.prototype.myName = function() {
        // 	return this.name;
        // };

        // var a = new Foo( "a" );
        // var b = new Foo( "b" );
   

        // console.log(a.myName()); // "a"
        // console.log(b.myName()); // "b"

//constructor redux
        // function Foo() { this.val=10; }

        // Foo.prototype = { /*...*/}; // create a new prototype object

        // var a1 = new Foo();
        // a1.constructor === Foo; // false!
        // a1.constructor === Object; // true!        



//isprototypeof

        //    function Foo() { this.c=10;}
        //    var a=new Foo();
        //    console.log(Foo.prototype.isPrototypeOf( a )); //true
        //    console.log(Foo.prototype); //Foo
        //    console.log(a.__proto__); //Foo
        //    console.log(Object.getPrototypeOf( a )); //Foo

//creating links

        // var foo = {
        // 	something: function() {
        // 		console.log( "Tell me something good..." );
        // 	}
        // };

        // var bar = Object.create( foo );

        // bar.something(); // Tell me something good...    
        
        //another example

        // var anotherObject = {
        //     a: 2
        // };
        
        // var myObject = Object.create( anotherObject, {
        //     b: {
        //         enumerable: false,
        //         writable: true,
        //         configurable: false,
        //         value: 3
        //     },
        //     c: {
        //         enumerable: true,
        //         writable: false,
        //         configurable: false,
        //         value: 4
        //     }
        // } );
        
        // myObject.hasOwnProperty( "a" ); // false
        // myObject.hasOwnProperty( "b" ); // true
        // myObject.hasOwnProperty( "c" ); // true
        
        // myObject.a; // 2
        // myObject.b; // 3
        // myObject.c; // 4