function bmicalculator(){

var height=parseInt(document.getElementById("height").value);
var weight=parseInt(document.getElementById("weight").value);
var result=document.getElementById("bmi");
    if (height ==="") {
        result.innerHTML = "Provide a valid Height!";
    }
    else if (weight ==="") {
        result.innerHTML = "Provide a valid Weight!";
    }
    else{
        var bmi=weight / ((height * height) / 10000).toFixed(2);
        if(bmi<18.5){
            result.innerHTML="Your BMI Is: " + bmi.toFixed(2) + " and You are Under UnderWeight Category !";
        }
        else if(bmi>18.5 && bmi<24.9){
            result.innerHTML="Your BMI Is: " + bmi.toFixed(2) + " and You are Under Normal Category !";
        }
        else{
            result.innerHTML="Your BMI Is: " + bmi.toFixed(2) + " and You are Under OverWeight Category !";
        }
    }
}