import { Link } from "react-router-dom";

interface articleData {
  title: string;
  link: string;
  description: string;
  time: string;
}

const Article = ({ title, link, description, time }: articleData) => {
  return (
    <div className=" p-3 m-3 my-4 px-4 max-w-5xl border border-zinc-300 rounded-lg bg-zinc-100 mx-auto">
      <div className="px-2">
        <div className="flex flex-row items-center gap-2">
          <Link
            to={link}
            target="_black"
            className="flex gap-1 items-center hover:underline"
          >
            <p className="my-2 font-serif text-lg pb-2">{title}</p>
          </Link>
        </div>
        <p className="text-[10px] text-emerald-700 pb-1">{`${time} minutes read`}</p>
        <p className="text-xs text-zinc-700 line-clamp-2 md:line-clamp-1">{description}</p>
      </div>
    </div>
  );
};

export default Article;
