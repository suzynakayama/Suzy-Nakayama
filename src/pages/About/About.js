import React from "react";
import SpecialtyCard from "../../components/SpecialtyCard/SpecialtyCard";
import "./About.css";

function About() {
    return (
        <div className="about" id="about">
            <h2 className="about__title">About Me</h2>
            <div className="about__container">
                <div className="about__text">
                    <p>
                        Hi, I'm Suzy Nakayama and I graduated from General
                        Assembly <strong>Software Engineering Immersive</strong>{" "}
                        program. I am a creative full-stack developer that
                        translates the geekiness behind ideas bringing to life
                        an aesthetically pleasing and fluid app for users.
                    </p>
                    <p>
                        My background in intellectual property law and culinary
                        allows me to be an organized and focused team player
                        that collaborate for a positive environment seeking for
                        challenges and opportunities to grow and improve, while
                        also developing and delivering.
                    </p>
                    <h3 className="about__text--phrase">
                        Learning is my hobby and creating is my passion.
                    </h3>
                </div>
                <div className="about__line"></div>
                <div className="about__specialties">
                    <SpecialtyCard />
                </div>
            </div>
        </div>
    );
}

export default About;
