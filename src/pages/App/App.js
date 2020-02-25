import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "./App.css";

function App() {
    const [nightMode, setNightMode] = useState(false);

    let toggleNightMode = () => {
        let isOn = !nightMode;
        setNightMode(isOn);
        localStorage.setItem("nightMode", isOn);
    };

    return (
        <div className={"App " + (nightMode ? "App--night-mode" : "")}>
            <NavBar theme={nightMode} toggleNightMode={toggleNightMode} />
            <Intro />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
