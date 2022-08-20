//closures
The function along with its lexical scope bundled together forms a closure. 

function x() {
    var a=12;
    function y()
    {
      console.log(a);
    }
    return y;
}
var z=x();
console.log(z);  //return the whole y fucntion
z();             //return 12


//uses of closures
-Module design pattern 
-Currying 
-Functions like once 
-memorize
-setTimeouts 
-Iterators
