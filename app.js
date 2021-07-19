const searchbtn = document.getElementById("searchbtn");


const updateUI = (data) => {
    const cityDetails = data.cityDetails;
    const weather = data.cityWeather;

    document.getElementById("location").innerHTML = cityDetails.EnglishName;
    document.getElementById("temp").innerHTML = weather.Temperature.Metric.Value;
    console.log(weather.IsDayTime);

    if(weather.IsDayTime){
        document.getElementById("statusImg").src = "dayTime.jpg";
    }
    else{
        document.getElementById("statusImg").src = "nightTime.jpg";
    }

}

const updateCity =async (city) => {
    const cityDetails = await getCity(city);
    const cityWeather = await getWeatherDetails(cityDetails.Key);

    console.log(cityWeather);

    return {
        cityDetails : cityDetails,
        cityWeather : cityWeather,
    };
}

function onClick() {
    const search = document.querySelector("#search");
    const city = search.value;
    console.log(city);

    updateCity(city).then((data) =>{
        updateUI(data);
    }).catch(err => console.log(err));
}