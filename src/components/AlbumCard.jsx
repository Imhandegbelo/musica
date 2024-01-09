export default function AlbumCard({ album }) {
  return (
    <div className="flex flex-col gap-2">
      <img src={album.thumb} alt={album.title} className="" />
      <div className="text-white/50 text-xs">
        <p>{album.title}</p>
        <p>{album.artist}</p>
      </div>
    </div>
  );
}
