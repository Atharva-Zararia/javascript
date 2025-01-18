let mydate = new Date();  //
console.log(mydate.toString()); // Sat Jan 18 2025 07:46:56 GMT+0000 (Coordinated Universal Time) difficult to read
console.log(mydate.toDateString());//Sat Jan 18 2025
console.log(mydate.toLocaleString());//1/18/2025, 7:46:56 AM
console.log(mydate.toISOString());//2025-01-18T07:46:56.644Z

console.log(typeof mydate); // object

//let mydatetwo  =  new Date(2024,1,18); 
//console.log( mydatetwo.toDateString());  ////Sun Feb 18 2024 months starts from 0 in js
let mydatetwo  =  new Date(2024,0,18,13,21); 
console.log( mydatetwo.toDateString());

let mydatethree = new Date("2025-01-21") //here month will start from 1

// Timstamp

let mytimestamp = Date.now();
console.log();

console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
//console.log(newdate.getDay());
 //formatting date 

console.log(newdate.toLocaleString("default",
    {
        weekday: "long",
        day:"numeric",
        month:"long"
    }
)
);


