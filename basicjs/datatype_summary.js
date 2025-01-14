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