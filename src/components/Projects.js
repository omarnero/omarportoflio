import React from "react";

import clinc from "../assets/clinc.png";
import base from "../assets/base.png";
import omnifood from "../assets/omnifood.png";
import houseMarket from "../assets/house_market.png";
import smartTeaching from "../assets/smartTeaching.png";
import easytask from "../assets/easytask.png";
const Projects = () => {
  const projects = [
    {
      img: clinc,
      title: "Clinc App",
      desc: " A Clinc App Management System . Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://clinid-app.vercel.app/",
      code: "https://github.com/omarnero/Clinid_app",
    },

    {
      img: omnifood,
      title: "Omnifood",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://nero-omnifood.netlify.app/",
      code: "https://github.com/omarnero/omnifood",
    },
    {
      img: houseMarket,
      title: "House Market Place",
      desc: "The application for managing and renting apartments was implemented through a scientific course on the Udemy platform.",
      live: "https://house-market-place-eight.vercel.app/",
      code: "https://github.com/omarnero/house-market-place",
    },
    {
      img: easytask,
      title: "Easy Task",
      desc: "A simple application designed to manage task's within the company, implemented by Angular.",
      live: "https://easy-task-three.vercel.app/",
      code: "https://github.com/omarnero/Easy-Task",
    },
    {
      img: smartTeaching,
      title: "Smart Teaching ",
      desc: "An e-learning platform created during my work at Ezdehar Company using React and Bootstrap.",
      live: "https://smartteachingsystem.ezdhaar.com/",
    },
    {
      img: base,
      title: "Base",
      desc: "An e-commerce website was implemented during my work period at GreeNetwork, so I could not display the code.making it by react",
      live: "https://basekwt.com/",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            Angular and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img
                src={project.img}
                alt={project.title}
                style={{ height: "35vh" }}
              />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
