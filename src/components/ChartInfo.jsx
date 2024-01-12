import { useState } from "react";
import heart_outline from "../assets/charts/heart-outline.svg";
import { Link } from "react-router-dom";

export default function ChartInfo({ chart }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex w-[300px] justify-between md:w-full md:justify-between bg-[#1A1E1F] rounded-[20px] p-4 border border-transparent hover:border-white/50">
      <div className="flex flex-col md:flex-row w-[200px] md:w-full gap-4">
        <img src={chart.thumb} alt="" className="w-[120px] md:w-[75px]" />
        <div className="">
          <Link to={`/chart/${chart.id}`} className="text-[17px] text-white">
            {chart.name}
          </Link>
          <p className="text-xs text-white/50">{chart.artist}</p>
          <p className="text-sm text-white mt-4 md:mt-0">{chart.time}</p>
        </div>
      </div>
      {/* <div className="w-16"> */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`border py-[6px] px-2 border-white/50 rounded-full ${
          isLiked ? "bg-[#FACD66]" : ""
        } h-min hover:border-[#FACD66] focus:border-[#FACD66]`}
      >
        <img src={heart_outline} alt="" className="w-6 h-6" />
      </button>
      {/* </div> */}
    </div>
  );
}
