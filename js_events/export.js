//important in LWC
export let weekdays = ["mon","tues","wed","thurs","fri"];
export const DATE_OF_BIRTH_YEAR = 2001;
export function sayHi(message)
{
    alert(message);
}

//export after declaration

function doAdd(num1,num2)
{
    alert(num1+num2);
}

export {doAdd}

//default export only one we can have


export default function doMul(num1,num2)
{
    alert(num1*num2);
}