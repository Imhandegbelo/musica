import { Link } from "react-router-dom";

export default function MobileNav({ links }) {
  return (
    <nav className="absolute w-full top-20 bg-[#1A1E1F] h-[90vh] z-50">
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
