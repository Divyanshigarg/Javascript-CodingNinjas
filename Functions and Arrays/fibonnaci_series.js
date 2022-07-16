function isperfectsquare(n)
{
    let s=parseInt(Math.sqrt(n));
    return(s*s==n);
}
n=5;
function isfibonacci(n)
{
    return isperfectsquare(5*n*n +4) || isperfectsquare(5*n*n -4);
}
isfibonacci(n) ?
    document.write("true")  : document.write("false");