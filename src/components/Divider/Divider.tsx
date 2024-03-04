import "./Divider.css";

type DividerProps = {
  size?: ("small" | "large") | string;
};

function getDividerSize(size: DividerProps["size"] = "large") {
  if (size === "small") {
    return "divider-small";
  } else {
    return "divider-large";
  }
}

function Divider({ size }: DividerProps) {
  const dividerClass = getDividerSize(size);

  return <hr className={dividerClass} />;
}

export default Divider;
