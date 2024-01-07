import { Link } from "react-router-dom";
import { ContactLinks } from "../data";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 px-4 border-t mt-24">
      <div className="container max-w-6xl mx-auto flex flex-col items-start justify-center">
        <ul className="flex gap-3 pb-4 ">
          {ContactLinks.map((link) => {
            return (
              <li
                key={link.link}
                title={link.text}
                className="text-zinc-600 hover:text-zinc-950 transition-colors duration-100"
              >
                <Link
                  to={link.link}
                  aria-label={`Conract Nikhar via ${link.text}`}
                >
                  <link.icon size={18} />
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="text-xs text-zinc-500">
          Developed By @nikharsavaliya <br /> ©2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
