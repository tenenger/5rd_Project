## 1. 목표
#### 상태관리 라이브러리인 redux  역량 강화를 위한 토이 프로젝트

<br/>

## 2. Demo
#### https://finedust-weather.netlify.app/

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
- 최초 작업 기간: 2022년 6월 19일(금) ~ 2022년 6월 22일(목) / (4일)
- 추가 작업 기간: 2022년 11월 24일(화) ~ 진행 중...

<br/>

## 5. 기술 스택
### 1차 추가 작업
![Typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![ReduxToolkit](https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
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
- API 쿼리 성능 최적화 : (2022-11-27) 작업완료
- API 쿼리 데이터를 redux로 상태관리 : (2022-11-27) 작업완료
- 전체적으로 refactoring - (2022-11-29) 작업완료
- 즐겨찾기 기능 구현 - (2022-11-29) 작업완료
- 1시간 마다 미세먼지 날씨 업데이트(API가 1시간 마다 업데이트 된다) - 진행 중
- 즐겨찾기에 추가된 구(군)을 localStorage에 저장해서, 나중에 브라우저를 열어도 유지 - 진행 중
- axios를 axios 인스턴스를 활용하여 refactoring 하기 - 진행 중
- styled-components -> emotion 으로 마이그레이션 - 진행 중
- react -> next.js 으로 마이그레이션 - 진행 중
- javscript -> typescript 으로 마이그레이션 - 진행 중

### 최초 작업
- geolocation API 호출하여 현재 위치의 위도와 경도 가져오기
- 카카오 맵 API 호출하여 현재 위도와 경도를 토대로 행정구역, 도시이름 가져오기
- 미세먼지 공공 API를 이용하여 행정구역에 해당되는 도시의 미세먼지 날씨 모두 가져오기
- 도시의 미세먼지 날씨를 UI에 표시하기(현재 위치, 행정 구역별 미세먼지 날씨)
- redux 라이브러리를 사용하지만, 실제로는 useState를 사용(나중에 작업 할 예정)
- 즐겨찾기 UI는 있지만, 실제 기능은 미구현(나중에 작업 할 예정)

<br/>

## 8. 구현하면서 어려웠던 점과 해결 방법 (Error handling)
### (2022-11-28) redux createAsyncThunk
-  redux toolkit에 비동기 처리를 하는 방법을 몰랐기에, 어떤 방법으로 해결해야하는지 몰랐다.
#### 해결방법
- redux toolkit 공식문서를 참고하여 createAsyncThunk를 활용해, redux store에 비동기 처리를 할 수 있게 되었다.

### (2022-11-28) 즐겨찾기 구현
- 즐겨찾기를 구현할 때, 구(군)에 해당 되는 날씨 데이터를 redux store에 저장할지, 구(군)을 redux store에 배열로 추가하고 전체 데이터를 불러올 때 filter를 할지 고민이 되었다.
#### 해결방법
- 기본적으로 날씨 어플은 시간이 지남에따라 업데이트가 되므로, 구(군)을 redux store에 배열로 추가하고 filter하기로 생각했다.
- 이를 통해, API 데이터가 업데이트 주기에 따라 날씨 업데이트를 해야겠다는 생각을 하게 되었다.

### (2022-11-26) 비동기 API 호출하는 custom hook가 undefined를 return.
-  custom hook으로 비동기 작업 후 data를 return 해도, promise를 return한다는 것을 알게되었다.
#### 해결방법
- custom hook이 아닌, dataFetch 함수로 만들어서 사용했다.

<br/>

## 9. 기록
### (2022-11-29)
- 27~29까지 작업한 내용을 git hub에 push를 진행하려고 했는데, 오류가 발생했다.
- 첫번째 오류는, 내가 작업한 파일이 LF 형식이어서 컴퓨터가 CRLF 형식으로 바꾼다고 Warning이 발생했다. 개발자는 맥OS, 리눅스, Windows를 사용하는데, 맥OS가 많이 쓰이기도 해서 LF 형식으로 그대로 둘 수 있게 <code>git config --global core.autocrlf input</code>를 입력해서 Warning을 제거햇다.
- 두번째 오류는 내가 이전에 master branch를 main branch로 이름을 변경 한 이후에 처음 push를 하기 때문에 발생하기도 했는데, 기존에 master branch로 컴퓨터가 기억하고 있어서 에러가 발생했다. 그래서 실제 branch는 없지만 참조하고 있는 branch를 삭제할 수 있도록 <code>git remote update origin --prune</code>를 입력해서 해결했다.
- 세번째 오류는 두번째 오류의 연속된 오류인데, master branch의 commit 기록이 사라졌기때문에 github의 commit과 내가 작업한 commit이 서로 연관이 없어서 컴퓨터가 push를 허용하지 않았다.(non-fast-forward) 그래서 <code>git pull origin master --allow-unrelated-histories</code>를 이용하여 서로 연관성이 없더라도 commit 할 수 있게 허용시켜줘서 해결했다.

### (2022-11-27)
- 기존에 만들었던 코드가 너무 지저분했다.(redux 데이터를 useState로 저장, 이해할 수 없는 변수명, 여러 컴포넌트에 사용되는 모달창 등)
- 주말밖에 시간이 없어서 refactoring을 주말에 하려고하는데, 주말 시간도 부족할거 같아 평일에도 조금씩 진행해야할거 같다.
- 작업 순서는 refactoring -> emotion migration -> next.js migration -> typescript migration 으로 진행할 예정이다.

### (2022-11-26)
- 미세먼지 데이터를 가져오는 방식에 대해서 처음 기획할때는, 렌더링시 모든 날씨 데이터를를 가져와서 특정 도시에 해당되는 미세먼지 날씨만 filter해서 데이터를 가져오려고 했다.
- 그러나 미세먼지 전체 데이터를 가져오는데 시간이 오래걸렸고, 특정 도시의 날씨를 보려면 다시 전체 데이터를 가져오게 되었다.
- 또 setInterval로 분마다 데이터 fetch하는 것으로 기획했는데, 미세먼지 전체 데이터를 가져오게 된다면 성능상으로도 좋지 않앗다.
- 처음부터 전체 데이터를 가져오기 않고, 도시가 선택되면 해당 도시의 날씨 데이터만 가져오는 형식으로 변경했다.
