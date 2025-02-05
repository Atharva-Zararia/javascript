// IF statement

// const isUserLoggedIn = true
// if(isUserLoggedIn )// --> condition





// operators
// < less than
// > greater than
// <= less than equal to
// >= greater than equal to
// ==  equals
// != not equals
// === checks values with datatype

if(2==2) // true only checks value
{
    console.log("yes")
}

if(2=="2")
{
    console.log("HELL YES");
    
}

if(2 ==="2")
{
    console.log("no");
    
}
else
{
    console.log("not equal datatype");
    
}


// const score =200
// if(score > 100)
// {
//     const power = "fly" // this power variable(const or let) is defined in scope of if statement, outside if statement the variable is not defined
//     console.log(`user power ${power}`);
    
// }

// // if we use var power = "fly" it can be accessed outside if statement as var's scope is global everywhere



// const balance = 1000
// //if(balance>500) console.log("test"); // here semi colon comes automatically u can write this way wihtout curly braces in a single line using(",") commas to seperate sentences but makes difficult to read the code

// // NESTING


// if(balance < 500)
// {
//     console.log("less than 500 ");
    
// }

// else if(balance <750)
// {
//     console.log("less than 750");
    
// }
// else{
//     console.log("less than 1200");
    
// }


//shopping example

const isUserLoggedIn = true
const debitcard = true
const  loggedInFromGoogle = false
const loggedInFromEmail = true
if(isUserLoggedIn && debitcard){
    console.log("allow to buy");
    
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("user logged in");
    
}