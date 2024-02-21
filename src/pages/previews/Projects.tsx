import Project from "../../components/ui/Project";
import { projects } from "../../data";

const Projects = () => {
  let size: number = 1;
  return (
    <>
      <p className="text-center text-3xl font-serif mt-24">
        🦖 Freatured Projects I have Build
      </p>
      <ul className="p-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-6">
        {projects.map((proj) => {
          if (size <= 2) {
            size++;
            return (
              <Project
                icon={proj.img}
                projectName={proj.projectName}
                projectLink={proj.projectLink}
                projectDescription={proj.projectDetail}
                techStack={proj.techStack}
                repository={proj.repository}
                key={proj.projectLink}
              />
            );
          } else return "";
        })}
      </ul>
    </>
  );
};

export default Projects;
