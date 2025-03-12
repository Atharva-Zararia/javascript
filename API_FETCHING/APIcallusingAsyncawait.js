// async function fetchfromserver()
// {
//     let readablereplyfromserver = await fetch('https://reqres.in/api/users',{method:"GET"});//await keyword and later stored
//     //json into readablereplyfromserver variable from fetch
//     let datafromfromjson = await readablereplyfromserver.json();//again await is used because json received from server is
//     // again a promise


//     console.log(datafromfromjson);
    

// }

// fetchfromserver();

// ****NEW EXAMPLE****
// new api = https://api.thecatapi.com/v1/images/search (random cat api)
// this api is to get any random image 

// 1 **** using promise and then()****

function fetchcatimage()
{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(getimagefromserver=>getimagefromserver.json())
    .then( convertedtojson => 
        {
        console.log(convertedtojson);
        const imageurl = convertedtojson[0].url; //variable converted to json returns array of objects
        let element = document.querySelector("catimage");
        element.src = imageurl;
        // as only 1 object is returned and we used object.parameter to fetch url from returned output
        console.log(imageurl);
        
        
        })
}
    

fetchcatimage();
//****USING ASYNC AWAIT */
// async function fetchcatimage()
// {
//     const readableform = await fetch("https://api.thecatapi.com/v1/images/search");
//     const convertedtojson = await readableform.json();

//     console.log(convertedtojson);
//     const imageurl = convertedtojson[0].url;
//     let element = document.querySelector(".catimage")
//     element.src =   imageurl;
    
// }
    

// fetchcatimage();




// [
//     {
//       id: 'bet',
//       url: 'https://cdn2.thecatapi.com/images/bet.jpg',
//       width: 500,
//       height: 337
//     }
//   ]