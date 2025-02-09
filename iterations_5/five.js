// FOR each loop

const coding = ["js","ruby","java","python","cpp"];

// coding.forEach( function  (ITEM){  //in foreach loop we give callback function which does not have name
//     console.log(ITEM);
    

// }) 

// coding.forEach( (ITEM)=>{
//     console.log(ITEM);
    
// } )

// we can also creation function separately and reference it into the foreach loop

// function printme(item)
// {
//     console.log(item);
    
// }

// coding.forEach(printme) // remember we are referencing it in the foreach loop and executing the function by writing printme() in for each loop


// coding.forEach((item, index,arr) => { // here we have different access for the loop like index and full array
//     console.log(item,index,arr);
    
// })

const mycoding = [{
    languagename:"javascript",
    languageextension:"Js"
},

{
    languagename:"java",
    languageextension:"java"
},

{
    languagename:"jpython",
    languageextension:"py"
}

];

mycoding.forEach((item) => { // item is referencing the object and to get a particular field from the object we use object.field name

    console.log(item.languagename);
    console.log(item.languageextension);
    
})