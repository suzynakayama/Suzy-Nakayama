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
                        Hi, my name is Suzy Nakayama, I graduated from General
                        Assembly <strong>Software Engineering Immersive</strong>{" "}
                        program and I am a creative full-stack developer that
                        translates the geekiness behind your ideas bringing to
                        life an aesthetically pleasing and fluid app for your
                        users.
                    </p>
                    <p>
                        With a background in intellectual property law and
                        culinary, I am a team player that enjoys working in
                        positive and organized environments that brings me
                        challenges and opportunities to learn, grow, and improve
                        while also creating and delivering.
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
