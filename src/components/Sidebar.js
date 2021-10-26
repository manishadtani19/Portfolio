import React from "react";

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import image from "../assets/image.svg";
import resume from "../assets/resume.pdf";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:manish.adtani@gmail.com");
  };
  return (
    <div className="sidebar">
      <img src={image} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Manish <span>Adtani</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">
        <b>Web Developer</b>
      </div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          <b> Download CV</b>
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="https://www.facebook.com/manish.adtani.9">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href="!#">
          <img src={instagram} alt="instagram" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/manishadtani19">
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>

        <div className="sidebar_item sidebar__hackerrank py-3">
          <a href="https://www.hackerrank.com/manish_adtani19">
            <img
              alt=""
              src="https://img.icons8.com/windows/32/000000/hackerrank.png"
              className="sidebar__icon mr-3"
            />
            HackerRank
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Alwar, India
        </div>
        <div className="sidebar__item">manish.adtani@gmail.com</div>
        <div className="sidebar__item">6350470637</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Email me
      </div>
    </div>
  );
};

export default Sidebar;
