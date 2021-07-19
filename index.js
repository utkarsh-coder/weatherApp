const apiKey = "wkmxsxhMVbDSGmZ2KQg7V5A8ZxU1xmjB"

const getWeatherDetails = async (id) => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${apiKey}`;

    const res = await fetch(baseUrl + query);
    const data = await res.json();

    return data[0];
}

const getCity = async (city) => {
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${apiKey}&q=${city}`;

    const res = await fetch(baseUrl + query);
    const data = await res.json();

    return data[0];
}