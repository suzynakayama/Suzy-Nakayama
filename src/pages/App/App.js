import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import OneProject from "../OneProject/OneProject";
import Footer from "../../components/Footer/Footer";
import "./App.css";

function App() {
    const [nightMode, setNightMode] = useState(false);

    let toggleNightMode = () => {
        let isOn = !nightMode;
        setNightMode(isOn);
    };

    return (
        <div className={"App " + (nightMode ? "App--night-mode" : "")}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Main
                            nightMode={nightMode}
                            toggleNightMode={toggleNightMode}
                        />
                    )}
                />
                <Route
                    exact
                    path="/:id"
                    render={props => (
                        <OneProject
                            {...props}
                            nightMode={nightMode}
                            toggleNightMode={toggleNightMode}
                        />
                    )}
                />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
