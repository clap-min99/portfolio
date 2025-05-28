import './AboutSection.css';
import AboutTimeline from './AboutTimeline';
export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>👨‍💻 About Me</h2>
         <p>
          사용자 중심의 경험을 설계하는 프론트엔드 개발자입니다.<br />
          협업과 개선을 반복하며 꾸준히 성장하고 있습니다.
        </p>
        <div className="keyword-box">
          <div className="keyword">#성장</div>
          <div className="keyword">#소통</div>
          <div className="keyword">#개선</div>
        </div>
        <AboutTimeline />
        
      </div>
    </section>
  );
}
