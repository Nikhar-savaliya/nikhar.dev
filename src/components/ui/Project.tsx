import { ArrowUpRight, LucideIcon } from "lucide-react";
import Badge from "./Badge";

interface cardData {
  icon: LucideIcon;
  projectName: string;
  projectLink: string;
  projectDescription: string;
  techStack: Array<string>;
}

const project = (props: cardData) => {
  return (
    <li className="w-full border rounded-xl flex flex-col bg-zinc-100 border-zinc-300">
      <div className="flex items-center gap-3 p-3 border-b border-zinc-300">
        <props.icon />
        <div className="flex flex-col">
          <a
            href={props.projectLink}
            className="text-xs hover:underline"
            target="_blank"
          >
            <p className="text-sm font-medium text-zinc-900 ">
              {props.projectName}
            </p>
          </a>
        </div>
      </div>

      <div className="flex-grow p-3 text-xs">
        <p className="p-1 text-start text-zinc-700">
          {props.projectDescription}
        </p>
        <div className="flex gap-x-2 gap-y-2 flex-wrap py-4 ">
          {props.techStack.map((item) => (
            <Badge variant="success" key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="p-3 border-t border-zinc-300 flex flex-col justify-end mt-5 text-md text-emerald-800">
        <a
          href={props.projectLink}
          className="flex gap-1 items-center text-sm hover:underline "
        >
          View Code
          <ArrowUpRight size={18} />
        </a>
      </div>
    </li>
  );
};

export default project;
