import { ArrowUpRight, LucideIcon } from "lucide-react";
import Badge from "./Badge";

interface cardData {
  icon: LucideIcon;
  projectName: string;
  projectLink: string;
  repository: string;
  projectDescription: string[];
  techStack: Array<string>;
}

const project = (props: cardData) => {
  return (
    <li className="w-full border rounded-xl flex flex-col bg-zinc-100 border-zinc-300">
      <div className="flex items-center gap-3 p-3 border-b border-zinc-200">
        <props.icon className="text-zinc-800" width={22} />
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
        <ul className="p-1 px-4 text-start text-zinc-700 list-disc">
          {props.projectDescription.map((feature,index) => {
            return <li key={index}>{feature}</li>
          })}
        </ul>
        <div className="flex gap-x-2 gap-y-2 flex-wrap py-4 ">
          {props.techStack.map((item) => (
            <Badge variant="success" key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="p-3 relative border-t border-zinc-200 flex flex-col justify-end mt-5 text-md ">
        <a
          href={props.repository}
          className="flex cursor-pointer items-center gap-[2px] text-zinc-700 text-sm hover:underline pl-1 "
        >
          code
          <ArrowUpRight size={14} className="mt-[2px]" />
        </a>
      </div>
    </li>
  );
};

export default project;
