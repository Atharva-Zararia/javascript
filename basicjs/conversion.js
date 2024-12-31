
let score = 50  //number

console.log(typeof(score));

let runs = "50" //string

console.log(typeof(runs));


let wide = Number(runs) // conversion of string to number using "Number" method.
console.log(typeof(wide));

let out =Number("123ec") //now after converting it ..it should not be a number...let's check
console.log(typeof(out));
console.log(out); // this shows value as NaN(not a number)

let extra = Number(null);
console.log(typeof(extra)); //type will be number and value 0
console.log(extra);

let x=Number(undefined)
console.log(x);


/* similiarly true=>1 , false=> 0
for converting to other datatypes we use Boolean(), String(), Number(), etc

1=> true 0=> false
"" => false " " => true 
*/

let d = String(44);
console.log(typeof(d));
console.log(d);




