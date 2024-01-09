import { newRelease } from "../data/new_release";
import AlbumCard from "./AlbumCard";

export default function NewRelease() {
  return (
    <div className="">
      <h3 className="">New Release</h3>
      <div className="flex gap-6 overflow-x-scroll">
        {newRelease.map((album, index) => (
          <AlbumCard key={`album-${index}`} album={album} />
        ))}
      </div>
    </div>
  );
}
