import SocialButton from "./components/social-button";

function App() {
  return (
    <div>
      <div className="socials-container">
        <SocialButton
          url="https://github.com/jonschenk"
          icon="src/assets/github.png"
        />

        <SocialButton
          url="https://www.linkedin.com/in/jonschenkjr/"
          icon="src/assets/linkedin.png"
        />
      </div>
    </div>
  );
}

export default App;
