const marvel_heros = ["thor","ironman","spiderman"];
const DC_heros = ["superman","batman","flash"];

//marvel_heros.push(DC_heros); // this wont merge arrays it will put dc_heros array into marvel_hero array but as a seperate array.
// here the separate array is actually an 4th element of marvel_heroes array.



//console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

//console.log(marvel_heros[3][0])// will give value of dc_heros's first element


const all_heros = marvel_heros.concat(DC_heros); //concat returns a new array where as push uses the existing array
//console.log(all_heros);


// better than we use "spread"

const all_new_heros = [...marvel_heros, ...DC_heros];// here all the elements have been spreaded out as an individual element from the array and taken into new array. Works same as concat but better(three dots)

//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);// here inside flat u have to enter the depth till which u can make your nested arrays into a single one,


console.log(real_another_array);



// to retrieve data from a website

console.log(Array.isArray("Atharva"));//check wether u have this array or not

console.log(Array.from("Atharva"));//it will make string atharva into array of individual chars

console.log(Array.from({name: "hitesh"})); //here it is not specified for how to make array of this given string. whether to use a keys or values hence blank array will be given

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3)); // creates an array of given values