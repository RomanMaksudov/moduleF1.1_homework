const apiKey = "366d1896809eed5516d485434ad6f3e2";

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={apiKey}';

async function checkWeather() {
    const responce = await fetch(apiUrl);
    const data = await responce.json();
    console.log(data, "data");
}

checkWeather();