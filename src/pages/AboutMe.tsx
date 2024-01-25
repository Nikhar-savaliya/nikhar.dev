import Nikhar from "../assets/Nikhar.png";
import scetLogo from "../assets/scet-logo.png";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto my-12 px-5 py-6">
      <p className="text-2xl pb-4 font-serif mb-4 text-center md:text-left">
        👋🏼 Unveiling the Person Behind the Greeting
      </p>
      <div className="container flex gap-10 flex-col md:flex-row items-center md:items-start ">
        <img
          src={Nikhar}
          alt="userPhoto"
          className="overflow-hidden object-contain aspect-square center max-w-[200px] md:max-w-48  rounded-3xl"
        />
        <div>
          <ul className=" flex flex-col gap-1.5 mt-4 leading-tight list-inside list-disc">
            <li className="text-sm max-w-md text-zinc-600">
              I am Nikhar, a highly skilled and experienced web developer and
              designer from India. I am actively seeking freelance or full-time
              opportunities where I can showcase my expertise and contribute to
              the success of a project. I am confident in my ability to create
              exceptional interactive products that exceed expectations.
            </li>
            <li className="text-sm max-w-md text-zinc-600">
              Let's work together to bring your ideas to life and surpass your
              online objectives. I am committed to providing you with
              outstanding results that will leave you completely satisfied.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-2xl font-serif mb-4">
          Academic and professional Experience
        </p>
        <div className="flex items-center  space-x-2 border w-fit pr-12 pl-4  py-2 rounded border-zinc-300 bg-zinc-100">
          <img
            src={scetLogo}
            alt="collage logo"
            className="w-12 bg-white rounded-full"
          />
          <div className="text-sm">
            <p className="font-roca mb-1">B.Tech in Computer Science</p>
            <p className="text-xs text-gray-500">
              sarvajanik collage of engineering and technology
            </p>
            <p className="text-xs text-gray-500">2021-2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
