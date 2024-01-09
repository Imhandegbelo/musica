import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Charts from "../components/Charts";
import Hero from "../components/Hero";
import logout from "../assets/logout.svg";
import profile from "../assets/profile.svg";
import playlist from "../assets/playlist.svg";
import radio from "../assets/radio.svg";
import videos from "../assets/videos.svg";
import home from "../assets/home.svg";
import NewRelease from "../components/NewRelease";

export default function Home() {
  return (
    <main className="flex w-full max-w-[1440px] bg-[#1D2123] font-Quicksand">
      <div className="flex w-full">
        {/* sidenav */}
        <nav className="h-screen flex flex-col gap-6 w-24 pt-6">
          <img src={logo} alt="logo" className="mx-auto" />
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
        <div className="w-full pr-20">
          <header className="flex justify-center w-full mb-6">
            <input
              type="search"
              className="text-white/50 py-2 px-8 w-11/12 mx-auto bg-search bg-left bg-no-repeat mt-4 bg-transparent focus:outline-none focus:border-b-px"
              placeholder="Search"
            />
          </header>
          <div className="flex gap-4 w-full">
            <Hero />
            <Charts />
          </div>
          <NewRelease />
        </div>
      </div>
    </main>
  );
}
