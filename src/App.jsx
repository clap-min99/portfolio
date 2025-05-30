import ReactFullpage from '@fullpage/react-fullpage';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AwardsSection from './components/AwardsSection';
import ProjectSection from './components/ProjectSection';
import ModernProjectSection from './components/ModernProjectSection';
import ContactSection from './components/ContactSection';


import DotNavigation from './components/Navigation/DotNavigation';
import { useState, useRef } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const fullpageApiRef = useRef(null); // ✅ 상태가 아닌 ref로 저장

  return (
    <>
      {/* 항상 고정된 위치에 표시될 도트 네비게이션 */}
      <DotNavigation
        activeIndex={activeSection}
        onDotClick={(index) => fullpageApiRef.current?.moveTo(index + 1)}
      />

      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        scrollingSpeed={800}
        anchors={['home', 'about', 'awards', 'modernproject', 'contact']}
        navigation={false}
        onLeave={(origin, destination) => {
          setActiveSection(destination.index);
        }}
        render={({ fullpageApi }) => {
          if (!fullpageApiRef.current && fullpageApi) {
            fullpageApiRef.current = fullpageApi;
          }

          return (
            <div id="fullpage-wrapper">
              <div className="section"><HeroSection /></div>
              <div className="section"><AboutSection /></div>
              <div className="section"><AwardsSection /></div>
              <div className="section"><ModernProjectSection /></div>
              <div className="section"><ContactSection /></div>
            </div>
          );
        }}
      />
    </>
  );
}

export default App;
