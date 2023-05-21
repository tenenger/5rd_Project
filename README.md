## 1. 목표

#### 배웠던 개발 지식 기반, 개발 역량 향상 : react-query, recoil

**[기획 Notion](https://tenener.notion.site/f7e3126674684676ad2e980d742cec5c)**

<br/>

## 2. Demo

#### https://finedust-weather.netlify.app/

<br/>

## 3. 실행 방법

### 패키지 설치

```
npm install
```

### node 서버 실행

```
npm start
```

<br/>

## 4. 프로젝트 소개

- 여름의 불청객인 미세먼지 농도를 지역별로 파악하여, 대비하기 위해 프로젝트 개발 착수.
- 최초 작업 기간: 2022년 6월 19일(금) ~ 2022년 6월 22일(목)
- 추가 작업 기간: 2022년 11월 24일(화) ~ 2022년 12월 06일(화)
- **2차 추가 작업 기간 : 2023년 5월 28일(월) ~ 진행 중**

<br/>

## 5. 기술 스택

### 변경 예정

![Typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Recoil](https://img.shields.io/badge/recoil-000?style=for-the-badge&logo=recoil&logoColor=white)
![Styledcomponents](https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=Styledcomponents&logoColor=white)

### 최초

![Javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
![Styledcomponents](https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=Styledcomponents&logoColor=white)

<br/>

## 6. 커밋 션벤션

| commit   | 설명          | 예시                                       |
| -------- | ------------- | ------------------------------------------ |
| feat     | 기능          | feat: Add modal component                  |
| design   | CSS 스타일링  | design: Add box move animation             |
| chore    | 패키지 매니저 | chore: Change styled-components -> emotion |
|          |               |                                            |
| file     | 파일(이미지)  | file: Remove favicon.ico                   |
| docs     | 문서          | docs: Update README.md                     |
|          |               |                                            |
| refactor | 리팩토링      | refactor: Update State(form)               |
| debug    | 디버깅        | debug: Remove box flikering                |
|          |               |                                            |
| deploy   | 배포          | deploy: Replay Netlify                     |

<br/>

## 7. 작업내용

### 2차 추가 작업

- ScrollToTop 컴포넌트 추가 : 2023.05.22
- Tag 컴포넌트 추가 : 2023.05.18
- DropDown 컴포넌트, 절대 경로, import 및 props 자동 정렬 ESLint 규칙 추가 : 2023.05.16
- 메인 페이지 캐러셀 추가 : 2023.05.15
- 단계별 회원가입 UI 추가 : 2023.05.14
- 로그인 페이지 UI 추가 및 이메일 기억하기 기능 추가 : 2023.05.12
- React-Query의 캐시 기능, Lazy API 통신을 활용하여 로딩 감소 : 2023.05.08
- 위치 액세스 거부했을 떄 무한 로딩인 현상 수정 : 2023.05.08
- redux -> recoil, fontawesome -> react-icons, CRA -> vite 라이브러리 변경 : 2023.05.08
- 불필요한 코드 제거, 파일 분리하여 리팩토링 : 2023.05.08

### 1차 추가 작업

- API 쿼리 성능 최적화 : 2022-11-27
- API 쿼리 데이터를 redux로 상태관리 : 2022-11-27
- 전체적으로 refactoring - 2022-11-29
- 즐겨찾기 기능 구현 - 2022-11-29
- 즐겨찾기에 추가된 구(군)을 localStorage에 저장해서, 나중에 브라우저를 열어도 유지 : 2022-12-6

### 최초 작업

- geolocation API 호출하여 현재 위치의 위도와 경도 가져오기
- 카카오 맵 API 호출하여 현재 위도와 경도를 토대로 행정구역, 도시이름 가져오기
- 미세먼지 공공 API를 이용하여 행정구역에 해당되는 도시의 미세먼지 날씨 모두 가져오기
- 도시의 미세먼지 날씨를 UI에 표시하기(현재 위치, 행정 구역별 미세먼지 날씨)
- redux 라이브러리를 사용하지만, 실제로는 useState를 사용(나중에 작업 할 예정)
- 즐겨찾기 UI는 있지만, 실제 기능은 미구현(나중에 작업 할 예정)

<br/>
