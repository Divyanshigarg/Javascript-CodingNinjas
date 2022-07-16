const weekDAY= new Array(7);
weekDAY[0] = 'Sunday' ;
weekDAY[1] = 'Monday';
weekDAY[2] = 'Tuesday';
weekDAY[3] = 'Wednesday';
weekDAY[4] = 'Thursday';
weekDAY[5] = 'Friday';
weekDAY[6] = 'Saturday';

function returnDay(x){
  return (x < 1) || (x > 7) ? null : weekDAY[x];
}

//Calling the function for result and printing it to the console
//using console.log()
console.log(returnDay(2));