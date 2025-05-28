// src/data/projectsData.js

export const projects = [
  {
    icon: '🥰 ',
    title: '마래바',
    period: '2025.01-2025.02(7주), 참여인원: 6명(FE2, BE4)',
    desc: '청각장애 아동을 위한 음성 AI 기반 구화 연습 서비스',
    role: '프론트엔드 개발 (WebRTC 기반 화상 기능, 게임 UI 설계)',
    tech: ['React', 'WebRTC', 'Redux'],
    detail: `1. 주요 화면 구현
- 발음 학습 페이지: STT 결과에 따라 ChatGPT 피드백을 표시하는 UI 흐름 구성
- AI 대화 페이지: 역할 선택 → 음성 대화 입력 → GPT 응답 출력 인터페이스 구현

2. 로그인 및 상태 관리
- Redux 기반 로그인 상태 전역 관리
- 로그인/회원가입/로그아웃 및 보호 라우팅 흐름 구성

3. REST API 연동
- 발음 결과 저장, 피드백 요청 등 주요 API 연동
- 비동기 흐름에 대한 예외 처리 및 상태 반영 로직 구현
`,
    video: `${import.meta.env.BASE_URL}/assets/videos/maraeba.mp4`,
  },
  {
    icon: '🏠',
    title: 'Zeepseek',
    period: '2025.02-2025.04(7주),  참여인원: 6명(FE3, BE3)',
    desc: '부동산 매물 추천 웹 서비스',
    role: '프론트엔드 개발 (매물 시각화, 상태관리, 검색 기능 구현)',
    tech: ['React', 'Redux', 'Kakao Map API'],
    detail: `1. 주요 화면 구현
- 검색 결과 기반 매물 리스트 + 지도 시각화 UI 구성
- 동 클릭 시 상세 정보 및 마커 표시 모달 구성
- 지역 중심 좌표 기반 폴리곤 강조 및 자동 선택 기능 구현

2. 상태 관리 및 인증
- Redux를 통한 검색 조건, 로그인 상태, 매물 리스트 등 전역 상태 관리
- accessToken/refreshToken 구조로 인증 처리 및 자동 재로그인 구현

3. API 연동 및 로직 개선
- 기존 동별 조회 API를 search API로 통합하여 UX 개선
- 지도 이동/검색/클릭 등에 따라 실시간 결과 반영되도록 비동기 흐름 구성`,
    video: `${import.meta.env.BASE_URL}/assets/videos/zeepseek.mp4`,
  },
  {
    icon: '🍎',
    title: '🍎 달디단',
    period: '2025.04-2025.05(7주),  참여인원: 6명(FE4, BE2)',
    desc: '사과 당도 예측 앱',
    role: '카메라 연동, 실시간 추론 구현, 전체 UX 설계, 당도추론 AI개발',
    tech: ['YOLOv8', 'TFLite', 'React Native', 'VisionCamera', 'XGBoost'],
    detail: `1. 실시간 추론 및 촬영
- VisionCamera를 통한 프레임 수집 및 객체 탐지
- YOLOv8 + TFLite 모델 기반 실시간 추론 파이프라인 구성
- TTL + objectStates 기반 사과 ID 추적 및 안정적 감지 유지

2. UX 개선 및 화면 구성
- 감성 애니메이션 기반 3초 카운트다운 자동 촬영 UX 구성
- 당도 기준 필터 슬라이더 및 탐지결과 토글 기능 구현
- 실시간 분석 결과 시각화 및 Top3 표시 UI 구성

3. 모델 좌표 보정 및 성능 최적화
- 1920x1080 해상도 대비 모델 입력(320x320)에 대한 비율 보정 + 회전 보정
- Frame Processor + GPU Delegate 기반 최적화된 Android 추론 구조 구성`,
    video: `${import.meta.env.BASE_URL}/assets/videos/daldidan.mp4`,
  },
];

