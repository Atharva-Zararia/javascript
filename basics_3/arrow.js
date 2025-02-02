const user = {
    username : "Atharva",
    price :999,

    welcomeMessage: function(){
        // console.log(`${username}, welcome to my website`);// this statements works as there is only one username varibale.but
        // when we want to refer current context we use "this" keyword
        console.log(`${this.username}, welcome to my website`);
        console.log(this); // here "this" keyword is in context with the user
        
    }
}

// user.welcomeMessage(); //Atharva, welcome to my website
// user.username ="Zararia"; // we changed the value over here i.e changed the context
// user.welcomeMessage();

console.log(this); //it refers to an empty object reason being it does not have anything to reger in global scope


// function chai(){
//     let username = "hitesh";
//     //console.log(this.username);// undefined .. this keyword is working only in object not in function
    
// }

// chai(); // when "this" is printed inside a function in a node env , we get lot of values of different types.


// const chai = function(){
//     let username = "Zararia";
//     console.log(this.username);// still undefined
    
// }

// chai()

const chai = () => {// arrow function
    let username = "Zararia";
    console.log(this.username);// still undefined
    
}

chai()


// ***********************************************
// arrow function ()=>

    // const addtwo = (num1,num2) => {
    //     return num1 + num2; // when we use {} braces we have to use return keyword explicitly
    // }

// implicit return
    // const addtwo = (num1,num2) =>  num1 + num2; // if there is a one line 
    // const addtwo = (num1,num2) =>  (num1 + num2);// if u use curly braces then u need return keyword else u dont in implicit retunr
    const addtwo = (num1,num2) => ({username:"Atharva"}) // object return krne ke liye parenthesis dena pdega
        
    console.log(addtwo(3,5));
    