const tinderuser  = new Object();

tinderuser.id = "123abc";
tinderuser.name = "Sammy";
tinderuser.isloggedin = false;
//console.log(tinderuser);

const regularUser = {
    email : "some@gamil.com",
    fullname : {
        userfullname : {
            firstname: "atharva",
            lastname:  "Zararia"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); // this way we can access the first name using dot notation
//console.log(regularUser["fullname"]["userfullname"]["firstname"]); // this way we can access the first name using square bracket notation



const obj1 = {1:"A",2:"B",3:"C"};
const obj2 = {4:"D",5:"E"};

//const obj3 = Object.assign({}, obj1,obj2) // here first curly braces is the target meaning given any source objects resultant will be a single object only
//const obj4 = Object.assign(obj1,obj2) // yaha sara data object1 me jaega kyuki default target obj1 ho gya

//console.log(obj3)
//console.log(obj4);

const obj3 = {...obj1 , ...obj2}
console.log(obj3);

//OBJECTS INSIDE ARRAYS

const user = [
    {
        id : 1,
        email:"abc"
    },
{
    id : 2,
    email:"xyz"
}
]
console.log(user[0].email);



console.log(tinderuser);
console.log(Object.keys(tinderuser)); //to get keys of mentioned object we can make array of these keys and it has huge number of applications
console.log(Object.values(tinderuser));
//console.log(Object.length(tinderuser));

console.log(Object.entries(tinderuser)); //gives all entries

console.log(tinderuser.hasOwnProperty("id")); // this method verifies if there is a property named "id" in tinderuser , if it is then true else false


