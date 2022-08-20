//const

let a;
const b;
b=1000; //error
a=10;   //noerror
console.log(a);

So , what we can conclude is that const is blocked-scope that are meant to be declared and initialized together only . 
We can not modify the const variable futher i.e. The value of a constant can't be changed through reassignment .

//strictness
const >> let >> var;

//prefer to use
const >> let >> var;