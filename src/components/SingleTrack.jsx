import more from "../assets/singleTrack/more.svg";
import heart_w from "../assets/singleTrack/heart_w.svg";

export default function SingleTrack({ track }) {
  return (
    <div className="bg-white/5 p-3 flex text-center gap-4 md:gap-14 items-center rounded-2xl">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <img src={track.thumb} alt="" className="w-[40px] h-[40px] rounded" />
        <button
          onClick={() => console.log("Track liked!")}
          className="hidden md:block h-10 w-10"
        >
          <img src={heart_w} alt="" className="" />
        </button>
      </div>
      {/* sm screens */}
      <div className="w-full flex flex-col  md:hidden">
        <div className="flex items-center justify-between">
          <p className="text-xs">
            {track.title} ~ {track.artist}
          </p>
          <button
            onClick={() => console.log("More clicked")}
            className="px-3 py-2 border border-transparent rounded-full hover:border-[#facd66]"
          >
            <img src={more} alt="" className="" />
          </button>
        </div>
        <div className="flex justify-between pr-2">
          <p className="text-[10px]">{track.type}</p>
          <p className="text-xs">{track.time}</p>
        </div>
      </div>

      {/* bigger screens */}
      <div className="hidden md:flex w-full justify-between">
        <p className="w-2/6 text-left">
          <span>{track.title}</span> ~ <span>{track.artist}</span>
        </p>
        <div className="text-center ">
          <p>{track.type}</p>
        </div>
        <p className="w-2/6">{track.time}</p>
      </div>
      <button
        onClick={() => console.log("More clicked")}
        className="hidden md:block px-3 py-2 border border-transparent rounded-full hover:border-[#facd66]"
      >
        <img src={more} alt="" className="" />
      </button>
    </div>
  );
}
