import React from "react";
import mydata from "../mydata";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { FaGithub } from "react-icons/fa";



const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        {/* Project section heading */}
        <h1>Projects</h1>

        <div className={"project-box"}>
          {mydata.projects.map((project) => (
            <div key={project.id} className={`project`}>
              <CardContent>
                <div className="svg-wrapper">
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>

                <h2>{project.title}</h2>

                <div>
                  <h3>{project.short}</h3>
                  <p>{project.tech}</p>
                </div>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git
                  </a>
                </Button>
              </CardActions>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
