import React from "react";
import react from "../assets/icons/react.svg";
// import python from "../assets/icons/python.svg";
import Bar from "./Bar";

const languages = [
  {
    icon: react,
    name: "Java",
    level: "60",
  },

  {
    icon: react,
    name: "MySql",
    level: "70",
  },

  {
    icon: react,
    name: "Javascript",
    level: "70",
  },
  {
    icon: react,
    name: "HTML",
    level: "80",
  },
  {
    icon: react,
    name: "CSS",
    level: "70",
  },
  {
    icon: react,
    name: "PHP",
    level: "60",
  },
];

const tools = [
  {
    icon: react,
    name: "React JS",
    level: "70",
  },
  {
    icon: react,
    name: "Node Js",
    level: "60",
  },
  {
    icon: react,
    name: "Express Js",
    level: "60",
  },
  {
    icon: react,
    name: "jquery",
    level: "70",
  },

  {
    icon: react,
    name: "Ajax",
    level: "65",
  },

  {
    icon: react,
    name: "Bootstrap / Material UI",
    level: "70",
  },
];

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science Enginnering</h5>
            <p className="resume-card__name">
              Vellore Institute Of Technology(2018-2022)
            </p>
            <p className="resume-card__details">
              I am currently persuing B.tech in Computer Science Engineering
              from Vellore Institute Of Technology(Vellore).
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Intern</h5>
            <p className="resume-card__name">
              Edify Accelerators and Bloom India(2021)
            </p>
            <p className="resume-card__details">
              I worked as a Backend-intern in the company and made the website
              for the comapny in the assigned time frame
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Programming Skills</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Frameworks / Systems</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
