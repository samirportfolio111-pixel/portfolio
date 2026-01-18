import { projects } from "../../../data/projects";

export default function ProjectDetail({ params }) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project || !project.items) {
    return <p style={{ textAlign: "center" }}>Project not found</p>;
  }

  return (
    <section className="project-detail">
      {/* Cover */}
      <div className="project-cover">
        <img
          src={`/assets/images/projects/${project.cover}.png`}
         
        />
      </div>

      {/* Slides */}
      <div className="project-slides">
        {project.items.map((item, index) => (
          <div className="project-slide" key={index}>
            <img
              src={`/assets/images/projects/${item.img}.png`}
            
            />
          </div>
        ))}
      </div>
    </section>
  );
}
