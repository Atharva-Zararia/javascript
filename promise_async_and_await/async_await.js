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

//promise is the samne ..handling it is different


async function generatedifferentpromises() // here we create a async function and then call out method in try catch blocks
{
    try{
        await generatepromise("1st call");
        await generatepromise("2nd call"); //after the first call is executed then only second call is executed 
        await generatepromise(); // here it directly goes to catch block with error msg displayed
    }
    catch(error)
    {
        console.log(error);
        
    }
} 

generatedifferentpromises(); // calling the async function