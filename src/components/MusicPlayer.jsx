import thumb_player from "../assets/musicPlayer/thumb_player.png";
import thumb2 from "../assets/newRelease/limits.png";
import speaker from "../assets/musicPlayer/volume-high.svg";
import shuffle from "../assets/musicPlayer/shuffle.svg";
import previous from "../assets/musicPlayer/previous.svg";
import next from "../assets/musicPlayer/next.svg";
import play from "../assets/musicPlayer/vector.svg";
import repeat from "../assets/musicPlayer/repeat.svg";

export default function MusicPlayer() {
  const handleNext = () => {
    console.log("Next");
  };
  const handlePrevious = () => {
    console.log("Previous");
  };
  const handlePlay = () => {
    console.log("Play");
  };
  const handleRepeat = () => {
    console.log("Repeat");
  };
  const handleShuffle = () => {
    console.log("Shuffle");
  };

  return (
    <div className="flex justify-between gap-6 items-center h-32 w-full bg-[#1D2123] bg-opacity-60 backdrop-blur-xl absolute bottom-0 px6 md:px-24">
      <div className="flex gap-4 w-1/6">
        <img src={thumb2} alt="thumb_player" className="h-[70px]" />
        <div className="font-bold">
          <h4 className="text-white text-sm">Seasons in</h4>
          <small className="text-white/50 text-[10px]">James</small>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:w-full py-6 justify-between">
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={handleShuffle}
            className="hidden md:block p-1 h-min rounded-full hover:shadow-md hover:shadow-[#FACD66]"
          >
            <img src={shuffle} alt="shuffle" title="shuffle" />
          </button>
          <button
            onClick={handlePrevious}
            className="hidden md:block p-1 h-min rounded-full hover:shadow-md hover:shadow-[#FACD66]"
          >
            <img src={previous} alt="previous" title="previous" />
          </button>
          <button
            onClick={handlePlay}
            className="flex items-center justify-center bg-[#FACD66] w-10 h-10 schadow-md shadow-[#FACD66] rounded-full"
          >
            <img src={play} alt="play" title="play" className="w-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 h-min rounded-full hover:shadow-md hover:shadow-[#FACD66]"
          >
            <img src={next} alt="next" title="next" />
          </button>
          <button
            onClick={handleRepeat}
            className="hidden md:block p-1 h-min rounded-full hover:shadow-md hover:shadow-[#FACD66]"
          >
            <img src={repeat} alt="repeat" title="repeat" />
          </button>
        </div>

        {/* Volume control */}
        <div className="hidden md:block w-full h-2 rounded-l-full rounded-r-full bg-white/10">
          <div className="w-[30%] h-2 rounded-l-full rounded-r-full bg-[#FACD66]"></div>
        </div>
      </div>
      <div className="hidden md:flex w-1/6 items-center gap-4">
        <img src={speaker} alt="icon" />
        <div className="w-[160px] h-2 rounded-l-full rounded-r-full bg-white/10">
          <div className="w-[50px] h-2 rounded-l-full rounded-r-full bg-[#FACD66]"></div>
        </div>
      </div>
    </div>
  );
}
