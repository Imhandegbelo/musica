import { Link } from "react-router-dom";
import logo from "../assets/nav/logo.svg";

export default function MobileNav({ links, onNavClose }) {
  return (
    <nav className="fixed w-full top-0 left-0 bg-[#1A1E1F] h-screen z-50 px-6 pt-4">
      <div className="flex justify-between mb-4">
        <Link to={"/home"}>
          <img src={logo} alt="logo" className="md:mx-auto h-10" />
        </Link>
        <button
          className="rounded border border-transparent hover:border-white/50 focus:border-white/50"
          onClick={onNavClose}
        >
          <p className="text-white font-bold text-xl px-3">X</p>
        </button>
      </div>
      <ul className="flex flex-col gap-16">
        {links.map((link) => (
          <li>
            <Link to={link.path} className="flex items-center gap-6">
              <img src={link.icon} alt={link.text} />
              <p className="text-white/50 text-[17px] font-bold hover:text-white focus:text-white">
                {link.text}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
