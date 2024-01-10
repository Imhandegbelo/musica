export default function AlbumCard({ album }) {
  return (
    <div className="flexx flex-col gap-2 w-[9.7rem]">
      <img src={album.thumb} alt={album.title} className="min-w-[9.7rem] h-auto rounded-[25px]" />
      <div className="text-white/50 text-xs">
        <p>{album.title}</p>
        <p>{album.artist}</p>
      </div>
    </div>
  );
}
