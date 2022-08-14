//What is Lexical Environment
Lexical Environment is created whenever an execution context is created.
It is the local memory plus the refernce to the lexical environemnt of parent.
And when i say parent ,it is the lexical parent where that actually the function sit insides the Code.


 function a()
 {
    var b=10;
      c();
    function c(){

    }
 }

a();
console.log(b);


Here ,c is lexically inside a.
      c's lexical parent a.
      a's lexical parent is global.

//what is scope chain
the whole chain of lexical Environment is known as scope chain.
And it defines whether a variable or function present inside the scope or not .