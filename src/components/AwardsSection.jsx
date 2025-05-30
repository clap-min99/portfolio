import './AwardsSection.css';

export default function AwardsSection() {
  const awards = [
    {
      date: '2024.02',
      title: 'SSAFY 공통 프로젝트 우수상',
      description: '음성 AI 기반 청각장애아동 구화 연습 서비스',
    },
     {
      date: '2024.04',
      title: 'SSAFY 특화 프로젝트 우수상',
      description: '빅데이터 특화 도메인 부동산 매물 추천 서비스',
    },
  ];

  const certs = [
    {
      date: '2023.11',
      title: '데이터분석준전문가(ADsP)',
      description: '한국데이터산업진흥원 공인',
    },
    {
      date: '2023.12',
      title: '품질경영기사',
      description: '품질관리 기법과 통계적 분석 능력을 검증하는 국가기술자격',
    },
    {
      date: '2023.12',
      title: '6시그마GB',
      description: '통계 기반 문제 해결 및 공정 품질 향상 역량을 인증하는 품질개선 전문가 과정',
    },
  ];

  const langs = [
  {
    date: '2024.06',
    title: 'TOEIC 890',
    description: '영어 독해 및 비즈니스 커뮤니케이션 능력 평가',
  },
  {
    date: '2024.12',
    title: 'OPIc IH',
    description: '영어 실무 회화 능력 인증 (Intermediate High)',
  },
];


  return (
   <section className="awards-section">
  <h2>🏅 Awards & Certifications</h2>
  <div className="awards-cert-container">
    
    {/* 🏆 Awards */}
    <div className="awards-block">
      <h3>🏆 Awards</h3>
      {awards.map((item, i) => (
        <div key={i} className="item">
          <div className="item-date">{item.date}</div>
          <div className="item-title">{item.title}</div>
          <div className="item-desc">{item.description}</div>
        </div>
      ))}
    </div>

    {/* 📜 Certifications */}
    <div className="certs-block">
      <h3>📜 Certifications</h3>
      {certs.map((item, i) => (
        <div key={i} className="item">
          <div className="item-date">{item.date}</div>
          <div className="item-title">{item.title}</div>
          <div className="item-desc">{item.description}</div>
        </div>
      ))}
    </div>

    {/* 🗣 Language Skills */}
    <div className="langs-block">
      <h3>🗣 Language Skills</h3>
      {langs.map((item, i) => (
        <div key={i} className="item">
          <div className="item-date">{item.date}</div>
          <div className="item-title">{item.title}</div>
          <div className="item-desc">{item.description}</div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}
