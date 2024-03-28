import React, { Component } from "react";

import "../styles/Main.css";

function Main(){

    const apiKey = "366d1896809eed5516d485434ad6f3e2";

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");

    async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + '&appid={apiKey}');
    const data = await responce.json();
    console.log(data, "data");

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + '&#8451';
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    }


    searchButton.addEventListener("click", () => {
    checkWeather(searchInput.value);
    searchInput.value = "";
    })    

    return (
            <main>
                <div className={ "container" }>
                    <div className={ "search-box" }>
                        <i className={ "location-dot" }></i>
                        <input type="text" placeholder="Enter your city"></input>
                        <button className={ "submit" }></button>
                    </div>
                    <div className={ "weather" }>
                        <div className={ "weather-image" }>
                            <i className={ "cloud" }></i>
                        </div>
                        <h1 className={ "temp" }>22&deg;C</h1>
                        <h2 className={ "city" }>Moscow</h2>
                        <div className={"details"}>
                            <div className={"col"}>
                                <i className={"water"}></i>
                                <div>
                                    <p className={"humidity"}>50%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className={"col"}>
                                <i className={"wind"}></i>
                                <div>
                                    <p className={"humidity"}>15 km/h</p>
                                    <p>Wind speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

export default Main;