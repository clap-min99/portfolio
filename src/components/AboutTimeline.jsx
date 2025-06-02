// components/AboutTimeline.jsx
import './AboutTimeline.css';



export default function AboutTimeline() {
  const steps = [
    { year: '2023.02', text: '🎓 경북대학교 신소재공학부 졸업' },
    { year: '2024.07~', text: 'SSAFY 12기 입과' },
  ];


  return (
    <div className="timeline-horizontal">
      {steps.map((step, i) => (
        <div key={i} className="timeline-step">
          <div className="timeline-circle" />
          <div className="timeline-year">{step.year}</div>
          <div className="timeline-text">{step.text}</div>
        </div>
      ))}
    </div>
  );
}
