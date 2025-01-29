// function definition
function saymyname(){
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("V");
    console.log("A");
    
}

//saymyname // this is reference ..this wont execute just shows the reference (like ball yaha hai)
//saymyname() // this is execution

// function addtwonumbers(number1 , number2) // number 1 and number2 here are parameters.whenever we create a function definition whatever input we take its called parameter
// {
//     console.log(number1 + number2);
     
// }

//addtwonumbers(); // if i execute this it will show NaN as no values assigned to number1 and number 2
// now when we call function and pass the values these are called arguments
//addtwonumbers(3,"A");
//addtwonumbers(3,null);
//const result = addtwonumbers(3,4);
//console.log(result); // shows undefined because it is not returning the value of console.log

function addtwonumbers(number1 , number2) // number 1 and number2 here are parameters.whenever we create a function definition whatever input we take its called parameter
{
    // let result = number1+number2;
    // return result;
    return number1+number2;
     
}

const result = addtwonumbers(3,4);
//console.log("RESULT:" , result);

function loginUserMessage(username)
{
    if(username === undefined){
        console.log("please enter a user name");
        return; // yaha pe return isliye diya taaki iske niche ka code jo function me hai wo execute na ho
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("Atharva"));
console.log(loginUserMessage(" "));
console.log(loginUserMessage()); //when u did not pass any value output will show undefined

// suppose we wont to completly avoid the undefined case we can give a default value 
function loginUserMessage(username = "Zararia")// default value de diya toh "IF" condition me jaaega hi nahi 
{
    if(username === undefined){
        console.log("please enter a user name");
        return; // yaha pe return isliye diya taaki iske niche ka code jo function me hai wo execute na ho
    }

    return `${username} just logged in`;
}


//SHOPPING CART
// rest operator (...)  // jo bhi khule me milra hai usko bundle me pack krke dega ye
// rest operator me saari values map hogi ek array me jinke
function calculatecartprice(...num1)
{
    return num1;

}
console.log(calculatecartprice(200,400,500,600)); //only first value will be printed if we do not use "rest operator("...")


// also we can do like this
function calculatecartprice2(val1, val2 , ...num1)
{
    return num1;

}
console.log(calculatecartprice2(200,400,500,600)); //here jitne bhi arguments hai utne parameters ke sath map ho jaange and jitne bhi bache wo saare ...num1 array me aaenge


//function and object
const user = {
    username:"Atharva",
    prices: 200
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user);

// function and array
//const newarray=[200,400,500]
function itemsincart(cart)
{
    console.log(cart[1]);
}

//itemsincart(newarray);
itemsincart([200,400,500]);




