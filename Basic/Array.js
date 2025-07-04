const myArray=[1,2,3,4,5,7,8,9,[3,4,5,6,7],[true,false]];
// console.log(myArray.flat(Infinity));

const myArray2=new Array(1,2,4,5,6,7);
// console.log(myArray2);
// console.log(myArray2.entries());
const myArray3= new Array(1,9,4,5,6,7,8);

// console.table([myArray2,myArray3]);

// console.log(myArray3.concat(myArray2));

// console.log(...myArray2,...myArray3);

// const date=...myArray2,...myArray3;
// console.log(myArray2.length);

// ################### Array Methods ##########################
let Num=[1,2,3,4];
                            // let Num=[1,2,3,4]; console.log(Num.push(2)); if you write like this you will get length of array
Num.push(2);   //push element to array
// console.log(Num);
// Num.pop() //remove element 
// Num.pop()
// Num.pop()
// Num.pop()
// console.log(Num);

Num.unshift(1); //add element in the begning 

// console.log(Num);

Num.shift() //remove the element from the begning 
// console.log(Num); 


// console.log(Num.includes(9)); //check the number is present or not 

// console.log(Num.indexOf(3));

let num1= Num.join(); // convert to string 
// console.log(typeof num1); // type of  string 

// +++++++++++++++++++++++++++++++++++ Slice and Splice ++++++++++++++++++++++++++++
let count=[1,2,3,4,5,6,7];
let count2=[9,8,7,6,5,4,3,2,1];
console.log(count.slice(1,3));  
console.log(`Count One = ${count}`); //here it does not modify the array 

console.log(count2.splice(0,3));
console.log(`Count two = ${count2}`); //here it modify the whole array



















