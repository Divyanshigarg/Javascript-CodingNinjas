function sum(n)
{
     var sum=0;
    var index;
    for(index=2;index<=n;index+=2)
        sum+=index;
    return sum;
}

function main() {

var num=parseInt(readLine());
   
var ans=sum(num);
  
console.log(ans);
}