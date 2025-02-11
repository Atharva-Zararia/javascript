// const coding = ["js","ruby","java","python","cpp"];

// const values = coding.forEach((item)=>{
//     //console.log(item);
    
    
// })

// console.log(values); // here it does not return any value of the array...foreach loop does not return any value


const mynums = [1,2,3,4,5,6,7,8,9,10]
// //filter also takes a callback function and returns values(filter is true false)
// const newnums = mynums.filter((num)=> num > 4) //here we use filter same as  we use if condition i.e returning nums > 4 in the array
// // here we are not using {} braces but if we use curly braces we create a scope and we will require to return the value
// console.log(newnums);
// // if we want to use curly braces
// const newnumss = mynums.filter((num)=> {
    
    
//     return num > 4
// })
// console.log(newnumss);


// to use foreach loop to return values

// const newnum = []
// mynums.forEach( (num)=> 
// {
//     if(num>4)
//     {
//         newnum.push(num);
//     }
// })

// console.log(newnum);



const books = [
    {title : 'Book1' , genre:'Fiction',publish:1981,edition:2004},
    {title : 'Book2' , genre:'History',publish:1992,edition:2008},
    {title : 'Book3' , genre:'Science',publish:1999,edition:2007},
    {title : 'Book4' , genre:'biography',publish:1989,edition:2010},
    {title : 'Book5' , genre:'Fiction',publish:2009,edition:2014},
    {title : 'Book6' , genre:'History',publish:1987,edition:2010},
    {title : 'Book7' , genre:'Math',publish:1986,edition:1996},
    {title : 'Book8' , genre:'Non-fiction',publish:1985,edition:1997}
];
// to get objects having genre = history and published after 1990
let userbooks = books.filter((bk)=> bk.genre ==='History' && bk.publish>1990);
// using {} braces and return method get  books having publish after 1980 and genre fiction
userbooks = books.filter((bk) => {
    return (bk.publish > 1980 && bk.genre ==='Fiction');
})
console.log(userbooks);










