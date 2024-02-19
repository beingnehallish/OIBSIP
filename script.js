function validateInput() {
    var input = document.getElementById("temperature").value;

    if (isNaN(input)) {
        alert("Please enter a valid number for temperature.");
        document.getElementById("temperature").value = "";
    }
}

function convert() {
    var input = parseFloat(document.getElementById("temperature").value);
    var unit1 = document.getElementById("unit1").value;
    var unit2 = document.getElementById("unit2").value;
    var result = document.getElementById("result");

    if (isNaN(input)) {
        alert("Please enter a valid number for temperature.");
        document.getElementById("temperature").value = "";
        result.innerText = "";
        return;
    }

    if (unit1 == "celsius") {
        if(unit2=="fahrenheit"){
        var fahrenheit = (input * 9/5) + 32;
        result.innerText = input + " Celsius is equal to " + fahrenheit.toFixed(2) + " Fahrenheit.";
        }
        else if(unit2=="kelvin"){
            var kelvin = (input+273.15);
        result.innerText = input + " Celsius is equal to " + kelvin.toFixed(2) + " Kelvin.";
        }
    } 
    else if(unit1=="fahrenheit") {
        if(unit2=="celsius"){
        var celsius = (input - 32) * 5/9;
        result.innerText = input + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius.";
        }
        else if(unit2=="kelvin"){
        var kelvin = ((input-32)*(5/9))+273;
        result.innerText = input + " Fahrenheit is equal to " + kelvin.toFixed(2) + " Kelvin.";
    }
}
    else if(unit1=="kelvin"){
        if(unit2=="celsius"){
            var celsius = (input - 273);
            result.innerText = input + " Kelvin is equal to " + celsius.toFixed(2) + " Celsius.";
        }
        else if(unit2=="fahrenheit"){
            var fahrenheit = ((input-273) * 9/5) + 32;
            result.innerText = input + " Kelvin is equal to " + fahrenheit.toFixed(2) + " Fahrenheit.";    
        }
    }
}