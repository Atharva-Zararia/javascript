function generatepromise(message)
{
    return new Promise((resolve,reject)=>{//create new promise using promise constructor and it takes two  parameters resolve and reject
        if(!message)
        {
            reject('message is empty');
        }
        else{
        setTimeout(()=>{
            console.log(message);
            resolve(); // meaning if message was successfull
        },1000);
    }
    }) ;

};

//to call the promise
//1st call the method then handle promise
generatepromise("1st call").then(()=>{
    console.log("promise resolved successfully");// as the promise is successfull we handle it using "then" function
    // now we will try to invoke it one more time
    generatepromise("2nd Call").then(()=>{
        console.log("second also done sucessfully");

        generatepromise().catch((error)=>{ // error is passed
        console.log("third got rejected",error);
         // here to handle the reject we use catch block (instead of .then() we use .catch to handle reject)
        })
    })
});

// this way we can tackle callback hell issues