## 1. 시간별 미세먼지 농도 측정으로 지역별 미세먼지를 제공하는 서비스

- 진행기간 : **2023.05 ~ 진행 중**
- 팀 구성 : **개인**
- [Demo](https://finedust-weather.netlify.app/) : **기획 변경에 따른 기능 제한**
- 작업 기록 : https://www.notion.so/f7e3126674684676ad2e980d742cec5c?pvs=21

<br/>

## 2. 실행 방법

### 패키지 설치

```
npm install
```

### node 서버 실행

```
npm start
```

<br/>

## 3. 기술 스택

![Javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styledcomponents](https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=Styledcomponents&logoColor=white)
![React-Query](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Recoil](https://img.shields.io/badge/recoil-000?style=for-the-badge&logo=recoil&logoColor=white)
![React-Hook-Form](https://img.shields.io/badge/reactHookForm-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/zod-3492FF?style=for-the-badge&logo=zod&logoColor=white)


<br/>

## 4. 커밋 션벤션

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

## 5. 작업내용

- React-Hook-Form, Zod를 활용한 로그인/회원가입 페이지 구현
- Menu, DropDown, Tag, Modal, CloseButton 공통 컴포넌트 기능 구현
- localStorage를 활용한 로그인 아이디 기억, 즐겨찾기 기능 구현
- 카카오 맵 API를 활용한 현재 위치 미세먼지 확인 기능 구현
- 미세먼지 및 오염물질 정보 제공하는 모달 구현
- lazy, prefetch를 활용한 데이터 fetch 로딩 대기시간 감소
- useOnClickOutSide 커스텀 훅 기능 구현

<br/>

## 6. 성과
- 새로운 기술 학습
  - Skills : React-Query, React-Hook-Form, Zod
  - Components : Menu, DropDown, Tag, Modal, CloseButton
  - Custom Hook : useOnClickOutSide
  - ETC : Lazy, KaKao Map API
