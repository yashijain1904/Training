//arrays
        // var a = [ ];

        // a[0] = 1;
        // // no `a[1]` slot set here
        // a[1]="yashi";
        // a[2] = [ 3 ];

        // console.log(a[2][0]);        //3
        // console.log(a[2][1]);		// undefined
        // console.log(a[1]);          //yashi
        // console.log(a.length);	// 3

        //---------------------
     
        // var a = [ ];

        // a[0] = 1;
        // // no `a[1]` slot set here
        // a[2] = [ 3 ];

        // console.log(a[1]);		// undefined

        // console.log(a.length);	// 3

        //------------------------

        // var a = [ ];

        // a[0] = 1;
        // a["foobar"] = 2;

        // a.length;		// 1
        // a["foobar"];	    // 2
        // a.foobar;		// 2

        //-------------------------

        // var a = [ ];

        // a["13"] = 42;

        // a.length;         // 14

//array like
        
        //1st way
            // function foo() {
            // 	var arr = Array.prototype.slice.call( arguments );
            // 	arr.push( "bam" );
            // 	console.log( arr );
            // }

            // foo( "bar", "baz" ); // ["bar","baz","bam"]
            // //foo() //['bam']

        //2nd way 
            // function foo() {
            //     var arr = Array.from( arguments );  //es6 method 
            //     arr.push( "bam" );
            //     console.log( arr );    // ["bar","baz","bam"]
            //     console.log(arr[2]);   //bam
            // }
            
            // foo( "bar", "baz" );
        

//strings -->immutable
            // var a = "foo";
            // var b = ["f","o","o"];

            // a.length;							// 3
            // b.length;							// 3

            // a.indexOf( "o" );					// 1
            // b.indexOf( "o" );					// 1

            // var c = a.concat( "bar" );			// "foobar"
            // var d = b.concat( ["b","a","r"] );	// ["f","o","o","b","a","r"]

            // a === c;							// false
            // b === d;							// false

            // a;									// "foo"
            // b;									// ["f","o","o"]

            // a[1]='y';
            // console.log(a.charAt(1));

            // c = a.toUpperCase();
            // a === c;	// false
            // a;			// "foo"
            // c;			// "FOO"

            // b.push( "!" );
            // b;			// ["f","O","o","!"]

       
//array methiods that can be borrow for string
            // var a = "foo";
            // a.join;			// undefined
            // a.map;			// undefined

            // var c = Array.prototype.join.call( a, "-" );
            // var d = Array.prototype.map.call( a, function(v){
            // 	return v.toUpperCase() + ".";
            // } ).join( "" );

            // console.log(c);				// "f-o-o"
            // console.log(d);				// "F.O.O."

            // console.log(a);             //foo

            // //mutator method doesn't work 
            // //var e=Array.prototype.reverse.call( a ); //typeError beacuse reverse() is mutator method ->
            // // methods that change the array objects. For example Unshift(), Shift(), Push(), Pop(), Reverse(), Sort() and Splice().
            
            // var c = a
            // 	// split `a` into an array of characters
            // 	.split( "" )
            // 	// reverse the array of characters
            // 	.reverse()
            // 	// join the array of characters back to a string
            // 	.join( "" );

            // console.log(c); // "oof"


//numbers
var a = 0.42;
var b = .42;
var c=   42.;
console.log(a);  //0.42
console.log(b);  //0.42     
console.log(c);  //42

var d=42.300;
console.log(d);  //42.3