"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "../data/projects";

const ProjectMasonryIsotop = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter(
          (item) => item.category.toLowerCase() === activeFilter
        );

  return (
    <section className="project-masonry-area pt-120 pb-90" id="projects">
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

        {/* Filters */}
        <div className="row">
          <div className="col-12">
            <div className="project-filter mb-50 text-center">
              {[
                { name: "All", value: "*" },
                { name: "Pitch Deck Presentation", value: "pitch deck presentation" },
                { name: "ID cards", value: "id cards" },
                { name: "Business Card", value: "business card" },
                { name: "Catalogue", value: "catalogue" },
              ].map((btn) => (
                <button
                  key={btn.value}
                  className={activeFilter === btn.value ? "active" : ""}
                  onClick={() => setActiveFilter(btn.value)}
                >
                  {btn.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="row project-masonry-active">
          {filteredProjects.map((item, index) => (
            <div key={index} className="col-xl-4 col-md-6 mb-30">
              <div className="project-item">

                {/* Cover → opens detail page */}
                <Link
                  href={`/projects/${item.slug}`}
                  className="project-thumb"
                >
                  <img
                    src={`/assets/images/projects/${item.cover}.png`}
                    alt={item.company}
                  />

                  {/* SAME hover style */}
                  <div className="project-hover">
                    <p>{item.description}</p>
                    <span className="project-btn">
                      <i className="far fa-arrow-right" />
                    </span>
                  </div>
                </Link>

                {/* Title */}
                <div className="project-content">
                  <span className="sub-title">{item.category}</span>
                  <h6>{item.company}</h6>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectMasonryIsotop;
