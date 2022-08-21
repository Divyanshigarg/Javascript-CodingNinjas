Difference btw TypeError vs SyntaxError vs ReferenceError

//TypeError:Assignment to constant variable
const b=10;
b=1000;
 
It will give TypeError because we are trying to assign again to the const variable.

//formal defination
The TypeError object represents an error when an operation could not be performed, 
typically (but not exclusively) when a value is not of the expected type


//SyntaxError
const b;    //will give error because it is not initialized with declaration
//also
let a=1000;
let a=100;  //error bcoz no duplicate declaration

SyntaxError is caused by the incorrect use of a pre-defined syntax.


//ReferenceError
console.log(a);
let a=10;           //error bcoz of Temporal Dead Zone
//also
console.log(x);    //error bcoz trying to access the variable that is not present in the global context
