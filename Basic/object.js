
//object creation //singleton constructor
const tinderUser=new Object();
tinderUser.id="123abc";
tinderUser.name="Mudasir";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mudasir",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


//object merging
const obj1={1:"A",2:"B",3:"C"};
const obj2={3:"D",4:"E"};
const obj3={obj1,obj2};
console.log(obj3);
const obj4=Object.assign(obj1,obj2);
console.log(obj4);

const obj5={...obj1,...obj2};
console.log(obj5);

//object destructuring
const mudasir={
    name:"Mudasir",
    roll:23,
    class:"second"
}
console.log(mudasir.roll);
const {roll}=mudasir
console.log(roll);
