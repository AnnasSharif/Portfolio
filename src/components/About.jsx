import { useEffect, useRef } from 'react';
import { FiCode, FiDatabase, FiCpu, FiBookOpen } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: <FiCode />, title: 'Web Development', desc: 'Building modern web apps with React, HTML5, CSS3 & JavaScript' },
  { icon: <FiDatabase />, title: 'Data Science', desc: 'Analyzing datasets with Python, Pandas & SQL databases' },
  { icon: <FiCpu />, title: 'AI & Machine Learning', desc: 'Creating intelligent chatbots with RAG, LLMs & Groq API' },
  { icon: <FiBookOpen />, title: 'Continuous Learner', desc: 'Always expanding knowledge in DSA, OOP & emerging technologies' },
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
            A glimpse into who I am, what drives me, and the value I bring to every project.
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <div className="about__text-block glass-card">
              <h3 className="about__heading">
                I'm <span className="gradient-text">Annas Sharif</span>, a passionate
                junior software developer from Lahore, Pakistan.
              </h3>
              <p>
                I'm currently pursuing my <strong>BS in Data Science</strong> at the University of the Punjab,
                where I'm deepening my understanding of data analysis, machine learning, and software engineering.
              </p>
              <p>
                My journey in tech started with a curiosity for how things work and has evolved into a deep passion
                for building intelligent, impactful applications. I specialize in Python and web technologies,
                and I love exploring AI-powered solutions — from RAG-based chatbots to data-driven analysis systems.
              </p>
              <p>
                I'm highly organized, a strong self-learner, and I thrive in environments where I can contribute
                to meaningful projects while continuously growing my technical skillset. I'm eager to join a
                team where I can make a real impact.
              </p>

              <div className="about__info-grid">
                <div className="about__info-item">
                  <span className="about__info-label">Name</span>
                  <span className="about__info-value">Annas Sharif</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Location</span>
                  <span className="about__info-value">Lahore, Pakistan</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Date of Birth</span>
                  <span className="about__info-value">September 01, 2006</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Email</span>
                  <span className="about__info-value">sharifannas92@gmail.com</span>
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
