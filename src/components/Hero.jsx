import { useState, useEffect } from 'react';
import { FiGithub, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const roles = [
  'Junior Software Developer',
  'Python Developer',
  'React Enthusiast',
  'Data Science Student',
  'AI Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.slice(0, text.length - 1)
            : currentRole.slice(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__badge animate-fade-up">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{' '}
            <span className="gradient-text">Annas Sharif</span>
          </h1>

          <div className="hero__role animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="hero__role-text">{text}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__description animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Hardworking and passionate about software development. Strong self-learner eager to
            build intelligent applications and grow as a developer. Currently pursuing BS Data Science
            at University of the Punjab.
          </p>

          <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work
              <FiArrowDown />
            </a>
            <a
              href="https://github.com/AnnasSharif"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FiGithub />
              GitHub
            </a>
            <a href="mailto:sharifannas92@gmail.com" className="btn btn-outline">
              <FiMail />
              Email Me
            </a>
          </div>

          <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="hero__stat">
              <span className="hero__stat-number">3+</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">AI</span>
              <span className="hero__stat-label">Focused</span>
            </div>
          </div>
        </div>

        <div className="hero__visual animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="hero__image-wrapper">
            <div className="hero__image-glow" />
            <img src="/images/profile.png" alt="Annas Sharif" className="hero__image" />
            <div className="hero__image-ring" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll to about section">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </a>
    </section>
  );
}
