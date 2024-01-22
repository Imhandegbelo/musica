import { track_data } from "../data/tracks";
import { charts } from "../data/charts";
import { useLocation } from "react-router";
import add_collection from "../assets/singleTrack/add-collection.svg";
import play_secondary from "../assets/singleTrack/play_secondary.svg";
import heart_red from "../assets/singleTrack/heart_red.svg";
import DefaultLayout from "../Layout/DefaultLayout";
import SingleTrack from "../components/SingleTrack";

export default function SingleAlbum() {
  const location = useLocation();
  const { id } = location.state;
  const ACTUAL_ID = id - 1;

  return (
    <DefaultLayout>
      <div className="w-full px-6 md:px-0 mb-32">
        <div className="flex flex-col md:flex-row gap-10 mb-14">
          <div>
            <img
              src={charts[ACTUAL_ID].banner}
              alt={`${charts[ACTUAL_ID].name}`}
              className="w-full md:w-72 md:h-72 rounded-[35px]"
            />
          </div>
          <div className="flex flex-col gap-2 text-white md:w-2/5 self-end">
            <h3 className="text-4xl text-[#A4C7C6] font-bold">
              {charts[ACTUAL_ID].name}
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus accusantium excepturi ut quos dignissimos porro aliquid
              voluptates, veniam quisquam nostrum sed sint!
            </p>
            <p className="text-sm">64 songs ~16 hrs+</p>
            <div className="flex mt-3 gap-2.5">
              <button
                className="flex items-center gap-1 py-[10px] px-[12px] text-[10px] md:text-xs bg-white/5 rounded-full"
                onClick={() => console.log("Playing all")}
                title="Play all"
              >
                <img src={play_secondary} alt="" />
                Play all
              </button>
              <button
                className="flex items-center gap-1 py-[10px] px-[12px] text-[10px] md:text-xs bg-white/5 rounded-full"
                onClick={() => console.log("Added to collection")}
                title="Add to your collection"
              >
                <img src={add_collection} alt="" />
                Add to collection
              </button>
              <button
                className="flex items-center gap-1 py-[10px] px-[12px] text-[10px] md:text-xs bg-white/5 rounded-full"
                onClick={() => console.log("Liked")}
                title="Like chart"
              >
                <img src={heart_red} alt="" /> <span>Like</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-white">
          {track_data.map((track, index) => (
            <div className="w-full">
              <SingleTrack track={track} key={`track-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
