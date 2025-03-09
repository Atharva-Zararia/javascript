//handling the event step 3
document.addEventListener("valueten",(event)=>
{

    console.log('Access event data', event.detail.message);
    
})

function changehandler(event)
{
    console.log(event.target.value);
    


//whenver user eneter value as 10 , then fire custom event

//step 1 - create custom event

if (event.target.value==10) // from html_2 file we get the event.target.value and then create a custom event myevent
    {
        // this is a custom event constructor(myevent)
        // valueten is name of customevent
    const myevent = new CustomEvent("valueten",  // no need to use "on" prefix
        {
            detail:
            {
                message:"user has entered value 10",
            },
        }); 


    //step 2 disptach event
    document.dispatchEvent(myevent); 
    //step 3 handle the event

    }
}