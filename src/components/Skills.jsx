import { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
  { name: 'Python & Django', level: 80, color: '#3776AB' },
  { name: 'React JS', level: 70, color: '#61DAFB' },
  { name: 'HTML5, CSS3, JS', level: 80, color: '#E44D26' },
  { name: 'SQL Database', level: 75, color: '#336791' },
  { name: 'Machine Learning', level: 60, color: '#FF6F00' },
  { name: 'DSA & OOP', level: 80, color: '#8B5CF6' },
  { name: 'Operating Systems', level: 60, color: '#00BFA5' },
];

const tools = [
  { name: 'Git & GitHub', icon: '⚙️' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Django REST', icon: '🌐' },
  { name: 'Gradio', icon: '🎨' },
  { name: 'Groq API', icon: '🤖' },
  { name: 'Pandas', icon: '📊' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Scikit-learn', icon: '🧪' },
  { name: 'PyPDF2', icon: '📄' },
  { name: 'LLM / AI', icon: '🧠' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'TypeScript', icon: '📝' },
  { name: 'GSAP', icon: '✨' },
  { name: 'Framer Motion', icon: '🎬' },
  { name: 'Tailwind CSS', icon: '🎯' },
  { name: 'Linux/Shell', icon: '🐧' },
];

export default function Skills() {
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
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.skills__bar-wrapper, .skills__tool-tag');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Skills & Tools</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning full-stack development, AI/ML, and systems programming — ready to deliver world-class solutions.
          </p>
        </div>

        <div className="skills__content">
          <div className="skills__bars glass-card">
            <h3 className="skills__group-title">Core Competencies</h3>
            {skills.map((skill, i) => (
              <div className="skills__bar-wrapper" key={skill.name} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="skills__bar-header">
                  <span className="skills__bar-name">{skill.name}</span>
                  <span className="skills__bar-percent">{skill.level}%</span>
                </div>
                <div className="skills__bar-track">
                  <div
                    className="skills__bar-fill"
                    style={{
                      '--fill-width': `${skill.level}%`,
                      '--fill-color': skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skills__tools glass-card">
            <h3 className="skills__group-title">Tools & Technologies</h3>
            <div className="skills__tools-grid">
              {tools.map((tool, i) => (
                <div className="skills__tool-tag" key={tool.name} style={{ animationDelay: `${i * 0.05}s` }}>
                  <span className="skills__tool-icon">{tool.icon}</span>
                  <span className="skills__tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
