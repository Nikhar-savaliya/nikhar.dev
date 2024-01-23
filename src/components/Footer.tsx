import { Link } from "react-router-dom";
import { ContactLinks } from "../data";
import scanme from "../assets/scanMe.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 px-4 border-t mt-24">
      <div className="flex max-w-5xl mx-auto items-start justify-around">
        <div className="container max-w-6xl mx-auto flex flex-col items-start justify-center">
          <ul className="flex gap-3 pb-4 ">
            {ContactLinks.map((link) => {
              return (
                <li
                  key={link.link}
                  title={link.text}
                  className="text-zinc-600 hover:text-emerald-600 transition-colors duration-100"
                >
                  <Link
                    to={link.link}
                    aria-label={`Contact Nikhar via ${link.text}`}
                  >
                    <link.icon size={22} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-[10px] text-zinc-500">
            The development work was carried out <br></br>by @nikharsavaliya.
          </p>
        </div>
        <img src={scanme} alt="mailto Nikhar - QR code" className="max-w-20" />
      </div>
    </footer>
  );
};

export default Footer;
