// ARRAY


const myarr = [0,1,2,3,4,5, false,"Atharva"]; // resizeable in j
const myarr2 = new Array(1,2,3,4);
console.log(myarr[1]);
console.log(myarr[0]);

//1--> 0 based indexing
// 2--> arrays in javascript when doing copy operations creates a shallow copy
// 3-->shallow copy is a copy whose properties share the same reference point that is if u change something in copied array it will
//reflect in the original array as well
//4-->deep copy is an copy of object whose property do not share the same references as those of the original/source object.

//METHODS

/*myarr2.push(6);// pushes 6 into array
console.log(myarr2)//

myarr2.pop();// removes last element

console.log(myarr2);

myarr2.unshift(5);// adds element to the 0th index and all other elements are shifted 1 step to right
console.log(myarr2);
myarr2.shift();// removes the first element and elements are shifted to left by 1
console.log(myarr2);

const newarr = myarr2.join() //joins array elements and convert it to string
console.log(myarr2);
console.log(newarr);
console.log(typeof (newarr));*/

//SLICE AND SPLICE

const mr = myarr2.slice(1,4);// will give a subarray from index 1 to 3 , 4 not included
console.log(mr);
console.log("A",myarr2);
const mr2 = myarr2.splice(1,4);// here splice manipulates the original array and removes the element from the original array
console.log(mr2);
console.log("B",myarr2)


