setTimeout(()=>{
    console.log("hello 1");
    setTimeout(()=> {
        console.log("hello 2");
        setTimeout(()=> {
            console.log("hello 3");
            setTimeout(()=> {
                console.log("hello 4");
                
            },5000);    
        },5000);    
    },5000)
},5000)
// here first settimeout executes which executes second timeout and then third and fourth ..it is called callback hell


// TO get rid of it 
//1) promise
//2)async