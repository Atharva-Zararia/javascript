const score = 100;
const balance = new Number(100);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

//const salary = 23.9834;

//console.log(salary.toPrecision(3)); // this returns a number but in string type 
// as precision is 2 it will start from left and consider two values and round them , if precision is 3 it will consider 3 values 23.9 and round them

//const amount = 1000000
//console.log(amount.toLocaleString('en-IN'))// gives values according to standards ..here we converted en(default -us) to indian system'

//MATH

console.log(Math.abs(-1));
console.log(Math.round(4.5));
console.log(Math.ceil(3.99)); // if there is decimal  output is integer +1
console.log(Math.floor(4.9)); // gives the ineteger part
console.log(Math.random()); // always value between 0 and 1

//suppose u want random values between max and min

const min = 10
const max = 20
//now to get random values between 10 and 20

console.log(Math.floor(Math.random()*((max-min)+1)+min));

// multiplying by max-min gave range +1 to avoid 0 and + min to get values above min 