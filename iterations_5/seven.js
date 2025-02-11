// //MAP
 const mynumbers = [1,2,3,4,5,6,7,8,9,10];


// //suppose to add 10 to each value

// const num_plus_10 = mynumbers.map( (num) => num+10 );
// console.log((num_plus_10));

// // same operation using foreach loop
// const num__plus = [];
// mynumbers.forEach((num) => 
// {
//     num__plus.push(num+10)

// });
// console.log(num__plus);



//CHAINING == using multiple methods at once
//suppose u want to multiply array values by 10  using map method and again add 10 to the values using map method
const newnums = mynumbers.map((num) => num*10).map((num)=>num+10).filter((num)=> num>40);
// here first map works on the mynumbers's array values and second map will work on values received from first map(which is in array form only)
// this is called chaining
// we can chain it as long as want
// here we also used filter to filter out final values recieved from map method where value > 40 should be printed

console.log(newnums);
