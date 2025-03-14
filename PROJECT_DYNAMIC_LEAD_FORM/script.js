// to get the input value from user of leaddate and store it
function beforesubmit()
{
    const outputedate = document.querySelector(".outputdate");
    const inputdate = document.querySelector(".inputdate"); //this date has type string convert it into date datatype (get ur locale user info run "system.debug(UserInfo.getLocale());" in developer console and search for USER_DEBUG)
   
    console.log(inputdate.value);
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN") //en_In is replaced by en-IN
     outputedate.value = formatteddate;
}
beforesubmit()