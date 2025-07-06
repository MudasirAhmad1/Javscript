
// //object creation //singleton constructor
// const tinderUser=new Object();
// tinderUser.id="123abc";
// tinderUser.name="Mudasir";
// tinderUser.isLoggedIn=false;
// console.log(tinderUser);

// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Mudasir",
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);


// //object merging
// const obj1={1:"A",2:"B",3:"C"};
// const obj2={3:"D",4:"E"};
// const obj3={obj1,obj2};
// console.log(obj3);
// const obj4=Object.assign(obj1,obj2);
// console.log(obj4);

// const obj5={...obj1,...obj2};
// console.log(obj5);

// //object destructuring
// const mudasir={
//     name:"Mudasir",
//     roll:23,
//     class:"second"
// }
// console.log(mudasir.roll);
// const {roll}=mudasir
// console.log(roll);

const symbol=Symbol(123);
console.log(typeof symbol);


const num={
    name:"Mudasir",
    class:"2nd",
    "Mobile":"979797675",
    Email:"Mudasirahmad32@gmail.com",
    age:34,
    fullname:{
        firstname:"Mudasir",
        [symbol]:"mykey1",
        lastname:"Ahmad",
        fathername:{
            firstname:"Abdul",
            lastname:"Aziz"
        }
    },
    Address:"Pattan"

}
// console.log(num.fullname.fathername.lastname);
// console.log(num["class"]);
// console.log(num.symbol);

num.greeting=function () {
    console.log(`Welcome to Function ${this.name}`);
    
}
console.log(num.greeting());



