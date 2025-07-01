// Slice and splice have only one difference is that splice modify the original array and slice will not modify or remove elements 
const mudi=[1,2,3,4,5,6]
const mudi2=mudi.slice(1,3)
console.log(`Here is the splice result:  ${mudi2}`);
console.log(`Here is Splice it will modify the original array: ${mudi}`);

const muzamil=[1,2,3,4,5,6]
const muzamil2=muzamil.splice(1,3)
console.log(`Here is the splice result:  ${muzamil2}`);
console.log(`Here is Splice it will modify the original array: ${muzamil}`);
