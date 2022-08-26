
///Deep about Event Listener
document.getElementById("clickMe")
.addEventListener("Click",function xyz(){
  console.log("Button clicked");
});
//this code means
when javascript will excute this line so it will pickup this element and will add an event click listener
that event is clicked and if event will occur it will call the callback function 'xyz'


///Closures demo with event listner
-closures are used for data hiding
the closure here is being used to preserve the count keyword

function attachEventListeners(){
let count=0;
document.getElementById("clickMe")
.addEventListener("Click",function xyz(){
  console.log("Button clicked",++count);
});
}
attachEventListeners();


///garbage collector
There’s a background process in the JavaScript engine that is called garbage collector . 
let user = {
    name: "John"
  };
//If the value of user is overwritten as user=null, the reference is lost:
user=null;
//
Now John becomes unreachable.
There’s no way to access it, no references to it. 
Garbage collector will junk the data and free the memory.