// INTERVIEW RELATED QUESTIONS
// js is dynamically typed because we do not provide a variable type when declaring it. After giving value to it, its datatype is decided.
//types of datatype
// 1 primitive
// 2 non - primitive (reference)

/* 1 primitive(call by value means whenever they are not called by reference of memory they are provided by copy)

string,number(integer + decimal),boolean, null, undefined, Symbol, BigInt

2 non-primitve(reference)
array, objects, functions
*/

const id = Symbol('123') // return type is symbol only
const anotherid = Symbol('123') // not same as above id

console.log(id === anotherid)

// reference (these datatypes have datatypes as object only)

const heros = ["shaktiman","naagraj","doga"];


/* let myObj = {
    name:"Atharva"
    Class:12
}*/
const myFunction = function(){
    console.log("hello world");
}

//console.log(myFunction);


//stack and heap memory
// all primitive datatypes are stored in stack memory as when a variable is declared and called a copy of that value is provied
//all non-primitive or reference datatypes are stores in heap memory as when called , they are referenced by the original address of the data 

//example stack

let name = "Atharva";
let anothername = name;


anothername = "Zararia";
console.log(name);
console.log(anothername);
// here a copy of data was provided and the same was only changed

//example heap

let userone ={
    email:"atharva@gmail.com",
    upi:"user@okicici"
}

let usertwo = userone;

usertwo.email = "Zararia@gmail.com";
console.log(userone);
console.log(usertwo);
// here both the emails are changed as both the variables userone and usertwo were referencing the original heap address.