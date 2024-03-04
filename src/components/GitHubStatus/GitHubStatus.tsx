import { useState, useEffect } from "react";
import "./GitHubStatus.css";
import { Reveal } from "../Reveal";

function GitHubStatus() {
  const [gitHubStatus, setGitHubStatus] = useState<{
    repoName: string;
    createdAt: string;
    link: string;
  }>({ repoName: "", createdAt: "", link: "" });
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jonschenk/events")
      .then((response) => response.json())
      .then((res) => {
        const lastEvent = res[0];
        if (lastEvent.repo.name === "jonschenk/portfolio-jon") {
          setGitHubStatus({
            repoName: "The portfolio site you are looking at now!",
            createdAt: new Date(lastEvent.created_at).toLocaleDateString(),
            link: "https://github.com/jonschenk/portfolio-jon",
          });
        } else {
          setGitHubStatus({
            repoName: lastEvent.repo.name,
            createdAt: new Date(lastEvent.created_at).toLocaleDateString(),
            link: "https://github.com/" + lastEvent.repo.name,
          });
        }
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <div className="git-status">
        <Reveal>
          <div className="reveal-container">
            <h1>I was last seen (publicly) working on:</h1>
            <a
              href={gitHubStatus.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {gitHubStatus.repoName}
            </a>
            <p>on {gitHubStatus.createdAt}</p>
            <div className="github">
              <h2>
                You can check out my GitHub page{" "}
                <a
                  id="gh"
                  href="https://www.github.com/jonschenk"
                  target="_blank"
                >
                  here
                </a>
              </h2>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}

export default GitHubStatus;
