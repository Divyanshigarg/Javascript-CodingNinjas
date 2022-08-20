
//use of callback fucntion via example
settimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){
  console.log("y");
})

//returns
x
y
5000

//explanations
if javascript does not have this first class function and we did not had this callback function 
and we could not have passed this function to the another functions 
we could not have been able to do asynchronous operations
so using this 'web api's' and 'the set timeout' and 'the callback functions' we can achieve the asynchronous operations