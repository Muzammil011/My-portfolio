import React, { useEffect, useState } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Muzammil.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {text}
          <span className="cursor">|</span>
        </h1>
        <p className="hero-subtitle">
          Aspiring SDET with a passion for automation, testing, and DevOps.
          Focused on roles in automation testing, backend development, and DevOps engineering.
          This portfolio highlights my hands-on journey and the skills I've built along the way.
        </p>
        <div className="hero-icons">
          <a href="https://github.com/Muzammil011" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/muzammil-syed-63203627b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:seyedmuzammil2020@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
