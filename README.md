# 배포
https://lucky-haupia-f8bbac.netlify.app/

<br/>

## 1. 실행 방법

```
yarn start
```

<br/>

## 2. 프로젝트 소개

- 여름의 불청객인 미세먼지 농도를 지역별로 파악하여, 대비하기 위해 프로젝트 개발 착수.
- 기간: 22년 6월 19일(금) ~ 22년 6월 22일(목) / (4일)

<br/>

## 3. 기술 스택

![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
![Styledcomponents](https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=Styledcomponents&logoColor=white)

<br/>

## 4. 커밋 컨벤션

| commit   | 사용 예시         |
| -------- | ----------------  |
| feat     | 새로운 기능 추가  |
| refactor | 리팩토링          |
| fix      | 버그 수정         |
| Design   | CSS 스타일링      |
| docs     | 문서 수정         |
| remove   | 파일 삭제         |
| chore    | 패키지 매니저 수정 |
| deploy   | 배포              |

<br/>

## 5. 미구현 기능 및 진행할 리팩토링
1. 즐겨찾기 기능 구현
2. API 쿼리 성능 최적화
3. API 쿼리 데이터를 redux로 상태관리

<br/>

## 6. 구현하면서 어려웠던 점과 해결 방법 (Error handling)
### 비동기 API 호출을 했음에도, 쿼리 데이터가 undefined로 얻어지는 현상

undefined로 얻은 이유를 찾아보니, API 호출시 return하는 값이 없어서 비동기 처리가 안되었다.

`new Promise(resolve, reject){...}`를 이용하여, 해당 API 호출시 비동기 처리했다.

해당 오류 및 해결방법에 대해, 추후에 같은 상황에 시간을 낭비하는 것을 방지하기 위해 블로그에 포스트했다.
https://2mojurmoyang.tistory.com/205

<br/>

## 7. 뜻 깊은 점
### Redux 첫 사용

React의 hook을 이용하지 않고 상태관리를 redux를 이용했다.

특히, redux toolkit을 이용하여, 최신버전의 redux를 사용하고자 노력했다.

다만 아쉬운점은, API 쿼리 데이터를 redux를 이용하여 상태관리를 하지 못한점이 기억에 남는다.

왜냐하면, redux 비동기처리하는 방법을 숙지하지 못했기때문이다.

<br/>

### Kakao map 첫 사용

카카오 맵을 이용하여, 사용자의 위치의 데이터를 얻어 사용자 지역의 미세먼지를 바로 보여주도록 했다.

Kakao map을 사용하는 방법이 어려웠다. 특히, javascript sdk 파일이 어디있는지 몰라서 시간을 많이 잡아먹었다.

Kakao map은 1일 응답량이 제한되어 있는데, 어쩌다 무제한으로 API를 호출하는 바람에 제한량을 넘는 리소스를 요청해서, 의도치않게 하루동안 개발을 강제로 쉬게되었다.

<br/>

### Loading Modal 첫 사용

기존에는 모달창 대신, 화면에 Loading...이라는 글귀만 나타나도록 개발을 진행했었는데 이번에는 로딩 모달창을 사용했다.

비록 내가 직접 로딩 모달창을 만든것이 아니라, 인터넷에 무료로 떠다니는 코드를 사용했지만, 처음 로딩 모달창을 사용하는 것에 의의를 둔다.
