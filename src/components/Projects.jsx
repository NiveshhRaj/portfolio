import websiteImg1 from "../assets/expense tracker.png";
import websiteImg2 from "../assets/parkinsons.png";
import {motion} from "framer-motion";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "A Expense Management Website. Built with MERN Stack.",
        link: "https://github.com/NiveshhRaj/Expense-tracker",
      },
      {
        image: websiteImg2,
        description:
          "Parkinson's Diesease Detection.Built with HTML,CSS,Javascript,Python",
        link: "https://github.com/NiveshhRaj/Parkinsons-Detection",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col justify-center px-5 py-20 text-white bg-black"
    >
      <div className="w-full ">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-around gap-5 px-10 md:flex-row">
          {config.projects.map((project) => (
            <motion.div className="relative border-2"
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
            >
              <img className="h-[300px] w-[500px]" src={project.image} />
              <div className="project-desc">
                <p className="px-5 py-5 text-center">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn" target="_blank" href={project.link}>
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
