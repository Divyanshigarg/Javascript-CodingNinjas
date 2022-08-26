
//callback aka task queue and microtask queue
//eg
console.log("start");

setTimeout(function cbT(){
  console.log('CB SetTimeout');
},5000);

fetch("https://api.netflix.com"). 
then(function cbF(){
    console.log("CB Netflix");
});

console.log("END");   

//returns
// Start 
// end 
// cb netflix
// cb settimeout

//callback queue aka task queue
After the timer gets expired, the callback function is put inside the Callback Queue, 
and the Event Loop checks if the Call Stack is empty and if empty, 
pushes the callback function from Callback Queue to Call Stack 
and the callback function gets removed from the Callback Queue.
It has lesser priority than microtask.


//microtask queue
Microtask Queue is like the Callback Queue,
but Microtask Queue has higher priority.
All the callback functions coming through Promises and Mutation Observer will go inside the Microtask Queue.