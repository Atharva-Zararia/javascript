// immediately invoked function expressions (IIFE)

(function chai(){
    //named iffe as it has name
    console.log(`Db connected`);
    
})(); // here the iife does not know where to stop the conext therefore we need to use semicolon to end the context

( (name) => { // input parameter
    // unnamed iife
    console.log(`DB 2 also connected ${name}`);
    

})("Atharva")//it is similar as chai() but instead chai we have used () and given the argument value
//to remove the pollution caused by global scope variable declaration  we use iife

// (function aurcode() 
// {
//     console.log(`DB 2 also connected`);
    

// })();