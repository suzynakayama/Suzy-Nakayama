import React from "react";
import "./Intro.css";

function Intro() {
    return (
        <div className="intro" id="intro">
            <h1 className="intro__title--first">Suzy</h1>
            <h1 className="intro__title--last">Nakayama</h1>
            <h2 className="intro__subtitle">&lt; Full-Stack Developer &gt;</h2>
            <img src="/images/suzy.jpg" alt="suzy" className="intro__img" />
        </div>
    );
}

export default Intro;
