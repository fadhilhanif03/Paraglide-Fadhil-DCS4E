const { contextBridge } = require("electron");

function buttonClicked() {
    var city = document.getElementById('paraglide_input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        var info = data;
        var wind = info.wind.speed;
        var temp = info.main.temp - 273.15;
        var humidity = info.main.humidity;
        var pressure = info.main.pressure;
        var weathertype = info.weather[0].main;
        var weatherdesc = info.weather[0].description;
        var visibility = info.visibility;
        
        console.log("Wind Speed: " + wind);
        console.log("Temperature: " + temp);
        console.log("Humidity: " + humidity);
        console.log("Pressure: " + pressure); // output the API into console
        console.log("Weather Condition: " + weathertype);
        console.log("Weather Description: " + weatherdesc);
        console.log("Visibility on Area: " + visibility);

        // data that want to display

        para.innerHTML = "City: " + city + "<br><br>";
        windspeed.innerHTML = "Wind Speed: " + wind.toFixed(2) + " m/s" + "<br><br>";
        temperature.innerHTML = "Temperature: " + temp.toFixed(2) + " °C" + "<br><br>";
        humi.innerHTML = "Humidity: " + humidity + " %" + "<br><br>";
        press.innerHTML = "Pressure: " + pressure + " hectoPascals (hPa)" + "<br><br>";
        cond.innerHTML = "Weather Condition: " + weathertype + "<br><br>";
        desc.innerHTML = "Weather Description: " + weatherdesc + "<br><br>";
        visi.innerHTML = "Visibility on Area: " + visibility;

        // enter the display webpage through "id"
        document.getElementById("para").innerHTML == para.innerHTML;
        document.getElementById("windspeed").innerHTML == windspeed.innerHTML;
        document.getElementById("temperature").innerHTML == temperature.innerHTML;
        document.getElementById("humi").innerHTML == humi.innerHTML;
        document.getElementById("press").innerHTML == press.innerHTML;
        document.getElementById("cond").innerHTML == cond.innerHTML;
        document.getElementById("desc").innerHTML == desc.innerHTML;
        document.getElementById("visi").innerHTML == visi.innerHTML;
    })
}