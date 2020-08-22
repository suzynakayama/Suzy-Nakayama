import React from "react";
import SpecialtyCard from "../../components/SpecialtyCard/SpecialtyCard";
import "./About.css";
import languagesData from "../../data/LanguagesData";

const About = () => {

	const data = languagesData;

	return (
    <div className="about" id="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__container">
        <div className="about__text">
          <p>
            Hi, I'm Suzy Nakayama and I graduated from General Assembly{" "}
            <strong>Software Engineering Immersive</strong> program. I am a
            full-stack developer that translates the geekiness behind ideas
            bringing to life an aesthetically pleasing and fluid app for users.
          </p>
          <p>
            My background in intellectual property law and culinary arts
            enhanced my ability to articulate in a business context and to
            provide creative solutions. This allows me to be an organized and
            focused team player that collaborates for a positive environment
            seeking challenges and opportunities to grow and improve, while also
            developing and delivering.
          </p>
          <p>
            I am currently learning GraphQL/Apollo and looking
            forward to growing my database of programming language/framework
            knowledge.
          </p>
          <h3 className="about__text--phrase">
            Learning is my hobby and creating is my passion.
          </h3>
        </div>
        <div className="about__specialties--container">
          <div className="about__specialties--left">
            <h2 className="about__specialties--title-left">Strong Skills</h2>
            <SpecialtyCard data={data[0]} />
          </div>
          <div className="about__line"></div>
          <div className="about__specialties--right">
            <h2 className="about__specialties--title-right">Working Skills</h2>
            <SpecialtyCard data={data[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
