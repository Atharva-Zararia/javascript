/*console.log(2>1)//output will be true and datatype of both the numbers are same
console.log("2" > 1) //output will again be true but here js converts string 2 into number 2 implicitly*/
// avoid below undefined and null comparisions
console.log(null > 0);// here null is converted to 0
console.log(null == 0);
console.log(null >=0);
console.log(undefined < 0); // always false ..use any operator
console.log(undefined  == 0);
console.log(undefined <= 0);
console.log(undefined >= 0);

// === operator also checks the datatype before comparision

console.log("2"==2); //this will be true
console.log("2" === 2); //this will be false