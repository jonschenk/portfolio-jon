import "./Controls.css";

type ControlsProps = {
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onRepeatClick: () => void;
  onShuffleClick: () => void;
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
};

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}: ControlsProps) => {
  return (
    <div className="Buttons">
      <ImageButton
        src={
          shuffle
            ? "src/assets/audio-player-icons/shuffle-active.svg"
            : "src/assets/audio-player-icons/shuffle-deactivated.svg"
        }
        onClick={onShuffleClick}
      />
      <ImageButton
        src={"src/assets/audio-player-icons/skip-back.svg"}
        onClick={onPrevClick}
      />
      <ImageButton
        className="mr-2 ml-2"
        src={
          isPlaying
            ? "src/assets/audio-player-icons/pause.svg"
            : "src/assets/audio-player-icons/play.svg"
        }
        onClick={onPlayClick}
      />
      <ImageButton
        src={"src/assets/audio-player-icons/skip-forward.svg"}
        onClick={onNextClick}
      />
      <ImageButton
        src={
          repeat
            ? "src/assets/audio-player-icons/loop-active.svg"
            : "src/assets/audio-player-icons/loop-deactivated.svg"
        }
        onClick={onRepeatClick}
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
