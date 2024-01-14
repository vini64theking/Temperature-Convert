const temp=document.getElementById("temp");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let tem;

function convert(){
    if(toFahrenheit.checked){
       tem=Number(temp.value);
       tem=(tem*9/5)+32;
       result.textContent=tem.toFixed(1) + "°F";
      
    }

    else if(toCelsius.checked){
        tem=Number(temp.value);
        tem=(tem-32)*5/9;
        result.textContent=tem.toFixed(1) + "°C";
        

    }

    else{
        result.textContent="Please select a Unit"
    }

}