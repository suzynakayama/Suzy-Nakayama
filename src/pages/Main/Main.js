import React, { useState, useMemo } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./Main.css";

const Main = ({ nightMode, toggleNightMode }) => {
    const [src, setSrc] = useState("/images/pixcomp.jpg");

    // check if is Chrome
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    
    // check if is Firefox
    const isFirefox = typeof InstallTrigger !== 'undefined';
    
    const cannotUseWebp = !isChrome && !isFirefox;
    
    const myImg = cannotUseWebp
        ? "/images/computer.png"
        : "/images/computer.webp";

    const img = useMemo(() => {
    const imageToLoad = new Image();
    imageToLoad.src = myImg;
    imageToLoad.onload = () => {
        setSrc(myImg);
    };
    }, [myImg]);

    return (
    <div className="main">
        <NavBar theme={nightMode} toggleNightMode={toggleNightMode} />
            <Intro src={ src } cannotUseWebp={ cannotUseWebp }/>
        <About />
            <Projects src={ src } cannotUseWebp={ cannotUseWebp }/>
        <Contact />
    </div>
    );
};

export default Main;
