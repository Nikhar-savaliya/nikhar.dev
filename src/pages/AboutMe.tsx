import Nikhar from "../assets/Nikhar.png";
import scetLogo from "../assets/scet-logo.png";

const about = () => {
  return (
    <section className="max-w-6xl mx-auto my-12 px-5 py-6">
      <div className="container flex gap-10 flex-col md:flex-row items-center md:items-end ">
        <img
          src={Nikhar}
          alt="userPhoto"
          className="overflow-hidden object-contain aspect-square center max-w-[200px] md:max-w-48  rounded-3xl"
        />
        <div>
          <div className=" flex flex-col gap-1 ">
            <p className="text-3xl font-serif mb-4">Who am I?</p>
            <p className="text-sm max-w-md text-zinc-600">
              👋🏼, I am Nikhar, a front-end web-developer and designer from
              India. I am looking for freelance or full-time opportunity in the
              dev world. I am dedicated to developing good interatctive products
              with my skills.
            </p>
            <p className="text-sm max-w-md text-zinc-600">
              I'm willing to contribute my expertise to your next project. Open
              to transform your ideas into a reality that exceeds your online
              objectives.
            </p>
          </div>
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

export default about;
