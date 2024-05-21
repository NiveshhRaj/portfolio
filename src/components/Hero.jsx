import React from "react";
import HeroImg from "../assets/hero.png";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  const config = {
    subtitle: "I am a web developer with expertise in the  MERN Stack",
    social: {
      github: "https://github.com/NiveshhRaj",
      linkedin: "https://www.linkedin.com/in/niveshhraj/",
      instagram: "https://www.instagram.com/niveshh_raj/",
      leetcode: "https://leetcode.com/u/Niveshhraj_/",
    }
  };
  return (
    <>
      <section
        id="home"
        className="flex flex-col justify-center px-5 py-32 bg-black img1 back text-slate-400 font-montserrat md:flex-row"
      >
        <div className="relative flex flex-col md:w-1/2 pt-[100px]">
          <h1 className="text-4xl font-semibold text-slate-400 font-poppins ">
            Hii ! <br />I am{" "}
            <span className="text-6xl font-bold font-rowdies hover:text-white"> NIVESHHRAJ </span>
            <p className="text-2xl text-white font-montserrat">
              {config.subtitle}
            </p>
          </h1>

          <div className="flex py-10 ">
            <a href={config.social.github} className="pr-5 hover:text-white">
              <FaGithub size={40} />
            </a>
            <a href={config.social.linkedin} className="pr-5 hover:text-white">
              <ImLinkedin size={40} />
            </a>
            <a href={config.social.instagram} className="pr-5 hover:text-white">
              <FaInstagram size={40} />
            </a>
            <a href={config.social.leetcode} className="hover:text-white">
              <SiLeetcode size={40} />
            </a>
          </div>
        </div>
        <img src={HeroImg} alt="Heroimg" className="md:w-1/3" />
      </section>
    </>
  );
}

export default Hero;
