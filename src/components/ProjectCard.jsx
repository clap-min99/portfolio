// src/components/ProjectCard.jsx
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="carousel-card">
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <h3>{project.title}</h3>
      </div>

       <div className="project-body">
        {/* 좌측 영상 */}
        {project.video && (
            <div className="project-video">
            <video controls>
                <source src={project.video} type="video/mp4" />
                브라우저가 video 태그를 지원하지 않습니다.
            </video>
            </div>
        )}

        {/* 우측 설명 */}
        <div className="project-info">
            <p className="project-desc">{project.desc}</p>

            <p className="project-role">
            <strong>📌 역할:</strong> {project.role}
            </p>

            <div className="tech-list">
            {project.tech.map((t, i) => (
                <span className="tech" key={i}>{t}</span>
            ))}
            </div>

            <div className="project-detail">
            <p>{project.detail}</p>
            </div>

            {project.link && (
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                🔗 프로젝트 보기
            </a>
            )}
        </div>
        </div>


        

      {/* {project.link && (
        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
          🔗 프로젝트 보기
        </a>
      )} */}
    </div>
  );
}
