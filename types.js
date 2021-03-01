//typeof operator

    // console.log(typeof undefined     === "undefined"); // true
    // console.log(typeof true          === "boolean");   // true
    // console.log(typeof 42            === "number");    // true
    // console.log(typeof "42"          === "string");    // true
    // console.log(typeof { life: 42 }  === "object");    // true

    // console.log(typeof Symbol()      === "symbol");    // true
    // console.log(typeof null === "object"); // true

    // console.log(typeof function a(){ /* .. */ });  //function

    // var a=null;
    // console.log(!a);

//functions
    //  function a(b,c){

    //  }    
    //  console.log(a.length);  // no. of formal parameter
    //  console.log(typeof a);  //function

//arrays
    // var a=[1,2,3];
    // console.log(typeof a);  //object
    // console.log(a.length);   //3

//typeof always return type of value in a variable
    // var a = 42;
    // console.log(typeof a); // "number"
    
    // a = true;
    // console.log(typeof a); // "boolean"   
    
//The typeof operator always returns a string. So:    
    //console.log(typeof typeof 42); //string

//undefined variable -->is one that has been declared in the accessible scope,
                     // but at the moment has no other value in it.

    // var a;

    // typeof a; // "undefined"

    // var b = 42;
    // var c;

    // // later
    // b = c;

    // typeof b; // "undefined"
    // typeof c; // "undefined"  
    
//undeclared variable --> is one that has not been formally declared in the accessible scope.

    // var a;
    // console.log(typeof a); //undefined
    // console.log(typeof b); //undefined
    // console.log(b);  // referenceError because b is not declared

// function doSomethingCool() {
//     var helper =
//         (typeof FeatureXYZ !== "undefined") ?
//         FeatureXYZ :
//         function() { /*.. default feature ..*/ };

//     var val = helper();
//     // ..
// }    

