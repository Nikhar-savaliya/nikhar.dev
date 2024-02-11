import svgs from "../../assets/svgs";

import TechIcon from "../../components/ui/TechIcon";

const TechStack = () => {
  return (
    <section className="max-w-6xl mx-auto mt-16 p-6 ">
      <p className="font-serif text-2xl md:text-3xl px-3 py-10  md:max-w-full text-left md:text-center ">
        Tools and Technologies I know
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:max-w-3xl gap-4 mx-auto overflow-hidden">
        {svgs.map((svg) => {
          return <TechIcon img={svg.logo} name={svg.name} />;
        })}
      </div>
    </section>
  );
};

export default TechStack;
