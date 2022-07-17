function duplicate(arr) {
    let n=arr.length;
     for(let i=0;i<n;i++)
         {
             arr.push(arr[i]);
         }
     return arr;
 }
 