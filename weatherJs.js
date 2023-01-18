let cardEl = document.getElementById("card");
cardEl.classList.add("d-flex","flex-row","justify-content-center");

let inputSearchEl = document.getElementById("inputSearch");

function createAppend(jsonData){

    // let data = JSON.stringify(weatherData);
    // console.log(weatherData);
    // console.log(weatherData.main.temp);

    let dayCard = document.createElement("div");
    cardEl.appendChild(dayCard)

    let headingEl = document.createElement("p");

    


        headingEl.textContent= jsonData.name;

    
    headingEl.classList.add("day-card");
    dayCard.appendChild(headingEl);
    // console.log(headingEl.textContent);


    let weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");
    dayCard.appendChild(weatherCard);


    let forCity = document.createElement("h3");
    forCity.textContent = "Today's forecast for "+inputSearchEl.value;
    weatherCard.appendChild(forCity);

    let weatherImage = document.createElement("img");

    
    
    weatherImage.classList.add("image")
    weatherCard.appendChild(weatherImage);

    let temperatureEl = document.createElement("p");
    let currentTemp = parseInt(jsonData.main.temp)-273.15;
    // console.log(currentTemp);

    if(currentTemp>20){
        weatherImage.src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png";
    }
    else{
        weatherImage.src="https://img.freepik.com/free-vector/dark-cloud-with-flash-lightening-rainfall_1017-32188.jpg?w=900&t=st=1669143881~exp=1669144481~hmac=7a8eebf7c68d76bd8c37fe98891940f1afc614670623adba03f2a7b400b6e58d"
    }

    temperatureEl.classList.add("temperatureHeading");
    temperatureEl.textContent = "Temperature : "+parseInt(currentTemp) + " c";
    weatherCard.appendChild(temperatureEl);
    

    let humidityEl = document.createElement("p");
    humidityEl.classList.add("temperatureHeading");
    humidityEl.textContent = "Humidity : "+jsonData.main.humidity;
    weatherCard.appendChild(humidityEl);

    let description = document.createElement("h3");
    description.textContent = jsonData.weather[0].description;
    weatherCard.appendChild(description);

}

let input = inputSearchEl.value;
console.log(input);

inputSearchEl.addEventListener("keypress",function getCity(event){
    if(event.key==="Enter"){
    
    let input = inputSearchEl.value;
    cardEl.textContent="";
    input.textContent="";
    let options={
        method: "GET"
    }
    let url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=bcdecebcfc05038199286a7786b64ffd"

    fetch(url,options)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonData){
        
        createAppend(jsonData);
    })
    
}


    

})
