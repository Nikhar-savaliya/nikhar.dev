import Project from "../components/ui/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <>
      <p className="text-center text-2xl font-serif mt-20 mb-8">
        {" "}
        ⚒️ I now present to you a comprehensive list of all that I have
        constructed
      </p>
      <ul className="px-6 max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <Project
            icon={proj.img}
            projectName={proj.projectName}
            projectLink={proj.projectLink}
            projectDescription={proj.projectDetail}
            techStack={proj.techStack}
            repository={proj.repository}
            key={proj.projectLink}
          />
        ))}
      </ul>
    </>
  );
};

export default Projects;
