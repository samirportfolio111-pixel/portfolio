"use client";

import Link from "next/link";
import { projects } from "../data/projects";

const ProjectsGrid = () => {
  return (
    
    <section className="projects-grid">
      <div className="container">
                {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center mb-60">
              <h4>My Creative Work</h4>
              <h2>Graphic Design Portfolio</h2>
            </div>
          </div>
        </div>


        <div className="grid">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card"
            >
              <img
                src={`/assets/images/projects/${project.cover}.jpg`}
                alt={project.company}
              />
              <div className="overlay">
                <h3>{project.company}</h3>
                <span>{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
