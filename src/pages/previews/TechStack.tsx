import { techStack } from "../../data";
import TechIcon from "../../components/ui/TechIcon";

const TechStack = () => {
  const { frontEnd, backEnd, other } = techStack;

  return (
    <section className="max-w-6xl mx-auto mt-16 p-6 ">
      <p className="font-serif text-2xl md:text-3xl px-3 py-10  md:max-w-full text-left md:text-center ">
        ⚒️ Tools and Technologies I work with
      </p>

      <div className="max-w-4xl mx-auto ">
        <p className="text-xl font-serif mt-10 mb-4">
          🥇 Frontend Web Development
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:max-w-4xl mx-auto px-4 gap-6 overflow-hidden">
          {frontEnd.map((lang: string, index: number) => {
            return <TechIcon name={lang} key={index} />;
          })}
        </div>

        <p className="text-xl font-serif mt-10 mb-4">
          🥈 Backend Web Development
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:max-w-4xl mx-auto px-4 gap-6 overflow-hidden">
          {backEnd.map((lang: string, index: number) => {
            return <TechIcon name={lang} key={index} />;
          })}
        </div>

        <p className="text-xl font-serif mt-10 mb-4">
          🥉 Other Tools & Languages
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:max-w-4xl mx-auto px-4 gap-6 overflow-hidden">
          {other.map((lang: string, index: number) => {
            return <TechIcon name={lang} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
