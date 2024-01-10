import main_hero from "../assets/hero/main-hero.png";
import ellipse_1 from "../assets/hero/ellipse-1.png";
import ellipse_2 from "../assets/hero/ellipse-2.png";
import ellipse_3 from "../assets/hero/ellipse-3-(1).png";
import ellipse_4 from "../assets/hero/ellipse-4-(1).png";
import ellipse_5 from "../assets/hero/ellipse-5.png";
import heart_white from "../assets/hero/Heart.svg";
import vectorbg from "../assets/hero/vectorbg.svg"

export default function Hero() {
  return (
    <div className="w-8/12 flex justify-between bg-[#609EAF] h-[375px] px-10 rounded-[40px] relative overflow-x-clip">
      <div className="flex flex-col justify-between text-white my-10">
        <p className="">Curated playlist</p>
        <div className="">
          <h1 className="text-[3xl] font-bold order-first">R & B Hits</h1>
          <p className="text-sm">
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
        </div>
        <div className="flex">
          <div className="flex gap-2n relative">
            <img src={ellipse_1} alt="" className="w-10 h-10" />
            <img src={ellipse_2} alt="" className="w-10 h-10 absolute left-4 z-10" />
            <img src={ellipse_3} alt="" className="w-10 h-10 absolute left-8 z-20" />
            <img src={ellipse_4} alt="" className="w-10 h-10 absolute left-12 z-30" />
            <img src={ellipse_5} alt="" className="w-10 h-10 absolute left-16 z-40" />
          </div>
          <div className="flex ml-24 gap-3 w-full items-center">
            <img src={heart_white} alt="" />
            <p className="text-white text-sm">33k Likes</p>
          </div>
        </div>
      </div>
      <img src={main_hero} alt="" className="z-10" />
      <img src={vectorbg} alt="" className=" absolute right-0 top-0" />
    </div>
  );
}
