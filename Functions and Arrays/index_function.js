a();
b();

//function statement aka function declaration
function a(){
    console.log("a called");
}

//function expression
var b=function (){
    console.log("b called");
}

//Difference btw function statement and function expression 
hoisting
a();               //will give output "a called"
b();              //while b will give typeerror


//Difference btw parameters and arguments
var b=function (param1,param2){  //parameter i.e the labels and identifiers get those values
    console.log("b called");
}
b(1,2)  //arguments  i.e the values which we pass inside the funtion