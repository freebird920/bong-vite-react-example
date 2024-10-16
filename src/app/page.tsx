import { memo } from "react";

const HomePage = memo(() => {
  return (
    <>
      <h1>봉우리코더</h1>

      <h2>Git Hub Repository</h2>
      <a href="https://github.com/freebird920/bong-vite-react-example">
        봉우리코더 프로젝트 리포지토리 바로가기
      </a>
      <h2>숙제</h2>
      <ol>
        <li>
          <a href="/hw241010">241010숙제</a>
        </li>
      </ol>
      <h2>예제</h2>
      <ol>
        <li>
          <a href="/241008">241008 html과 친해지기</a>
        </li>
        <li>
          <a href="/241009">241009 변수, 상수, 함수</a>
        </li>
        <li>
          <a href="/241010">241010 useState와 상태</a>
        </li>
        <li>
          <a href="/241011">241011 함수 응용</a>
        </li>
        <li>
          <a href="/241017">241017 fetch</a>
        </li>
        <li>
          <a href="/241024">241024 </a>
        </li>
        <li>
          <a href="/final">최종과제(아직 만드는 중)</a>
        </li>
      </ol>
    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
