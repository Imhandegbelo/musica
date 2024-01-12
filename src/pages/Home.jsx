import { Link } from "react-router-dom";
import logo from "../assets/nav/logo.svg";
import Charts from "../components/Charts";
import Hero from "../components/Hero";
import NewRelease from "../components/NewRelease";
import MusicPlayer from "../components/MusicPlayer";
import menu from "../assets/menu.svg";
import { useState } from "react";
import MobileNav from "../components/mobileNav";
import SideNav from "../components/SideNav";
import { icons } from "../data/nav_logo";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { icon: icons.home, text: "Home" },
    { icon: icons.playlist, text: "My collections" },
    { icon: icons.radio, text: "Radio" },
    { icon: icons.videos, text: "Music videos" },
    { icon: icons.profile, text: "Profile" },
    { icon: icons.logout, text: "Logout" },
  ];

  return (
    <main className="w-full w-[1440px] mx-auto bg-[#1D2123] font-Quicksand relative">
      <header className="flex h-20 justify-between md:justify-center items-center w-full mb-6 px-6">
        <img src={logo} alt="logo" className="md:mx-auto h-10" />
        <input
          type="search"
          className="hidden md:block text-white/50 py-2 px-8 w-11/12 mx-auto bg-search bg-left bg-no-repeat mt-4 bg-stone-900 rounded-l-full rounded-r-full focus:outline-none focus:border-b-px"
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
      <div className="flex w-fulln relative">
        {/* sidenav */}
        <div className="w-full">
          <SideNav icons={icons} />
        </div>

        {/* content */}
        <div className="w-full lg:pr-20n px-6 md:px-9 mb-32">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="md:w-8/12">
              <Hero />
            </div>
            <div className="md:w-4/12">
              <Charts />
            </div>
          </div>
          <div className="w-full">
            <NewRelease />
          </div>
        </div>

        <MusicPlayer />
      </div>
    </main>
  );
}
