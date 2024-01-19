import logo from "../assets/nav/logo.svg";
import MusicPlayer from "../components/MusicPlayer";
import menu from "../assets/menu.svg";
import { useState } from "react";
import MobileNav from "../components/mobileNav";
import SideNav from "../components/SideNav";
import { icons } from "../data/nav_logo";
import { charts } from "../data/charts";
import { useLocation } from "react-router";
import add_collection from "../assets/singlePlayer/add-collection.svg";
import play_secondary from "../assets/singlePlayer/play_secondary.svg";
import heart_red from "../assets/singlePlayer/heart_red.svg";

export default function SingleAlbum() {
  const location = useLocation();
  const { id } = location.state;
  const [menuOpen, setMenuOpen] = useState(false);
  const ACTUAL_ID = id - 1;

  const links = [
    { icon: icons.home, text: "Home" },
    { icon: icons.playlist, text: "My collections" },
    { icon: icons.radio, text: "Radio" },
    { icon: icons.videos, text: "Music videos" },
    { icon: icons.profile, text: "Profile" },
    { icon: icons.logout, text: "Logout" },
  ];

  return (
    <main>
      {console.log(charts[charts.length - 1])}
      {console.log(id - 1)}
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
        <div className="w-full px-6 md:px-9 mb-32 border">
          <div className="flex gap-10">
            <div>
              <img src={charts[ACTUAL_ID].banner} alt={`${charts[ACTUAL_ID].name}`} className="w-72 h-72 rounded-[35px]" />
            </div>
            <div className="text-white">
              <h3 className="text-4xl text-[#A4C7C6] font-bold">
                {charts[ACTUAL_ID].name}
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                eius et minus at quos veniam!
              </p>
              <p className="text-sm">64 songs ~16 hrs+</p>
              <div className="flex gap-2.5">
                <button
                  className="flex items-center p-[10px] text-xs"
                  onClick={() => console.log("Playing all")}
                  title="Play all"
                >
                  <img src={play_secondary} alt="" />
                  Play all
                </button>
                <button
                  className="flex items-center p-[10px] text-xs backdrop-blur"
                  onClick={() => console.log("Added to collection")}
                  title="Add to your collection"
                >
                  <img src={add_collection} alt="" />
                  Add to collection
                </button>
                <button
                  className="flex items-center p-[10px] text-xs"
                  onClick={() => console.log("Liked")}
                  title="Like chart"
                >
                  <img src={heart_red} alt="" /> {"Like"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <MusicPlayer />
      </div>
    </main>
  );
}
