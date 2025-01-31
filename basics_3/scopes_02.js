


{} // this is scope basically
// suppose there are multiple coders working on the same code ...everybody might be using variable a,b,c .. this could hamper the codes functionality that's y we use scope
var c =300;
let a =300;
if(true)
{
    // everything inside if is block scope and everything outside the if is global scope.. every value present in global scope is accessible in block scope but the reverse is not true
    let a = 10; // a wont be printed
const b = 20; // b wont be printed
var c = 30; // c is printed anyhow...isliye people donot use var 
console.log("block scope",a);

}
// code env ka scope and coarse env(browser) wala scope alag alag hai



console.log("Global scope" , a); //global scope ka value consider hoga
//console.log(b);
//console.log(c);


//NESTED SCOPE

// function one(){
//     const username="Atharva";
//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
// //console.log(website); // will throw error(website is not defined) cuz it is printed outside its scope
//     two(); //two is inside 1 so it can access one
// }
// one(); // one is global to two it cannot access two
//scnario bacche(two) bado(one) se chocolate le skte hai bade baccho se chocolate nahi le skte



if(true)
{
    const username = "Atharva";
    if(username==="Atharva")
    {
        const website = " Youtube";
        //console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);

// ++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));// we called function addone before defining it .. ==> no issues

function addone(num){
    return num +1;
}


addtwo(5); //here it throws error if we call function before defining it ..here it is an expression and holded in var(it is called hoisting)
const addtwo = function(num) // it is a function only but it is called as expression
{
    return num+2;
}

