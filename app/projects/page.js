'use client';
import { projects } from '@/data/projects'; // ✅ import only

export default function ProjectsPage() {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.slug}>
          <h2>{project.company}</h2>
          <div className="slides">
            {project.items.map((item, index) => (
              <img key={index} src={`/images/${item.img}`} alt={item.name || `Slide ${index+1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
