import { useState, useEffect, useRef } from 'react';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'DocInsight-AI',
    year: '2024',
    category: 'AI / NLP',
    description:
      'A Retrieval-Augmented Generation (RAG) based chatbot that allows users to upload PDF documents and ask questions directly related to their content. It retrieves relevant sections and uses an LLM to generate precise, context-aware answers.',
    tools: ['Python', 'Gradio', 'Groq API', 'PyPDF2'],
    image: '/images/docinsight.png',
    github: 'https://github.com/AnnasSharif',
    color: '#8B5CF6',
  },
  {
    id: 2,
    title: 'ConceptBridge AI',
    year: '2024',
    category: 'AI / Education',
    description:
      'An academic mentor chatbot designed to help students understand complex concepts in DSA, OOP, and AI step-by-step. Features include adjustable explanation depth, context-aware guidance, and automated interaction logging.',
    tools: ['Python', 'Gradio', 'Groq API', 'Llama 3'],
    image: '/images/conceptbridge.png',
    github: 'https://github.com/AnnasSharif',
    color: '#06B6D4',
  },
  {
    id: 3,
    title: 'Air Quality Analysis',
    year: '2024',
    category: 'Data Science',
    description:
      'A data analysis system built to process multi-variable environmental datasets for air quality prediction. Cleanses and transforms raw records to generate interactive data visualizations and predictive analytical insights.',
    tools: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
    image: '/images/airquality.png',
    github: 'https://github.com/AnnasSharif',
    color: '#22C55E',
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const project = projects[activeIndex];

  return (
    <section className="section projects" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work in AI, data science, and web development.
          </p>
        </div>

        {/* Project Showcase Slider */}
        <div className="projects__showcase">
          <div className="projects__slide" key={project.id}>
            <div className="projects__slide-image">
              <img src={project.image} alt={project.title} />
              <div className="projects__slide-overlay" style={{ background: `linear-gradient(135deg, ${project.color}22, transparent)` }} />
            </div>

            <div className="projects__slide-content">
              <div className="projects__slide-meta">
                <span className="projects__slide-year">{project.year}</span>
                <span className="projects__slide-category">{project.category}</span>
              </div>

              <h3 className="projects__slide-title">{project.title}</h3>
              <p className="projects__slide-desc">{project.description}</p>

              <div className="projects__slide-tools">
                {project.tools.map(tool => (
                  <span className="projects__tool-tag" key={tool}>{tool}</span>
                ))}
              </div>

              <div className="projects__slide-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FiGithub /> View Code
                </a>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="projects__controls">
            <button className="projects__control-btn" onClick={handlePrev} aria-label="Previous project" id="project-prev">
              <FiChevronLeft />
            </button>

            <div className="projects__dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={`projects__dot ${i === activeIndex ? 'projects__dot--active' : ''}`}
                  onClick={() => { setActiveIndex(i); }}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <button className="projects__control-btn" onClick={handleNext} aria-label="Next project" id="project-next">
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects__grid">
          {projects.map((proj, i) => (
            <div
              className={`projects__card glass-card ${i === activeIndex ? 'projects__card--active' : ''}`}
              key={proj.id}
              onClick={() => setActiveIndex(i)}
            >
              <div className="projects__card-accent" style={{ background: proj.color }} />
              <span className="projects__card-number">0{i + 1}</span>
              <h4 className="projects__card-title">{proj.title}</h4>
              <p className="projects__card-category">{proj.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
