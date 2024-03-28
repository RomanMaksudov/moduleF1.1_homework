import React, { Component, Fragment } from "react";

import "../styles/App.css";
import Header from "./Header"

class App extends Component {
    render() {
        return (
            <Fragment>
            <Header />
            <main>
                <div>
                    <h1>Weather</h1>
                </div>
            </main>
            </Fragment>
        );
    }
}

export default App;