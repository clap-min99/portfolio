// components/Navigation/DotNavigation.jsx
import './DotNavigation.css';

export default function DotNavigation({ activeIndex, onDotClick }) {
  const sections = ['Home', 'About', 'Project', 'Contact'];

  return (
    <div className="dot-nav">
      {sections.map((_, i) => (
        <div
          key={i}
          className={`dot ${activeIndex === i ? 'active' : ''}`}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  );
}
