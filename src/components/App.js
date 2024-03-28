import React, { Component } from "react";

import "../styles/App.css";
import Header from "./Header"

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            <main>
                <div>
                    <h1>Weather</h1>
                </div>
            </main>
            </React.Fragment>
        );
    }
}

export default App;