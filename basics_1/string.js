const name="Atharva";
const nametwo = new String('Zararia-at')
const repo = 50; // here 50 is converted into string

console.log(name+repo+" Value");

console.log("Hello My name is" + name + " and my repo count is " + repo );// works but difficult to read


// we will use backticks

//here string interpolation comes in place meaning we create place holders and insert value into them.
// here we can do things on the go wihtout much effort
console.log(`Hello my name is ${name} and my repo count is ${repo}`); // latest and easy to understand

console.log(nametwo[0]); //key value pair

console.log(nametwo.__proto__);// shows the object
console.log(typeof(nametwo));

console.log(nametwo.length);
console.log(nametwo.toLowerCase());
console.log(nametwo.charAt(0));
console.log(nametwo.indexOf('a',2));


const namethree = nametwo.substring(0,4); //0 to n-1 characters will be returned
console.log(namethree);

const namefour = nametwo.slice(-1,0);// we can give negative values it will start from end
console.log(namefour);

const namefive = "  Atharva  "; // now there are spaces which we somestimes wont need
console.log(namefive.trim()); //works on whitespaces and line terminators(\n)

const nameseven = "nara-yan"
console.log(nameseven.replace("n" , "a"));

console.log(nameseven.includes("nay")); // order matter 

console.log(nameseven.split("-"));//splited on the basis of -
