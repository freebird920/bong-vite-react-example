import { memo } from "react";

const HomePage = memo(() => {
  return (
    <>
      <h1>봉우리코더</h1>

      <h2>Git Hub Repository</h2>
      <a href="https://github.com/freebird920/bong-react-vite-jangin">
        봉우리코더 프로젝트 리포지토리
      </a>

      <h2>예제</h2>
      <a href="/241010">241010</a>
    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
