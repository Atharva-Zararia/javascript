// REDUCE


const mynums = [1,2,3];
// const mytotal = mynums.reduce(function(acc,currval)
// {
//     console.log(`acc: ${acc} and currval : ${currval}`);
    
//     return acc+currval
// }, 0 // here 0 is given for acc(accumulator's) starting value , u can give any value to start

// )

// console.log(mytotal);

//output of above code
// acc: 0 and currval : 1
// acc: 1 and currval : 2
// acc: 3 and currval : 3
// 6
// here we gave acc as 0 and currval was 1 so acc gets value 1(0+1) and now currval is 2 so acc gets value 3(1+2) 
// and finally currval gets 3 so acc get value 6(3+3)

//doing same using arrow function


const mytotal = mynums.reduce((acc,curr) => (acc+curr),0)
// const mytotal = mynums.reduce((acc,curr) => acc+curr,0) --------> this also works
console.log(mytotal);

const mytotal_two = mynums.reduce( (acc,curr) =>
{
    return acc+curr
},0
)

console.log(mytotal_two);





const shoppingcart = [
    {
        itemName:'js course',
        price:2999},
        {itemName:'python',
        price:999},
        {itemName:'mobile dev',
        price:9999},
        {itemName:'data science',
        price:12999}
    
]

const pricetopay = shoppingcart.reduce( (acc,item)=> (acc+item.price),0);

console.log(pricetopay);
