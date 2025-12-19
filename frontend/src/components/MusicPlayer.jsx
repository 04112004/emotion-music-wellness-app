function MusicPlayer({ videoId }) {
  if (!videoId) return null;

  return (
    <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Music Recommendation"
        allowFullScreen
      />
    </div>
  );
}

export default MusicPlayer;


