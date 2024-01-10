import { Link } from "react-router-dom";
import logo from "../assets/nav/logo.svg";
import Charts from "../components/Charts";
import Hero from "../components/Hero";
import logout from "../assets/nav/logout.svg";
import profile from "../assets/nav/profile.svg";
import playlist from "../assets/nav/playlist.svg";
import radio from "../assets/nav/radio.svg";
import videos from "../assets/nav/videos.svg";
import home from "../assets/nav/home.svg";
import NewRelease from "../components/NewRelease";
import MusicPlayer from "../components/MusicPlayer";
import menu from "../assets/menu.svg";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="w-full max-w-[1440px] mx-auto bg-[#1D2123] font-Quicksand">
      <header className="flex h-20 justify-between md:justify-center items-center w-full mb-6 px-6">
        <img src={logo} alt="logo" className="md:mx-auto h-10" />
        <input
          type="search"
          className="hidden md:block text-white/50 py-2 px-8 w-11/12 mx-auto bg-search bg-left bg-no-repeat mt-4 bg-stone-900 rounded-l-full rounded-r-full focus:outline-none focus:border-b-px"
          placeholder="Search"
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded border border-transparent hover:border-white/50 focus:border-white/50"
        >
          <img src={menu} alt="menu" title="menu" className="h-8" />
        </button>
      </header>
      <div className="flex w-full relative">
        {/* sidenav */}
        <nav className="hidden md:flex flex-col h-[calc(100vh - 80px)] gap-6 w-24 pt-6">
          <ul className="w-3/5 flex flex-col justify-centcer gap-5 py-6 rounded-t-full rounded-b-full mx-auto bg-[#1A1E1F]">
            <li>
              <Link to="#">
                <img src={home} alt="home" className="mx-auto" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={playlist} alt="playlist" className="mx-auto" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={radio} alt="radio" className="mx-auto" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={videos} alt="videos" className="mx-auto" />
              </Link>
            </li>
          </ul>
          <ul className="w-3/5 flex flex-col gap-3 py-6 rounded-t-full rounded-b-full mx-auto bg-[#1A1E1F]">
            <li>
              <Link to="#">
                <img src={profile} alt="profile" className="mx-auto" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={logout} alt="logout" className="mx-auto" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* content */}
        <div className="w-full pr-20 ">
          <div className="flex gap-4 w-full">
            <Hero />
            <Charts />
          </div>
          <NewRelease />
        </div>
        <MusicPlayer />
      </div>
    </main>
  );
}
