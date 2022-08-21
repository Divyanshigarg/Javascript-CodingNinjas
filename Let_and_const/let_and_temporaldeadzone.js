//are let and const hoisted?

yes , let us see how 

console.log(a); //refrence error
console.log(b);  //no error
let a=10;
console.log(a);  //no error
var b=100;

//Expanation of why line no. 5 got error
The memory assigned to b to the var declaration and this variable b attach to the global context. 

while 
In case of let and const ,they are also allocated the memory and that is called hoisting.
But they are stored in different memory space than the global.
And we can not access these declaration before putting values inside in them.

There comes the concept of 'Temporal Dead Zone(TDZ)'. 

A temporal dead zone (TDZ) is the area of a block 
where a variable is inaccessible until the moment the computer completely initializes it with a value. 

so in the above program from line 7 to line 5 is the 'TDZ' hence we got the error.