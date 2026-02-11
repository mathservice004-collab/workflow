# ContextFlow - 프로젝트 TODO

## Phase 1: 프로젝트 계획 및 데이터 모델 설계
- [x] 프로젝트 초기화 (web-db-user 스캐폴드)
- [ ] 데이터베이스 스키마 설계 및 마이그레이션
- [ ] tRPC 라우터 기본 구조 설계

## Phase 2: 디자인 시스템 및 레이아웃 구축
- [x] 글로벌 스타일 및 컬러 팔레트 설정 (우아한 다크/라이트 모드)
- [x] DashboardLayout 커스터마이징 (ContextFlowLayout)
- [x] 핵심 UI 컴포넌트 구현 (검색바, 카드, 타임라인)
- [x] 키보드 네비게이션 및 접근성 개선

## Phase 3: 인증 및 계정 연결 시스템
- [x] 로그인 페이지 구현 (Manus OAuth)
- [x] 홈 대시보드 구현
- [x] 커넥터 관리 페이지 구현
- [ ] Slack OAuth 연결 구현 (백엔드)
- [ ] Notion OAuth 연결 구현 (백엔드)
- [ ] Google Drive OAuth 연결 구현 (백엔드)

## Phase 4: 통합 검색 및 컨텍스트 뷰어
- [x] 키워드 검색 기능 구현 (기본)
- [ ] 시맨틱 검색 기능 구현 (벡터 임베딩)
- [ ] 하이브리드 검색 통합
- [x] 검색 결과 출처 추적 및 원문 링크 표시
- [ ] 컨텍스트 뷰어 - 타임라인 기반 재구성
- [x] 결정사항 및 액션아이템 자동 하이라이트

## Phase 5: 데이터 커넥터 관리 대시보드
- [x] 커넥터 상태 모니터링 (UI)
- [x] 동기화 이력 및 로그 표시 (UI)
- [x] 문서 목록 페이지 구현
- [x] 그래프 시각화 페이지 (플레이스홀더)
- [x] 인사이트 페이지 (플레이스홀더)
- [x] 설정 페이지 구현

## Phase 6: 테스트 및 오류 검증
- [ ] 통합 테스트 작성 (vitest)
- [ ] 렌더링 오류 검증 (< 0.1% 목표)
- [ ] 검색 결과 정확도 검증
- [ ] 데이터 프라이버시 및 격리 검증
- [ ] 크로스 브라우저 호환성 테스트

## Phase 7: 배포 및 결과물 전달
- [ ] 최종 체크포인트 생성
- [ ] 배포 준비 및 문서화
- [ ] 사용자에게 결과물 전달

## 주요 기능 상세 사항

### 데이터 모델 (Phase 1에서 구현)
- Users: 사용자 정보 및 역할
- Connectors: 플랫폼별 연결 정보 (Slack, Notion, Google Drive)
- SyncHistory: 동기화 이력
- Documents: 정규화된 문서 (Event, Artifact, Insight)
- SearchIndex: 검색 인덱스 (키워드, 벡터)
- ContextGraph: 문서 간 관계 그래프

### UI/UX 원칙
- 우아하고 완벽한 느낌의 디자인
- 다크/라이트 모드 자동 전환
- Skeleton Loading 및 Progressive Rendering
- 키보드 중심 네비게이션
- 에러 상태 Zero-Tolerance (Graceful Fallback)


## Phase 6: OAuth 백엔드 통합 (새 요청)
- [x] Slack OAuth 콜백 핸들러 구조 구현
- [x] Notion OAuth 콜백 핸들러 구조 구현
- [x] Google Drive OAuth 콜백 핸들러 구조 구현
- [x] 토큰 갱신 로직 구조 구현
- [x] 데이터 동기화 스케줄러 구조 구현

## Phase 7: 벡터 검색 인프라 (새 요청)
- [x] OpenSearch/Weaviate 통합 구조 구현
- [x] 벡터 임베딩 모듈 구조 구현
- [x] 문서 벡터화 파이프라인 구조 구현
- [x] 벡터 인덱싱 및 저장소 구조 구현

## Phase 8: 하이브리드 검색 엔진 (새 요청)
- [x] BM25 키워드 검색 최적화 (기본 구조)
- [x] 벡터 시맨닱 검색 구조 구현
- [x] 하이브리드 검색 점수 계산 구조 구현
- [x] 검색 결과 재순위 지정 알고리즘 구조 구현

## Phase 9: LLM 기반 문서 처리 (새 요청)
- [x] 문서 자동 요약 기능 구조 구현
- [x] 결정사항 자동 추출 기능 구조 구현
- [x] 액션 아이템 자동 분류 기능 구조 구현
- [x] 메타데이터 자동 생성 기능 구조 구현
- [x] 배치 처리 워커 구조 구현


## Phase 10: 폰트 및 스타일 최적화 (새 요청)
- [x] PRETENDARD 폰트 적용 (한글 산세리프)
- [x] 전체 UI에 PRETENDARD 폰트 통일


## Phase 11: 소셜 로그인 통합 (새 요청)
- [ ] Google OAuth 통합
- [ ] Naver OAuth 통합
- [ ] Kakao OAuth 통합
- [ ] Facebook OAuth 통합
- [ ] 로그인 UI 개선 (소셜 버튼 추가)
- [ ] 사용자 세션 관리 업데이트
- [ ] 소셜 로그인 테스트


## 완료 항목 요약
- [x] 기본 데이터 모델 및 스키마 설계
- [x] tRPC 라우터 구현
- [x] 우아한 다크/라이트 모드 디자인
- [x] 모든 주요 페이지 구현
- [x] OAuth 백엔드 핸들러 구조
- [x] 벡터 검색 엔진 구조
- [x] LLM 기반 문서 처리 파이프라인
- [x] PRETENDARD 한글 폰트 적용
- [x] 소셜 로그인 UI (Google, Naver, Kakao, Facebook)
- [x] 소셜 로그인 OAuth 핸들러 구조


## Phase 12: 로그인 기능 제거 및 공개 접근 (새 요청)
- [x] 로그인 페이지 제거
- [x] AuthGuard 제거 및 모든 라우트 공개
- [x] 초기 화면 "시작하기" 버튼으로 대시보드 접근
- [x] useAuth 훅 제거 또는 비활성화


## Phase 13: 그래프 시각화 통합 (새 요청)
- [x] Cytoscape.js 라이브러리 설치
- [x] 그래프 컴포넌트 구현
- [x] 백엔드 그래프 데이터 API 연결 (샘플 데이터)
- [x] 그래프 스타일 및 레이아웃 설정
- [x] 노드 클릭 및 인터랙션 기능
- [x] 범례 및 필터링 기능


## Phase 14: 계정 연결 기능 활성화 (새 요청)
- [ ] 계정 연결 모달 컴포넌트 구현
- [ ] Slack OAuth 연결 기능
- [ ] Notion OAuth 연결 기능
- [ ] Google Drive OAuth 연결 기능
- [ ] 연결된 계정 목록 표시
- [ ] 계정 연결 해제 기능


## 계정 연결 기능 구현 완료
- [x] AddConnectorModal 컴포넌트 구현
- [x] Slack, Notion, Google Drive OAuth URL 구성
- [x] Connectors 페이지에 모달 통합
- [x] Add Account 버튼 기능 활성화
