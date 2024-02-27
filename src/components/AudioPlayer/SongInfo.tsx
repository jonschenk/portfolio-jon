import "./SongInfo.css";

type SongInfoProps = {
  title?: string;
};

const SongInfo = ({ title }: SongInfoProps) => {
  return (
    <div className="song-info">
      <span className="title">{title}</span>
    </div>
  );
};

export default SongInfo;
