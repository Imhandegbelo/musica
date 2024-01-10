import { newRelease } from "../data/new_release";
import AlbumCard from "./AlbumCard";

export default function NewRelease() {
  return (
    <div className="mt-10">
      <h3 className="text-white text-2xl font-bold">New Release</h3>
      <div className="flex overflow-x-auto gap-8 no-scrollbar my-2">
        {newRelease.map((album, index) => (
          <AlbumCard key={`album-${index}`} album={album} />
        ))}
      </div>
    </div>
  );
}
