import React from "react";
import "./Intro.css";

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="intro__container">
                <div className="intro__titles">
                    <h1 className="intro__title--first">Suzy</h1>
                    <h1 className="intro__title--last">Nakayama</h1>
                    <h2 className="intro__subtitle">
                        &lt; Full-Stack Developer &gt;
                    </h2>
                </div>
                <img src="/images/suzy.jpg" alt="suzy" className="intro__img" />
            </div>
        </div>
    );
}

export default Intro;
