//set timeoutmethod
//set timeinterval

//addeventlistener is a built in fucntion in js which takes the event to listen for and a second argument to be called whenever the described event gets fired
//element.addEventListener(event,listener)

// removeEventListener() is an inbuilt function that is used to remove an event handler that was previously added using the addEventListener() function
// from the element

// ****Parameter***
// 1) event can be any valid js event.Events are used without "on" prefixes like using "click" instead of "onclick"
//2)listener(handler function) - function that respond to the event occuring



// ****CUSTOM EVENTS****


// a custom event is created using the CustomEvent constructor
//this takes 2 arguements, the first is the name of the event and the second is the object that contains the data.
//after constructing the event, u need to be able to disptach them
//to listem for the custom event , add an event listener to the element you want to listen on


//example

const myEvent = new CustomEvent("myevent",
    {
        detail:{},
        bubbles:true, //means event will be propgated from bottom to top
        cancelable:true, //any parent can cancel the event
        composed:false //can be propgated outside the shadow dome as well
    }
);

document.querySelector("#element").dispatchEvent(myEvent);