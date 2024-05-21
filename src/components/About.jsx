import React from "react";
import AboutImg from "../assets/me1.jpg";
import { motion } from "framer-motion"

function About() {
  const config = {
    line1:
      "Im Niveshhraj, a dedicated web developer with a passion for crafting seamless digital experiences. Specializing in HTML,CSS, React, Tailwind CSS, JavaScript, Node.js, Express, and MongoDB, I excel in building dynamic web applications with intuitive user interfaces. While my focus lies primarily in frontend and backend web development, I also have a basic understanding of Python,Java,C++ for basic programming tasks. Leveraging tools like Redux for state management and Git for version control, I ensure smooth collaboration and code maintenance.",
  };
  return (
    <>
      <section
        id="about"
        className="flex flex-col px-5 py-10 font-montserrat md:flex-row bg-slate-300"
      >
        <motion.div className="flex justify-center md:w-1/2"
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1
          }}
          
        >
          <img src={AboutImg} className="w-[300px] h-[400px]" />
        </motion.div>

        <div className="flex justify-center py-5 md:w-1/2">
          <div className="flex flex-col justify-center font-medium text-black">
            <h1 className="text-4xl border-b-4 mb-5 w-[190px] font-bold border-primary">
              About me
            </h1>
            <p className="leading-7">{config.line1}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
