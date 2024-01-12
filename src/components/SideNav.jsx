import { Link } from "react-router-dom";

export default function SideNav({ icons }) {
  return (
    <nav className="hidden md:flex flex-col h-[calc(100vh - 80px)] gap-6">
      <ul className="flex flex-col justify-centcer gap-5 py-6 rounded-t-full rounded-b-full mx-auto bg-[#1A1E1F]">
        <li>
          <Link to="#">
            <img src={icons.home} alt="home" className="mx-auto" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={icons.playlist} alt="playlist" className="mx-auto" />
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
