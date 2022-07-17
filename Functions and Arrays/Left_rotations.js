function rotateLeft(arr) {
    //first removing the arr[0]='1'
    var removed=arr.splice(0,1);   
    
    //than shifting the array elements
    if(arr==='removed'){
        arr.shift();
    }
    //then pushing the arr[0] into the shifted array
    arr.push(removed);
    return arr;
}

