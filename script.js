function compute()
{

    // get the value from the field
    var principal = parseInt(document.getElementById("principal").value);
    if(principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    p = document.getElementById("principal").value;
    // convert the input value to a number
    var principal = parseInt(document.getElementById("principal").value);
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculate the interest
    var interest = principal * years * rate /100;
    
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"



}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        