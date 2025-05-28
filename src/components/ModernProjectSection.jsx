import { useState } from 'react';
import './ModernProjectSection.css';
import { projects } from '../data/projectData';

export default function ModernProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => setCurrentIndex(index);
  const current = projects[currentIndex];

  return (
    <section className="modern-project-section">
      {/* 상단 네비게이션 버튼 */}
      <div className="project-tabs">
        {projects.map((proj, i) => (
          <button
            key={i}
            className={`tab-button ${i === currentIndex ? 'active' : ''}`}
            onClick={() => handleSelect(i)}
          >
            {proj.title}
          </button>
        ))}
      </div>

      {/* 본문 */}
      <div className="project-content-layout">
        {/* 좌측 텍스트 */}
        <div className="project-left">
          <span className="project-subtitle">Main Project</span>
          <h2 className="project-title">{current.title}</h2>
          <p className='project-des'>{current.desc}</p>
          <p className="project-period">기간: {current.period}</p>
          <p className="project-people">역할: {current.role} </p>
          
          
                <div className="project-description">
                {current.detail}
                </div>

          <div className="tech-list">
            {current.tech.map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
          </div>

          <div className="project-links">
            {current.link && (
              <a href={current.link} target="_blank" rel="noreferrer">🔗 GitHub</a>
            )}
          </div>
        </div>

        {/* 우측 미디어 */}
        <div className="project-right">
          {current.image && (
            <img src={current.image} alt="preview" className="project-image" />
          )}
         {current.video && !current.image && (
            <video key={currentIndex} controls>
                <source src={current.video} type="video/mp4" />
                브라우저가 video 태그를 지원하지 않습니다.
            </video>
            )}
        </div>
      </div>
    </section>
  );
}
