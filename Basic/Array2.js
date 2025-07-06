const myArray=['BAtman','Superman','Hulkman','Iron Man'];
const myArray1=['Shaktiman','Najraj','Jackal','Mahakal'];
const myArray3=myArray1.concat(myArray);
// console.log(myArray3);

//################# Spread operator but use likre an arary[]//

const all=[...myArray,...myArray1];
// console.log(all);

const anotherarray=[1,2,3,4,5,6,[2,4,65,78,],[true,false]];
console.log(anotherarray.flat(Infinity));

console.log(Array.isArray("Mudasir"));  //check it is array or not 

console.log(Array.from("Muzamil"));

const score=100;
const score1=400;
const score3=500;
console.log(Array.of(score,score1,score3));

const newresult=[...score,...score1,...score3];
console.log(newresult);






