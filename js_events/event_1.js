//types of event
// 1) onlclick event
//2) when user change some value its onchange event
//3) cursor on text onmouse event takes place
// event name will always be in small case.
// whenever u want to write an event it always starts with "on" keyword as  a prefix


let element = Array.from(document.querySelectorAll("div")) //select all the div element and convert it into array
console.log(element);


function clickme()
{
    alert("welcome me");
}

function mouseoverhandler()
{
    console.log("hello this is ur mouse");
    // to get access html in javascript we got for the query selector
    let element =  document.querySelector(".hoverclass") // to refer class we use dot notation else it will refer element
    element.style.display = "none";// as soon as i hover my cursor on the box the box disappears
}

// function mouseremovedhandler()
// {
//     // this event will get theblock from when the mouse is removed
//     let element = document.querySelector(".hoverclass");
//     element.style.display = "";// it will give back whatever is present there
// }

function changehandler(event)
{
    console.log(event.target.value);
    
}