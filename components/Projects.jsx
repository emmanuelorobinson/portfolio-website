import React from "react";
import mydata from "../mydata";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Projects = () => {
  return (
    <section className="project-section">
      <div className="project-container">

      <h1>Projects</h1>

      <div className="flex container mx-auto align-middle">

        {mydata.projects.map((project) => (

          <Card key={project.id} className={`px-10`}>
            <CardContent>
            <h2>{project.title}</h2>
            <p>{project.short}</p>
            <p>{project.tech}</p>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Git
                </a>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
