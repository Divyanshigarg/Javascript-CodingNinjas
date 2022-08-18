//Anonymous Function:function without name and are used when the functions are used as values
function (){

}

//named functions
var b=function xyz(){
    console.log("b called");
}

b();
xyz(); 

//first class function aka first class citizens
The ability of functions to be used 
-as values and
-assigned to the variable and
-can be passed as an arguments and
-can be returned from the functions 

const b=function (){
    return fucntion xyz() {

    }
}
console.log(b()); //returns f xyz(){}

