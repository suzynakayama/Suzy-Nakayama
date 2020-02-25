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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Modi soluta quibusdam deserunt qui ullam
                        praesentium voluptas veritatis quia voluptates, ipsam
                        quisquam, minima earum quos ut dolores repellat, aliquid
                        autem beatae?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Modi soluta quibusdam deserunt qui ullam
                        praesentium voluptas veritatis quia voluptates, ipsam
                        quisquam, minima earum quos ut dolores repellat, aliquid
                        autem beatae?
                    </p>
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
