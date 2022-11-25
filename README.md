## 1. 목표
#### 상태관리 라이브러리인 redux 역량 강화를 위한 토이 프로젝트

<br/>

## 2. Demo
#### https://lucky-haupia-f8bbac.netlify.app/

<br/>

## 3. 실행 방법
### 패키지 설치
```
yarn 
```
### node 서버 실행
```
yarn start
```

<br/>

## 4. 프로젝트 소개
- 여름의 불청객인 미세먼지 농도를 지역별로 파악하여, 대비하기 위해 프로젝트 개발 착수.
- 최초 작업 기간: 2022년 6월 19일(금) ~ 22년 6월 22일(목) / (4일)
- 추가 작업 기간: 2022년 11월 24일(화) ~ 진행 중...
<br/>

## 5. 기술 스택
### 1차 추가 작업(진행 중)
![Typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
![emotion](https://img.shields.io/badge/emotion-000?style=for-the-badge&logo=emotion&logoColor=white)

### 최초
![Javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
![Styledcomponents](https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=Styledcomponents&logoColor=white)

<br/>

## 6. 커밋 션벤션

| commit   | 설명             | 예시                                       |
| -------- | ---------------- | ------------------------------------------ |
| feat     | 기능             | feat: Add modal component                  |
| design   | CSS 스타일링      | design: Add box move animation             |
| chore    | 패키지 매니저     | chore: Change styled-components -> emotion |
|          |                  |                                            |
| file     | 파일(이미지)      | file: Remove favicon.ico                  |
| docs     | 문서             | docs: Update README.md                     |
|          |                 |                                             |
| refactor | 리팩토링         | refactor: Update State(form)               |
| debug    | 디버깅           | debug: Remove box flikering                |
|          |                 |                                             |
| deploy   | 배포             | deploy: Replay Netlify                     |

### 키워드
- Add : (처음, 새롭게) 추가
- Remove : (기존) 삭제
- Change : (기존) 삭제 -> (처음, 새롭게) 추가
- Update : (기존) + (처음, 새롭게) 추가
- Replay : (기존) 다시
- Comment : (이외) 설명

<br/>

## 7. 작업내용
### 1차 추가 작업
1. 즐겨찾기 기능 구현 - 진행 중
2. API 쿼리 성능 최적화 - 진행 중
3. API 쿼리 데이터를 redux로 상태관리 - 진행 중

<br/>

## 8. 구현하면서 어려웠던 점과 해결 방법 (Error handling)
### (2022-11-26) 비동기 API 호출하는 custom hook가 undefined를 return.
-  custom hook으로 비동기 작업 후 data를 return 해도, promise를 return한다는 것을 알게되었다.
#### 해결방법
- custom hook이 아닌, dataFetch 함수로 만들어서 사용했다.


## 9. 시행착오
### (2022-11-26) 상황 
- 미세먼지 데이터를 가져오는 방식에 대해서 처음 기획할때는, 렌더링시 모든 날씨 데이터를를 가져와서 특정 도시에 해당되는 미세먼지 날씨만 filter해서 데이터를 가져오려고 했다.
- 그러나 미세먼지 전체 데이터를 가져오는데 시간이 오래걸렸고, 특정 도시의 날씨를 보려면 다시 전체 데이터를 가져오게 되었다.
- 또 setInterval로 분마다 데이터 fetch하는 것으로 기획했는데, 미세먼지 전체 데이터를 가져오게 된다면 성능상으로도 좋지 않앗다.
### 
- 처음부터 전체 데이터를 가져오기 않고, 도시가 선택되면 해당 도시의 날씨 데이터만 가져오는 형식으로 변경했다.
