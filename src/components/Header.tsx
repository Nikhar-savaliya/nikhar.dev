import { ContactLinks, NavLinks } from "../data";
import { Link, NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="p-5 sticky top-0 backdrop-blur-2xl antialiased z-50 border-b  ">
      <nav className="flex items-center justify-between container mx-auto max-w-6xl p-1">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex gap-2 items-end opacity-100"
            aria-label="Nikhar S."
          >
            <span className="font-serif relative font-medium text-lg antialiased flex ">
              <span className="z-50 px-2">Nikhar S</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex divide-x items-center gap-1 divide-zinc-600">
            {/* NAV LINKS */}
            <ul className="flex items-center space-x-6 px-4 gap-2 text-zinc-600 text-base">
              {NavLinks.map((link) => {
                return (
                  <li
                    key={link.link}
                    className="flex items-center justify-between cursor-pointer  hover:text-zinc-950 transition-colors duration-100"
                  >
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `flex items-center justify-between gap-[6px] ${
                          isActive &&
                          "text-emerald-800 underline underline-offset-4 decoration-wavy decoration-from-font"
                        }`
                      }
                    >
                      <link.icon size={20} />
                      <p>{link.text}</p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            {/* CONTACT LINKS */}
            <ul className="flex items-center gap-4 pl-5">
              {ContactLinks.map((link) => {
                return (
                  <li
                    key={link.link}
                    className="flex items-center justify-between cursor-pointer  text-zinc-600 hover:text-zinc-950 transition-colors duration-100"
                    title={link.text}
                  >
                    <a
                      href={link.link}
                      className="flex items-center justify-between"
                      aria-label={`Contact Nikhar via ${link.text}`}
                    >
                      <link.icon size={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Menu>
            <Menu.Button>
              <p className="flex flex-row items-center justify-center gap-1 text-sm hover:bg-zinc-200/70 bg-zinc-100  border  p-2 rounded-md">
                <MenuIcon />
              </p>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <ul className="flex flex-col items-start p-4 gap-2 text-zinc-600">
                  {NavLinks.map((link) => {
                    return (
                      <Menu.Item key={link.link}>
                        <li
                          key={link.link}
                          className="flex items-center justify-between cursor-pointer   hover:text-zinc-950 transition-colors duration-100"
                        >
                          <NavLink
                            to={link.link}
                            className={({ isActive }) =>
                              `flex items-center justify-between gap-[6px] ${
                                isActive && "text-emerald-800"
                              }`
                            }
                          >
                            <link.icon size={18} />
                            <p>{link.text}</p>
                          </NavLink>
                        </li>
                      </Menu.Item>
                    );
                  })}
                </ul>
                <ul className="flex items-start p-4 gap-3 text-zinc-600">
                  {ContactLinks.map((link) => {
                    return (
                      <Menu.Item key={link.link}>
                        <li
                          key={link.link}
                          className="flex items-center justify-between cursor-pointer  text-zinc-600 hover:text-zinc-950 transition-colors duration-100"
                          title={link.text}
                        >
                          <a
                            href={link.link}
                            className="flex items-center justify-between"
                            aria-label={`Contact Nikhar via ${link.text}`}
                          >
                            <link.icon size={18} />
                          </a>
                        </li>
                      </Menu.Item>
                    );
                  })}
                </ul>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
