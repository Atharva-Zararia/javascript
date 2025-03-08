//write a function that takes string as input and returns a object having count of chars in the input string

const occur = (inputstring)=>
{
    occurobj = {}
for(let num of inputstring.split(''))
{
    //console.log(num);
    
    if(occurobj.hasOwnProperty(num))
    {
        occurobj[num]= occurobj[num]+1;
    }
    else
    {
        
        occurobj[num] = 1;
    }
}
return occurobj;
}

console.log(occur("Atharva"));
