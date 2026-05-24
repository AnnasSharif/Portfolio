import { useEffect, useRef } from 'react';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Education.css';

const education = [
  {
    degree: 'BS Data Science',
    status: 'In Progress',
    institution: 'University of the Punjab',
    location: 'Lahore, Pakistan',
    period: '2024 – Present',
    description:
      'Pursuing a comprehensive degree in Data Science covering machine learning, statistics, data analysis, programming, and AI. Building a strong foundation in both theoretical concepts and practical applications.',
    highlights: ['Machine Learning', 'Statistics', 'Data Analysis', 'Python Programming'],
  },
  {
    degree: 'ICS (Intermediate in Computer Science)',
    status: 'Completed',
    institution: 'Punjab Group of Colleges',
    location: 'Mian Channu, Pakistan',
    period: '2022 – 2024',
    description:
      'Completed intermediate studies with a focus on Computer Science, gaining foundational knowledge in programming, mathematics, and computer systems.',
    highlights: ['Computer Science', 'Mathematics', 'Programming Fundamentals'],
  },
];

export default function Education() {
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

    const items = sectionRef.current?.querySelectorAll('.education__card');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section education" id="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Education</span>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">
            My educational background and the path that shaped my technical foundation.
          </p>
        </div>

        <div className="education__timeline">
          <div className="education__timeline-line" />

          {education.map((edu, i) => (
            <div className="education__card glass-card" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="education__card-dot">
                <FiBookOpen />
              </div>

              <div className="education__card-header">
                <div>
                  <h3 className="education__degree">{edu.degree}</h3>
                  <span className={`education__status ${edu.status === 'In Progress' ? 'education__status--active' : ''}`}>
                    {edu.status}
                  </span>
                </div>
              </div>

              <div className="education__card-meta">
                <span className="education__meta-item">
                  <FiMapPin size={14} />
                  {edu.institution}, {edu.location}
                </span>
                <span className="education__meta-item">
                  <FiCalendar size={14} />
                  {edu.period}
                </span>
              </div>

              <p className="education__description">{edu.description}</p>

              <div className="education__highlights">
                {edu.highlights.map(h => (
                  <span className="education__highlight-tag" key={h}>{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
