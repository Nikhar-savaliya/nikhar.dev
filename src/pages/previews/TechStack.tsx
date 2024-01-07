import svgs from "../../assets/svgs";

import TechIcon from "../../components/ui/TechIcon";

const TechStack = () => {
  return (
    <section className="max-w-6xl mx-auto mt-16 p-6 ">
      <p className="font-serif text-2xl md:text-3xl px-3 py-10  md:max-w-full text-left md:text-center ">
        Tools and Technologies I know
      </p>
      <div className="grid grid-cols-3 lg:max-w-3xl gap-4 mx-auto overflow-hidden">
        <TechIcon img={svgs.html} name="HTML" />
        <TechIcon img={svgs.css} name="CSS" />
        <TechIcon img={svgs.javaScript} name="JavaScript" />
        <TechIcon img={svgs.react} name="React.js" />
        <TechIcon img={svgs.next} name="Next.js" />
        <TechIcon img={svgs.typeScript} name="TypeScript" />
        <TechIcon img={svgs.tailwind} name="Tailwind css" />
      </div>
    </section>
  );
};

export default TechStack;
