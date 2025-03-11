// function generatepromise(message)
// {
//     return new Promise((resolve,reject)=>{//create new promise using promise constructor and it takes two  parameters resolve and reject
//         if(!message)
//         {
//             reject('message is empty');
//         }
//         else{
//         setTimeout(()=>{
//             console.log(message);
//             resolve(); // meaning if message was successfull
//         },1000);
//     }
//     }) ;

// };

// //to call the promise
// //1st call the method then handle promise
// // generatepromise("1st call").then(()=>{
// //     console.log("promise resolved successfully");// as the promise is successfull we handle it using "then" function
// //     // now we will try to invoke it one more time
// //     generatepromise("2nd Call").then(()=>{
// //         console.log("second also done sucessfully");

// //         generatepromise().catch((error)=>{ // error is passed
// //         console.log("third got rejected",error);
// //          // here to handle the reject we use catch block (instead of .then() we use .catch to handle reject)
// //         })
// //     })
// // });

// // this way we can tackle callback hell issues

// generatepromise("1st call")
// .then(()=>{
//     console.log("promise resolved successfully");// as the promise is successfull we handle it using "then" function
//     // now we will try to invoke it one more time
//     generatepromise("2nd Call")
// }).then(()=>{
//         console.log("second also done sucessfully");

//         generatepromise()
//         .catch((error)=>{ // error is passed
//         console.log("third got rejected",error);
//          // here to handle the reject we use catch block (instead of .then() we use .catch to handle reject)
//         })
//     });



// 

// ****Promise.all()****

// suppose u want to load js and css files in lwc and u want that the processing should continue once all the
// js and css files have been loaded into lwc

//we use promise.all method
//it gives a successfull response is all the promises are fulfilled, if any of the promise is rejected u will get rejected msg

// sequence of output will be same as the sequence u defined in the array.


function resolvetimeout(value,delay)
{
    return new Promise((resolve) =>
    {
        setTimeout(()=>{
            //console.log("haanji done");
            resolve(value);
        },delay);
    })
}


function rejecttimeout(reason,delay)
{
    return new Promise((resolve , reject) => // reject akela parameter nhi reh skta we need resolve with it
    {
        setTimeout(()=>{
            //console.log("haanji not done");
            reject(reason)
        },delay);
    })
}
//WITHOUT PROMISE.ALL
// async function promisesall (params) 
// {
//     try
//     {
//         await resolvetimeout("hello",1000);
//         await rejecttimeout(10,1000);
//     }
//     catch(error)
//     {
//         console.log(error);
        
//     }
    
// }


//WITH PROMISE.ALL
async function promisesall () 
{
    // we store the output into two variables
    let promise1 =  resolvetimeout("Hello world",1000);
    let promise4 = resolvetimeout("hmmm",100); 
    let promise2 =  rejecttimeout("cuz was rejected",1000); 
    let promise3 =  rejecttimeout("cuz was one rejected",1000);
    //created array of promises
    const allpromise = Promise.all([promise1,promise2,promise3,promise4]); //only promise 2 will be printed as at the same time(1 sec) promise
    // is being rejected hence only the first reject promise is printed
    try
    {
        const lists = await allpromise; // in try block instead of await single promise we did await whole array
        console.log("list",lists);
        
    }
    catch(error)
    {
        console.log(error);
        
    }
    
}
promisesall();

// Your code executes three promises using Promise.all(). Let's analyze what happens:
//EXPLANATION 
// Promise 1 (promise1)

// Calls resolvetimeout("Hello world", 1000), which resolves after 1 second.
// Promise 2 (promise2)

// Calls rejecttimeout("cuz was rejected", 1000), which rejects after 1 second.
// Promise 3 (promise3)

// Calls rejecttimeout("cuz was one rejected", 1000), which also rejects after 1 second.
// What Happens in Promise.all()?
// Promise.all() fails fast 🚨.
// As soon as any promise rejects, it immediately rejects and skips the remaining results.
// Since both promise2 and promise3 reject at the same time, only the first encountered rejection is caught.