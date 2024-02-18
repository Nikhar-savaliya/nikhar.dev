import { techStack } from "../../data";
import TechIcon from "../../components/ui/TechIcon";

const TechStack = () => {
  const { webTechnologies } = techStack;
  return (
    <section className="max-w-6xl mx-auto mt-16 p-6 ">
      <p className="font-serif text-2xl md:text-3xl px-3 py-10  md:max-w-full text-left md:text-center ">
        ⚒️ Tools and Technologies I work with
      </p>

      <div>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:max-w-4xl mx-auto px-4 gap-4 overflow-hidden">
          {webTechnologies.map((tech, index) => {
            return <TechIcon name={tech} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
