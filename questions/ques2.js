// write a function that takes a string as input and returns a revers of string

const  revfun = (inputstring) =>
    {
        inputstring.split(" ").map((curritem)=> curritem.reverse()).join(" ");
    }
console.log((revfun("Atharva Zararia")));
