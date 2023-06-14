// import {hello} from './second.js';
// hello();

// import person from "./first.js";

// console.log(person)

// class customer{
//     constructor(n){
//         this.name=n
//     }
//     age=25;
//     buy(){
//         console.log(this.name)
//     }
// }

// class guestcustomer  extends customer {
//     hello(){
//         console.log("hello");
//     }
// }
// let customer1=new guestcustomer("udai");
// console.log(customer1)
// customer1.buy();
// customer1.hello();

//spread and rest opertor

// let list=["ram","mohan","sohan"];
// let newlist=[...list,"ramesh"];
// console.log(newlist)

// let person={
//     age:35,
//     myname:"hero"
// }
// let newperson={
//     city:"udaipur",
//     ...person
// }
// console.log(newperson)

//rest
// function hello(...all){
//     console.log(all)
// }
// hello(1,4,3,7,9)

//Array destructing

// let array=["rahul",'rohit',"mohit"];

// let [n1,n2,n3]=array;
// console.log(n2);

//Object Destuturing

// let person={
//     name:"udai",
//     age:23

// }
// let {name,age}=person;
// console.log(name);



//refrences (array,object) and primitive type(string,number)


//primitive types copy hoti he value ek cahnge karne pr dusrre pr effect nhi pdata he
// let num1=98;
// let num2=num1;
// num2=89;

// console.log(num1);
// console.log(num2);

//Refernces type me ek dusre ko point krta he isliye ek ko chage kr pr dura bhi change ho jata he to resolve this problem we have to use spread as above we use

// let person={
//     name:"rahul",
//     age:90

// }
// let person2=person;
// person2.name="mukesh"
// console.log(person);
// console.log(person2)




//map

// let array=[2,5,4,3];
// let array2=array.map(x=>x*2)
// console.log(array2)


//filter is return true condition
let array=[2,5,4,3];
let array2=array.filter(x=>x%2==0)
console.log(array2)