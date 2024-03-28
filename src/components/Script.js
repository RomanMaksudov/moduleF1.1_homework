import React, {useState} from "react";

function Weather(){
    const apiKey = "366d1896809eed5516d485434ad6f3e2";
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");

    async function checkWeather(city) {
        const responce = await fetch(apiUrl + city + '&appid=apiKey');
        const data = await responce.json();
        console.log(data, "data");

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '&#8451';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    }


    searchButton.addEventListener("click", () => {
        checkWeather(searchInput.value);
        searchInput.value = "";
    })
}
