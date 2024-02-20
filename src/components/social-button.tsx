interface Props {
  url: string;
  icon: string;
}

const SocialButton: React.FC<Props> = ({ url, icon }) => {
  return (
    <a className="btn btn-primary" href={url} role="button">
      <i className={icon}></i>
    </a>
  );
};

export default SocialButton;
