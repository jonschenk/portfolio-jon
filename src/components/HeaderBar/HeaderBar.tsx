import SocialButton from "../social-button/social-button";
import "./HeaderBar.css";

function HeaderBar() {
  return (
    <>
      <div className="header-container">
        <div className="button-container">
          <div className="github-button">
            <SocialButton
              url="https://www.github.com/jonschenk"
              icon="src/assets/social-icons/github.png"
            />
          </div>
          <div className="linkedin-button">
            <SocialButton
              url="https://www.linkedin.com/in/jonschenkjr/"
              icon="src/assets/social-icons/linkedin.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
