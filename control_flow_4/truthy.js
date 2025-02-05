const userEmail = "A@atharva.ai"

if(userEmail) // check if value is present or not (non empty string is considered true, empty array is true)
{
    console.log("got user email");
    
}
else{
    console.log("not user emial");
    
}

//FALSY VLAUES (mtlb which values are assumed false)
//false , 0 , -0, BigInt = 0n ,"",null,undefined,NaN

//Truthy values values which are not present in falsy values
// "0"(non empty string),"false"(non empty string)," "(non empty string), [],{}, function(){}(empty function)


// to check array is empty
array1 = [];
if(array1.length ===0){
    console.log("arra is empty");
    
}
const object1 = {}

    if(Object.keys(object1).length===0){
        console.log("object is empty");
        
    }


    //Nullish coalescing operator(??): null undefined (?? ye operator null/undefined value hatane ke lye use hota hai)

    // let val1;
    // val1 = 5 ?? 10;
    // //console.log(val1);
    
    // val1 = null??10;
    // console.log(val1);

    // val1 = undefined??12
    // console.log(val1);
    
    // val1 = null ??10??20; //null ke alava pehli value lega 
    // console.log(val1);
    

    //TERNIARY operator
 // syntax ==>   condition?true : false

 const iceteaprice = 100
 iceteaprice<=80?console.log("less than 80"):console.log("more than 80");
 
 
