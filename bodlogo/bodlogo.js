// Define the array
var numbers = [10, 20, 30, 40, 50];

// Initialize a variable to store the sum
var sum = 0;

// Use a for loop to iterate over the array and calculate the sum
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add the current element to the sum
}

// Calculate the average
var average = sum / numbers.length;

// Output the average
console.log("The average is:", average);

 

const array=[10,20,30,40];
let answer=0;
for(let i=0; i <array.length; i++){
  answer=answer+array[i]
}
let ave =answer / array.length;
console.log( "the average is", ave)



const x= [15,25,35,45,55]
let y=0
for(let i =0; i< x.length; i++){ //4 0< 4 gehdee 0 4 hurtel davtagna
y= y+x[i]
}
let g=y / x.length;
console.log(g)




 let s= 2 
 for(let i =1; i< Infinity; i++){
 s **i
  break
 }
 let complex= s **i
console.log(complex)







let max=[1,3,5,22,89,46,17,31]
let minNumber=max[0]
let maxNumber=max[0]
let cons=0
for(let i =1; i<max.length; i++){
if(max[i]>maxNumber){
  maxNumber=max[i]
}
}if(max[i]<minNumber){
  minNumber=max[i]
}
console.log("Max number:", maxNumber); 
console.log("Min number:", minNumber); 