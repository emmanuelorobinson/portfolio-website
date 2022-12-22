import React from "react";
import mydata from "../mydata";
import {AiFillGithub} from "react-icons/ai"
import {GiSpiderWeb} from "react-icons/gi"

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
                    <AiFillGithub size={20} 
                    onClick={() => window.open(project.git, "_blank")}
                    alt="github"
                    />
                  ) : (
                    ""
                  )}
                  {project.web ? (
                    <GiSpiderWeb size={20}
                    onClick={() => window.open(project.web, "_blank")}
                    alt="web"
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
