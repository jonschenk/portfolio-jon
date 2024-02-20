interface Props {
  url: string;
  icon: string;
}

const SocialButton: React.FC<Props> = ({ url, icon }) => {
  return (
    <a href={url} className="btn btn-link no-border">
      <img
        src={icon}
        alt="icon"
        style={{ width: "40px", marginRight: "5px" }}
      />
    </a>
  );
};

export default SocialButton;
