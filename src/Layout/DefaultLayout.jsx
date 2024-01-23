import { useState } from "react";
import logo from "../assets/nav/logo.svg";
import menu from "../assets/menu.svg";
import SideNav from "../components/SideNav";
import { icons } from "../data/nav_logo";
import MobileNav from "../components/mobileNav";
import MusicPlayer from "../components/MusicPlayer";
import { useLocation } from "react-router";

export default function DefaultLayout({ children }) {
  const location = useLocation();
  const active = location.pathname === "/" ? "/" : location.pathname.slice(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { icon: icons.home, text: "Home", path: "/home" },
    { icon: icons.playlist, text: "My collections", path: "/collection" },
    { icon: icons.radio, text: "Radio", path: "#" },
    { icon: icons.videos, text: "Music videos", path: "#" },
    { icon: icons.profile, text: "Profile", path: "#" },
    { icon: icons.logout, text: "Logout", path: "#" },
  ];
  return (
    <div className="relative font-Quicksand">
      <header className="flex h-20 justify-between md:justify-center items-center w-full mb-6 px-6">
        <img src={logo} alt="logo" className="md:mx-auto h-10" />
        <input
          type="search"
          className="hidden md:block text-white/50 py-2 pl-14 w-11/12 mx-auto bg-search bg-[center_left_1rem] bg-no-repeat bg-stone-900 mt-4 rounded-l-full rounded-r-full focus:outline-none focus:border-b-px"
          placeholder="Search"
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded border border-transparent hover:border-white/50 focus:border-white/50"
        >
          {menuOpen ? (
            <p className="text-white font-bold text-xl px-2">X</p>
          ) : (
            <img src={menu} alt="menu" title="menu" className="h-8" />
          )}
        </button>
        {menuOpen && <MobileNav links={links} />}
      </header>
      <div className="flex md:mr-10 relative">
        <div className="hidden md:block md:w-1/12">
          <SideNav icons={icons} active={active} />
        </div>
        <main className="w-full md:w-11/12">{children}</main>
      </div>
      <MusicPlayer classname={location === "collection" ? "hidden" : ""} />
    </div>
  );
}
