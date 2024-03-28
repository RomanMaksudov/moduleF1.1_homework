import React, { Component } from "react";

import "../styles/Main.css";

class Main extends Component {
    render() {
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
                        <h1 className={ "temp" }>22 &#8451</h1>
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
}

export default Main;