// using exchangerate api

async function loadexchangerate()
{
    const readableform = await fetch("https://rest.coinapi.io/v1/exchangerate/USD",{
        method : "GET",
        Headers:
        {
            'X-CoinAPI-Key': "99460a92-e9b7-4734-8212-fde6d26ce698",
        }
     } 
    );
    let convertedtojson = await readableform.json();
    console.log(convertedtojson);
    
}

loadexchangerate();