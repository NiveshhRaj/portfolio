import React from "react";
import ResumeImg from "../assets/resume.jpg";
import ResumePDF from "../assets/Resume.pdf"; // Import the PDF file

function Resume() {
  const config = {
    link: "",
  };
  return (
    <>
      <section
        id="resume"
        className="flex flex-col px-5 py-10 font-montserrat md:flex-row bg-slate-300"
      >
        <div className="flex justify-center py-5 md:justify-end md:w-1/2">
          <img src={ResumeImg} className="w-[300px]" alt="Resume" />
        </div>

        <div className="flex justify-center py-5 md:w-1/2">
          <div className="flex flex-col justify-center text-black">
            <h1 className="text-4xl border-b-4 mb-5 w-[150px] font-bold border-primary">
              Resume
            </h1>
            <p className="leading-7 ">
              You can view my Resume {"  "}
              <a href={ResumePDF} download="Resume.pdf" className="btn">
                {""}
                Download
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
