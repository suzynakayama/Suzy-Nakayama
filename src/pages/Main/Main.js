import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./Main.css";

function Main(props) {
    return (
        <div className="main">
            <NavBar
                theme={props.nightMode}
                toggleNightMode={props.toggleNightMode}
            />
            <Intro />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Main;
