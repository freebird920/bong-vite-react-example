import { memo } from "react";

const HomePage = memo(() => {
  return (
    <>
      <h1>봉우리코더</h1>

      <h2>예제</h2>
      <a href="/241010">241010</a>
    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
