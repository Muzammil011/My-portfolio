import React from "react";
import { FaPython, FaJsSquare, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiPostman, SiJenkins } from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md"; 
import "./Skills.css";

const skills = {
  Languages: [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Python", icon: <FaPython /> },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Locust", icon: "🦂" }, 
    { name: "Playwright", icon: "🎭" }, 
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "REST API Testing", icon: <SiPostman /> },
    { name: "CI/CD", icon: <MdOutlineIntegrationInstructions /> },
    { name: "GitHub Actions", icon: "⚙️" }, 
    { name: "Jenkins", icon: <SiJenkins /> },
  ],
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skills-grid">
            {items.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
