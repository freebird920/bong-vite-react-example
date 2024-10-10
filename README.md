# Bong React Vite Jangin

![poster](./readme/posert_01.jpg)

- [Bong React Vite Jangin](#bong-react-vite-jangin)
  - [링크](#링크)
  - [2024. 10. 10. 목](#2024-10-10-목)
    - [웹애플리케이션이란?](#웹애플리케이션이란)
    - [javascript, html, css](#javascript-html-css)
      - [javascript](#javascript)
      - [html](#html)
      - [css](#css)
    - [vite](#vite)
    - [React.js](#reactjs)
    - [프로젝트 시작하기](#프로젝트-시작하기)
    - [./src/App.tsx](#srcapptsx)
    - [HTML 태그](#html-태그)
      - [상수](#상수)
      - [타입](#타입)
  - [2024. 10. 10. 목 숙제](#2024-10-10-목-숙제)
    - [github 회원가입](#github-회원가입)
    - [vscode 설치](#vscode-설치)
    - [node.js 설치](#nodejs-설치)
    - [git 설치](#git-설치)
    - [vite로 react 프로젝트 만들기](#vite로-react-프로젝트-만들기)
  - [들어가기](#들어가기)
    - [웹 프로그래밍으로 프로그래밍을 배우는 것의 장점](#웹-프로그래밍으로-프로그래밍을-배우는-것의-장점)
    - [JavaScript](#javascript-1)
    - [React](#react)
    - [Vite](#vite-1)
    - [TypeScript](#typescript)
  - [vite로 시작하기](#vite로-시작하기)
  - [React 시작하기](#react-시작하기)
  - [TypeScript와 함께하는 React](#typescript와-함께하는-react)
  - [학생들을 위한 예제 프로젝트](#학생들을-위한-예제-프로젝트)

![qrcode](./readme/bongcoder_kakao_qrcode.jpg)


## 링크
- [예제](https://bong-vite-react-example.pages.dev/)
- [카카오톡오픈채팅](https://open.kakao.com/o/gcyGpNmg)

## 숙제 2024. 10. 10. 목
  > 24학년도 2학기는 React.js를 이용해 간단한 웹 애플리케이션을 만드는 것을 목표로 합니다. 

### 웹애플리케이션이란?
  > 웹 애플리케이션은 **인터넷 브라우저**를 통해 접근할 수 있는 소프트웨어 어플리케이션이야. 데스크톱 애플리케이션처럼 특정 기기에 설치할 필요 없이 웹 서버에서 작동하고, 유저는 브라우저로 서버에 접속해서 사용할 수 있어. 예를 들어, 구글 문서, 페이스북, 유튜브 같은 것들이 전형적인 웹 애플리케이션이야.

즉, **브라우저**는 웹애플리케이션을 실행해주는 프로그램이고, 

우리가 만들 **웹애플리케이션**은 브라우저에서 실행되는 프로그램인거지.

### javascript, html, css
브라우저는 우리가 만들기
- `./src/App.tsx`에
    - App 이라는 이름의 react 컴포넌트 만들기
    - myName이라는 any 타입 변수 만들고 "이름쓰세요"저장
    - 저장된 myName 변수를 진짜 자기이름으로 변경
    - myName 변수를 console.log()로 출력
    - html 부분에서 `<h1></h1>` 태그로 myName 변수가 해당 페이지 나오게 하기.
    - hint: javascript 부분에서 선언한 변수 또는 상수의 이름을 `{}`안에 넣으면 html 부분에서 사용 가능하다.
        - ```tsx
          export default function App(){
            let titleName: string =  "제목입니다";
            return(
              <h1> {titleName} </h1>   
          )
          }
          ```
- [과제제출](https://forms.gle/BD7ungbiGpnR2HmF9)
- App.tsx 파일을 위 링크에 첨부하여 업로드 하세요.

## 들어가기
> React, Vite, TypeScript에 대해 설명하겠습니다. 이 세 가지 기술을 함께 사용하면 웹 개발이 매우 효율적이고 간편해집니다. 아래에 각 기술에 대한 간단한 소개를 추가합니다.

### 웹 프로그래밍으로 프로그래밍을 배우는 것의 장점

  - 즉각적인 피드백: 웹 개발은 코드 작성 후 바로 브라우저에서 결과를 확인할 수 있어 학습에 있어 즉각적인 피드백을 받을 수 있습니다.

  - 쉽게 접근 가능: 인터넷 연결만 있으면 어디서든 웹 개발 학습을 시작할 수 있으며, 다양한 무료 자료와 커뮤니티를 통해 도움을 받을 수 있습니다.

  - 실용적인 프로젝트: 웹 프로그래밍을 배우면 간단한 웹사이트나 애플리케이션을 직접 만들어볼 수 있어, 실제로 동작하는 결과물을 통해 성취감을 느낄 수 있습니다.

  - 풍부한 도구와 라이브러리: 웹 개발에는 React, Vite, TypeScript와 같은 다양한 도구와 라이브러리가 있어 학습 과정에서 더 많은 기능을 쉽게 구현할 수 있고, 이를 통해 개발 능력을 빠르게 향상시킬 수 있습니다.

  - 높은 수요: 웹 개발 기술은 IT 업계에서 높은 수요를 자랑하며, 취업 기회를 넓히는 데 도움이 됩니다.


[처음으로](#bong-react-vite-jangin)

