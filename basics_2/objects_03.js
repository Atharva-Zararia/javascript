// objects can be declared in 2 ways contructor way and literal way

//singleton means agr object constructor way ke through bana hai toh wo singlrton hoga mtlb apne tarike ka ek hi object hoga
//dusre tarike ke banaya toh multiple instances bante hai 
Object.create // creating object constructor method ke through(isi me singleton banta hai)

const mysym = Symbol("key1") // interview ke liye
const jsuser = {   // object declaration (isme key value pair hota hai)
    name : "Atharva",
    "full name" : "Atharva Zararia", // this cannot be accessed by (.) notation
    age : 24,
    location : "Nagpur",
    email : "zarariaatharva001@gmail.com",
    isLoggedin : false,
    lastlogindays: [ "Monday","Saturday"],
    [mysym]:"key1" //symbol ko aise define krte hai agr other method se kiya toh output same aaega lekin datatype me symbol nahi dikhaega 
      
}  // key ko as a string consider krta hai js, bas likhte nahi hai waise

//console.log(jsuser.name);  // can be used to access the value of objects but not a good way

//console.log(jsuser["email"]); //yaha pe email ko as a string dena padega kyuki keys ko string consider krte hai and square bracket me as a string hi input dena pdega.
//console.log(jsuser["full name"]); //isko compulsorily square bracket chahiye

//console.log(jsuser[mysym]);

//TO change values
jsuser.email = "atharavzararia@gmail.com";

//To freeze values so that they do not change 
Object.freeze(jsuser["age"]) // jsuser rakha sirf bracket me toh pura object freeze hoga warna dot ya square bracket  krke individual field bhi freeze kr skte hai

jsuser.email = "xyz@gmail.com";
//console.log(jsuser);



jsuser.greeting = function(){
    console.log("hello jsuser");
}

jsuser.greetingtwo = function(){
    console.log(`hello jsuser , ${this["full name"]}`); // full name square bracket se hi access kr skte hai islye aise aaya warna (.) se bhi kr skte the 
}// here this keyword is used because js does not know what all fields are present in the jsuser object.

jsuser.greeting();
jsuser.greetingtwo();



