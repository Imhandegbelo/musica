import heart_outline from "../assets/charts/heart-outline.svg";
import { Link } from "react-router-dom";

export default function ChartInfo({chart}) {
    return (
        <div className="flex justify-between bg-[#1A1E1F] rounded-[20px] p-4 border border-transparent hover:border-white/50">
          <div className="flex gap-4">
            <img src={chart.thumb} alt="" />
            <div className="">
              <Link to="#" className="text-[17px] text-white">{chart.name}</Link>
              <p className="text-xs text-white/50">{chart.artist}</p>
              <p className="text-xs text-white">{chart.time}</p>
            </div>
          </div>
          <img
            src={heart_outline}
            alt=""
            className="p-2 border-px rounded-full"
          />
        </div>
    )
}
