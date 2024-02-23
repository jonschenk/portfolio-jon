import "./MyFavoriteTools.css";

function MyFavoriteTools() {
  return (
    <>
      <div className="tool-text-container">
        <h1>Here's some of my favorite tools:</h1>
      </div>
      <div className="grid text-center">
        <div className="img-container">
          <img
            src="src/assets/tools/react.svg"
            alt="React"
            width="50"
            height="50"
          />
          <img
            src="src/assets/tools/HTML5_Badge.svg"
            alt="React"
            width="50"
            height="50"
          />
        </div>
      </div>
    </>
  );
}

export default MyFavoriteTools;
