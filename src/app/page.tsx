import { memo } from "react";

const HomePage = memo(() => {
  return (
    <>
      <h1>봉우리코더</h1>

      <h2>Git Hub Repository</h2>
      <a href="https://github.com/freebird920/bong-vite-react-example">
        봉우리코더 프로젝트 리포지토리 바로가기
      </a>

      <h2>예제</h2>
      <ol>
        <li>
          <a href="/241008">241008 html과 친해지기</a>
        </li>
        <li>
          <a href="/241009">241009 변수, 상수, 함수</a>
        </li>
        <li>
          <a href="/241010">241010</a>
        </li>
      </ol>
    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
