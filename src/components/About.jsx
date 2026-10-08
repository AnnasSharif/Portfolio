import { useEffect, useRef } from 'react';
import { FiCode, FiDatabase, FiCpu, FiBookOpen } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: <FiCode />, title: 'Full-Stack & Django', desc: 'Crafting robust web applications & APIs with Python, Django, REST frameworks, and modern React' },
  { icon: <FiCpu />, title: 'AI & Machine Learning', desc: 'Developing intelligent solutions, custom RAG pipelines, LLM integrations (Groq/LLaMA), and ML predictive models' },
  { icon: <FiDatabase />, title: 'Operating Systems & Core CS', desc: 'Strong foundation in OS internals (process scheduling, memory, concurrency), Data Structures, and SQL' },
  { icon: <FiBookOpen />, title: 'Global Remote Ready', desc: 'Experienced in asynchronous collaboration, clean code, Git workflows, and timely delivery for international teams' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.about__highlight-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">Get To Know Me</h2>
          <p className="section-subtitle">
            A software engineer dedicated to building scalable full-stack applications, intelligent AI systems, and solid architectures.
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <div className="about__text-block glass-card">
              <h3 className="about__heading">
                I'm <span className="gradient-text">Annas Sharif</span>, a Full-Stack Developer & AI Specialist.
              </h3>
              <p>
                Currently pursuing my <strong>BS in Data Science</strong> at the prestigious University of the Punjab. My expertise bridges full-stack web development with intelligent AI and data-driven systems.
              </p>
              <p>
                I specialize in <strong>Python, Django, React, and Machine Learning</strong>, backed by deep core computer science fundamentals in <strong>Operating Systems (concurrency, memory management, process scheduling)</strong>, Algorithms, and Object-Oriented Design.
              </p>
              <p>
                Whether developing end-to-end full-stack platforms, integrating high-throughput LLMs with RAG pipelines, or architecting clean REST APIs, I focus on delivering scalable, production-ready code that drives real business value for global clients.
              </p>

              <div className="about__info-grid">
                <div className="about__info-item">
                  <span className="about__info-label">Role</span>
                  <span className="about__info-value">Full-Stack & AI Engineer</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Availability</span>
                  <span className="about__info-value">Available for Remote / Contracts</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Location</span>
                  <span className="about__info-value">Lahore, PK (Remote Worldwide)</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Email</span>
                  <span className="about__info-value">annassharif.dev@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <div className="about__highlight-card glass-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <h4 className="about__highlight-title">{item.title}</h4>
                  <p className="about__highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
