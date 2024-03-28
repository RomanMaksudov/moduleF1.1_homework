import React, { Component, useState } from "react";

import "../styles/Header.css";

function Header() {
    let buttonName = "Select City";
    let count = 0;
    let [count, setAttribute] = useState(a:0)
    const handleClick = () => {
        console.log('your city');
    }

        return (
            <header>Weather App
                <button className={ "select-city" } onClick={ handleClick }>{buttonName}</button>
            </header>
        )
}


export default Header;