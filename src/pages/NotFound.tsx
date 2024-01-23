import { Ghost } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full pt-32 md:pt-56  flex items-center justify-center">
      <div className="flex flex-col items-center gap-14  p-16  ">
        <p className="flex flex-col items-center text-2xl text-md font-serif">
          <span className="text-emerald-700 text-8xl"> 404 </span>
          Page Not Found
        </p>

        <Link
          to={"/"}
          className="hover:underline text-xs  flex gap-1 text-zinc-600 items-center"
        >
          {" "}
          Go back to
          <Ghost width={12} />
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
