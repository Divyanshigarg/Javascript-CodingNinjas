
//block and scope
let b=200;   //script scope
{
    var a=20;       //global scope
    let b=10;       //block scope
    const c=30;    //block scope
    console.log(a);   //20
    console.log(b);   //10    b=10 is shadowing b=200
    console.log(c);   //30
}
console.log(b);     //200


//illegal shadowing
let a=10;
{
    var c=100;  
}

//legal shadowing
var a=10;
{
    let a=10;
}