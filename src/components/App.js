import React, { Component, Fragment } from "react";

import "../styles/App.css";
import Header from "./Header"
import Main from "./Main";
import Weather from "./Weather";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Weather />
            </Fragment>
        );
    }
}

export default App;