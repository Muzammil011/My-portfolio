import React from "react";
import { FaPython, FaJsSquare, FaGithub, FaGitAlt, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiPostman, SiGraphql, SiMongodb } from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import "./Skills.css";

const skills = {
  Languages: [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  Frontend: [
    { name: "React", icon: <SiReact /> },
    { name: "React Native", icon: "📱" },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "RESTful APIs", icon: <SiPostman /> },
    { name: "GraphQL", icon: <SiGraphql /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "CI/CD", icon: <MdOutlineIntegrationInstructions /> },
  ],
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Tech Stack</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skills-grid">
            {items.map((skill) => (
              <div className="skill-card" key={skill.name}>
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