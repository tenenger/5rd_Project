## 1. 개요

### 목적

- 개발 역량 향상

<br/>

### 기획

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

- 시간별 미세먼지 농도 측정으로 지역별 미세먼지를 제공하는 서비스
- 최초 작업 기간: 2022년 6월 19일(금) ~ 2022년 6월 22일(목)
- 추가 작업 기간: 2022년 11월 24일(화) ~ 2022년 12월 06일(화)
- **2차 추가 작업 기간 : 2023년 5월 28일(월) ~ 진행 중**

<br/>

## 5. 기술 스택

![Javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Recoil](https://img.shields.io/badge/recoil-000?style=for-the-badge&logo=recoil&logoColor=white)
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

- React-Hook-Form, Zod를 활용한 로그인/회원가입 페이지 구현
- Menu, DropDown, Tag, Modal, CloseButton 공통 컴포넌트 기능 구현
- localStorage를 활용한 로그인 아이디 기억, 즐겨찾기 기능 구현
- 카카오 맵 API를 활용한 현재 위치 미세먼지 확인 기능 구현
- 미세먼지 및 오염물질 정보 제공하는 모달 구현
- lazy, prefetch를 활용한 데이터 fetch 로딩 대기시간 감소
- useOnClickOutSide 커스텀 훅 기능 구현

<br/>


## 8. 성과
- 새로운 기술 학습
  - Skills : React-Query, React-Hook-Form, Zod
  - Components : Menu, DropDown, Tag, Modal, CloseButton
  - Custom Hook : useOnClickOutSide
  - ETC : Lazy, KaKao Map API
