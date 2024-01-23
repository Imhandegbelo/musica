import DefaultLayout from "../Layout/DefaultLayout";
import Button from "../components/Button";
import { collections } from "../data/collection";
import play from "../assets/collection/play.svg";

export default function Collection() {
  return (
    <DefaultLayout>
      <div className="px-6 md:pr-10">
        <div className="flex gap-4 w-full md:w-[300px] mb-[4rem]">
          <Button
            text="My collection"
            primary={false}
            onclick={() => console.log("My collection")}
          />
          <Button
            text="Likes"
            primary={true}
            onclick={() => console.log("Likes")}
          />
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {collections.map((collection) => (
            <div key={collection.title} className="relative rounded-[20px] w-full md:w-60">
              <img
                src={collection.thumb}
                alt=""
                className=" rounded-[20px] w-full md:h-full"
              />
              <div className="flex justify-between w-full px-6 absolute bottom-0 left-0 rounded-[20px]">
                <div className="text-white/75">
                  <p className="text-2xl leading-[5px]">{collection.title}</p>
                  <small className="text-[12px]">{collection.artist}</small>
                  <p className="md:hidden mb-4 mt-2">{collection.view_count} Likes</p>
                </div>
                <button className="md:hidden p-2 hover:bg-[#FACD66]/5">
                  <img src={play} alt="" className="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
