import { CircleUserRound, Mail } from "lucide-react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <main className="container flex flex-col items-center text-center max-w-md mx-auto">
        <h1 className="text-4xl font-semibold text-zinc-900 md:text-5xl pt-[100px] px-2 md:px-0 font-serif ">
          Hey, I am Nikhar Savaliya
        </h1>
        <p className="pt-4 text-zinc-500 text-xs md:text-md ">
          I am a software Developer and Designer from India.
          <br />
          trying to solve problems for greater good.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link to="mailto:nikhar663@gmail.com" target="_blank">
            <Button variant="default">
              <Mail size={18} />
              Contact me
            </Button>
          </Link>
          <Link to="/about-me" className="">
            <Button variant="outline">
              <CircleUserRound size={18} />
              About me
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
