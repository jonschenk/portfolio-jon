import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div className="input-container">
      <input
        type="range"
        min="1"
        max="100"
        value={50}
        step="0.25"
        className="slider"
      />
      <div className="timestamps-container">
        <span className="time">01:00</span>
        <span className="time">02:00</span>
      </div>
    </div>
  );
};

export default ProgressBar;
