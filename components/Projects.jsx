import React from "react";
import mydata from "../mydata";
import Image from "next/image";
import gitlogo from "../public/assets/gitlogo.png";

const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        {/* Project section heading */}
        <h1>Projects.</h1>

        <div className={"project-box"}>
          {mydata.projects.map((project) => (
            //if git is present then allow project-box to be clickable
            <a
              {...(project.web
                ? {
                    href: project.web,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {
                    href: project.git,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
              key={project.id}
            >
              <div key={project.id} className={`project`}>
                <div className="svg-wrapper">
                  {project.git ? (
                    <Image
                      src={gitlogo}
                      alt="github"
                      width={20}
                      height={20}
                      onClick={() => window.open(project.git, "_blank")}
                    />
                  ) : (
                    ""
                  )}
                  {project.web ? (
                    <Image
                      src="/assets/web.svg"
                      alt="web"
                      width={20}
                      height={20}
                    />
                  ) : (
                    ""
                  )}

                  {/* </a> */}
                </div>

                <h2>{project.title}</h2>

                <div>
                  <h3>{project.short}</h3>
                  <footer>
                    <p>{project.tech}</p>
                  </footer>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
