setTimeout( () => {
    console.log('timeout done');
    
} ,5000);

///it will wait for 5000 milliseconds


let stoptime = setInterval(()=>{
    console.log("executing repeatedly");
},5000)

//settimeout to stop or clear the timeout no need to use if statement
setTimeout(()=>{
    clearInterval(stoptime)
    console.log("stopped");
    
},15000)
