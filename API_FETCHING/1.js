// public api
// https://reqres.in/api/users

// he will show it by promise then we have to do by async await
// fetch always returns a promise  which is in readable form and we have to change it into json 
function loadrandomusers() // any function we declared
{
    fetch("https://reqres.in/api/users",{ // this is returned as a promise we use a .then to fetch it 
        method:"GET", // this is a default method meaning it's a get request
    })
    .then((reply)=> reply.json()) // oncet the fetch is completed successfully it returns a response object and converted to json 
    .then((data)=>console.log(data));//JSON itself returns a new promise , because parsing json is asynchrnous and then the output of json is stored in
    // data variable
    
    
}
//data and reply are just variables
// api se fetch krne ke baad reply me store kiya json and then json ko data me store kiya jo apne kaam ka hai like object type me

loadrandomusers();

//fetch ka response liya json me then usko convert kiya 