weight="58";
height="1.60";

 BMI = weight / (height * height)
 
console.log("Your Body Mass Index is: ")
console.log(BMI)
            
if(BMI<=18.5)
console.log("Underweight");
else if(BMI>=18.6 && BMI<=24.9)
    console.log("Healthy");
else if(BMI>=25 && BMI<-25.9)
    console.log("Overweight");
else
    console.log("Obese");
            