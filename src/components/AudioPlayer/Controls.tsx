type ControlsProps = {
  onPlayClick: () => void;
  isPlaying: boolean;
};

const Controls = ({ onPlayClick, isPlaying }: ControlsProps) => {
  function onClick() {
    //not needed remove later
  }
  return (
    <div className="flex flex-row mt-4">
      <ImageButton
        src={"src/assets/audio-player-icons/ic_shuffle.svg"}
        onClick={onClick}
      />
      <ImageButton
        src={"src/assets/audio-player-icons/ic_prev.svg"}
        onClick={onClick}
      />
      <ImageButton
        className="mr-2 ml-2"
        src={
          isPlaying
            ? "src/assets/audio-player-icons/ic_pause.svg"
            : "src/assets/audio-player-icons/ic_play.svg"
        }
        onClick={onPlayClick}
      />
      <ImageButton
        src={"src/assets/audio-player-icons/ic_next.svg"}
        onClick={onClick}
      />
      <ImageButton
        src={"src/assets/audio-player-icons/ic_repeat.svg"}
        onClick={onClick}
      />
    </div>
  );
};

export default Controls;

type ImageButtonProps = {
  src: string;
  onClick: () => void;
  className?: string;
};

const ImageButton = ({ onClick, src, className }: ImageButtonProps) => {
  const buttonSize = 65;
  return (
    <button onClick={onClick}>
      <img
        src={src}
        width={buttonSize}
        height={buttonSize}
        className={`drop-shadow-lg ${className ?? ""}`}
      />
    </button>
  );
};
