import { Link } from "react-router-dom";

export default function SideNav({ icons, active = "" }) {
  return (
    <nav className="hidden md:flex flex-col h-[calc(100vh - 80px)] gap-6">
      <ul className="flex flex-col justify-center gap-5 py-6 rounded-t-full rounded-b-full mx-auto bg-[#1A1E1F]">
        <li>
          <Link to="/home">
            <img
              src={active === "home" || active === "/" ? icons.home_active : icons.home}
              alt="home"
              className="mx-auto"
            />
          </Link>
        </li>
        <li>
          <Link to="/collection">
            <img
              src={
                active === "collection" ? icons.playlist_active : icons.playlist
              }
              alt="playlist"
              className="mx-auto"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={icons.radio} alt="radio" className="mx-auto" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={icons.videos} alt="videos" className="mx-auto" />
          </Link>
        </li>
      </ul>
      <ul className="w-3/5 flex flex-col gap-3 py-6 rounded-t-full rounded-b-full mx-auto bg-[#1A1E1F]">
        <li>
          <Link to="#">
            <img src={icons.profile} alt="profile" className="mx-auto" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={icons.logout} alt="logout" className="mx-auto" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
