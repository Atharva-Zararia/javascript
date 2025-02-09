// ARRAY SPECIFIC LOOp
//  1) for of loop

const arr = [1,2,3,4,5];
for (const num of arr) 
    {
    console.log(num);
    
    
}

const greeting = "Hello world !" // for string

for (const greet of greeting) 
    {
    console.log(greet);
}

//MAPS

const map = new Map();
map.set('In','India');
map.set('us','USA')
map.set('Fr','France')
map.set('In','India'); // it will not show duplicate entry i.e unique value 
//console.log(map);


for (const key of map) {
    console.log(key); // here when it printed the key-value pair of the maps
    
    
}
// to get only keys or values of map we need to destructure the map using square brakects
for (const [key , value] of map) {
    console.log(key,":-->", value); // here when it printed the key-value pair of the maps
    
    
}


const myobject = {
    'game1':'NFS',
    'game2':'spiderman'
}

for (const [games,name] of myobject) {
    console.log(games,":-->", name); //we cannot iterate objects using for of loop
    
}

