// to get the input value from user of leaddate and store it
let captachflag;
function beforesubmit(event)
{   
    if(captachflag)
    {
        const outputedate = document.querySelector(".outputdate");
    const inputdate = document.querySelector(".inputdate"); //this date has type string convert it into date datatype (get ur locale user info run "system.debug(UserInfo.getLocale());" in developer console and search for USER_DEBUG)
   
    console.log(inputdate.value);
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN") //en_In is replaced by en-IN
     outputedate.value = formatteddate;
    }
    else{
        alert("invalid captcha")
        event.preventDefault();
    }
}
beforesubmit()

// site key 6Lc4ZPQqAAAAALT4beAU3ldr-ededZBXNiNYoEWo
// site secret key 

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

