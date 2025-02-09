const myobject = {
    js:'javascript',
    cpp:'c++',
    rb:'Ruby',
    swift:'Swift by apple'
}


// // we cannot use for of loop for objects hence we use forin loop

// for (const key in myobject) 
//     {
//         console.log(key); // this will give keys only
//         console.log(myobject[key]); // this will give values for those keys 
//         console.log(`key is : ${key} and its value is : ${myobject[key]}`); // this will give values for those keys 

//     }

// const programming = ['js','py','java','cpp'];
// for (const key in programming) {
//     //console.log(key); // only index is getting printed
//     console.log(programming[key]); // only index is getting printed

//     }

    // we will try forin loop for maps

    const map = new Map();
map.set('In','India');
map.set('us','USA')
map.set('Fr','France')
map.set('In','India');


for (const key in map) {
    console.log(key); // nothing is printed as map is not iterable here
    
}



