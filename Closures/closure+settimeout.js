//using let
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("hello world");
}
x();
//returns
hello world 
1
2
3             //new copy of i
4
5

//using var
function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("hello world");
}
x();
//returns
hello world 
6
6                   //bcoz the copy of the i refers to the same memory location
6
6
6

//soo for correct output we will do
function x(){
    for(let i=1;i<=5;i++){
      function close(x){
        setTimeout(function (){
            console.log(i);
        },x * 1000);
    
    close(i);
        }
    console.log("hello world");
}
x();

//returns
hello world 
1
2
3               //here we are giving new copy of i everytime using close function
4
5
