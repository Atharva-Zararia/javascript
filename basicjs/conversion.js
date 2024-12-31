
/*let score = 50  //number

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


//similiarly true=>1 , false=> 0
 //for converting to other datatypes we use Boolean(), String(), Number(), etc

//1=> true 0=> false
//"" => false " " => true 


let d = String(44);
console.log(typeof(d));
console.log(d);
*/
//**************************************Operation******************************* */

let value =3;
let negvalue = -value;
console.log(negvalue)

console.log(2+2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let str1 = "Atharva ";
let str2 = "Zararia"
console.log(str1+str2);

console.log("1"+2);//12
console.log("1"+2+2);//122
console.log("1"+2+2);//122
console.log(1+2+"2"); //32

console.log(+true);//output will be 1(+ means conversion)
console.log(+"");  //output will be 0("" => means false converting it means 0)


//read prefix and postfix increament

let counter = 100;
let a = counter++;
console.log(a); // counter value is assgined to variable a and then increased therefore a=>100 counter=>101
console.log(counter);
let count = 100;
let b=++count;


console.log(b); // here value of count is first increased and then assigned to b therefore both variables have same value;
console.log(count);