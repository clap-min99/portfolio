// src/components/ProjectsSection.jsx
import './ProjectSection.css';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectData';

export default function ProjectSection() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % projects.length);
  const handlePrev = () => setIndex((index - 1 + projects.length) % projects.length);

  return (
    <section className="projects-section">
      <h2>📃 PROJECT</h2>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>‹</button>

        <div
          className="carousel"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((proj, i) => (
            <ProjectCard key={i} project={proj} />
          ))}
        </div>

        <button className="arrow right" onClick={handleNext}>›</button>
      </div>
    </section>
  );
}
