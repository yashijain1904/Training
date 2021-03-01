// var Task = {
// 	setID: function(ID) { this.id = ID; },
// 	outputID: function() { console.log( this.id ); }
// };

// // make `XYZ` delegate to `Task`
// var XYZ = Object.create( Task );

// XYZ.prepareTask = function(ID,Label) {
// 	this.setID( ID );
// 	this.label = Label;
// };

// XYZ.outputTaskDetails = function() {
// 	this.outputID();
// 	console.log( this.label );
// };

// XYZ.prepareTask(123,'Yashi');
// XYZ.outputTaskDetails(); // 123 Yashi

//-----------------------------------



// function Foo() {}

// var a1 = new Foo();

// Foo.prototype.constructor = function Gotcha(){};

// console.log(a1.constructor); // Gotcha(){}
// console.log(a1.constructor.name); // "Gotcha"

// console.log(a1); // Foo {}

//----------------------------------

// var Foo = {};

// var a1 = Object.create( Foo );

// console.log(a1); // Object {}

// Object.defineProperty( Foo, "constructor", {
// 	enumerable: false,
// 	value: function Gotcha(){}
// });

// console.log(a1); // Gotcha {}

//-------------------------------------------

//concise methods
        // var Foo = {
        // 	bar: function(x) {
        // 		if (x < 10) {
        // 			return Foo.bar( x * 2 );
        // 		}
        // 		return x;
        // 	},
        // 	baz: function baz(x) {
        // 		if (x < 10) {
        // 			return baz( x * 2 );
        // 		}
        // 		return x;
        // 	}
        // };

        // //console.log(Foo.bar(2));
        // console.log("hi  "+ Foo.baz(4));