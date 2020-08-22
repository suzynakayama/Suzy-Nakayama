import React, { useState, useMemo } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./Main.css";

const Main = ({ nightMode, toggleNightMode }) => {
    const [src, setSrc] = useState("/images/pixcomp.jpg");

    const myImg = "/images/computer.png";

    const img = useMemo(() => {
    const imageToLoad = new Image();
    imageToLoad.src = myImg;
    imageToLoad.onload = () => {
        setSrc(myImg);
    };
    }, []);

    return (
    <div className="main">
        <NavBar theme={nightMode} toggleNightMode={toggleNightMode} />
        <Intro src={src} />
        <About />
        <Projects src={src} />
        <Contact />
    </div>
    );
};

export default Main;
