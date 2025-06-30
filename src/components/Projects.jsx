import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="project-card white-bg">
        <h3 className="project-title">Developer Portfolio</h3>
        <p className="project-description">
          A single-page portfolio for my SDET learning journey, projects and tools used.
        </p>
        <p className="project-tools">
          <strong>Tools:</strong> React, Vite, CSS Modules, Git & GitHub
        </p>
        <a
          href="https://github.com/Muzammil011/My-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub className="github-icon" />
          View Code
        </a>
      </div>

      <div className="project-card black-bg">
        <h3 className="project-title">SDET Test Automation Suite</h3>
        <p className="project-description">
          Hands-on suite covering UI, API, and performance testing using AmberStudent’s platform, with CI/CD integration.
        </p>
        <p className="project-tools">
          <strong>Tools:</strong> Playwright, Locust, GitHub Actions, Reqres API, Git & GitHub
        </p>
        <a
          href="https://github.com/Muzammil011/amber-sdet-project"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub className="github-icon" />
          View Code
        </a>
      </div>
    </section>
  );
};

export default Projects;
