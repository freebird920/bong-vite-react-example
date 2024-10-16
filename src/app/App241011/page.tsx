function App241011() {
  function 콘솔에안녕() {
    console.log("안녕");
  }
  return (
    <>
      <h1>함수활용</h1>
      <h2>간단한안녕</h2>
      <p>함수를 만들고 버튼을 만들면 콘솔로 뜨는거</p>
      <p>브라우저에서 콘솔 띄우는 방법은</p>
      <p>
        <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>i</kbd> 눌려!
      </p>

      <button type="button" onClick={콘솔에안녕}>
        콘솔에안녕이라고써보는버튼
      </button>

      <h2>일차함수? 계산? </h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const a = Number(formData.get("a"));
          const b = Number(formData.get("b"));
          // ax + b  = 0
          // x = -b / a
          // x = (-1 * b ) / a

          if (a == 0) {
            console.log("a에 0 넣지 마셈");
            return;
          }
          
          const x = (-1 * b) / a;
          console.log(x);
        }}
      >
        <input name="a" placeholder="a" required={true} />x +
        <input name="b" placeholder="b" required={true} /> = 0 일때 x는?
        <button type="submit">계산</button>
        <button type="reset">초기화</button>
      </form>
    </>
  );
}

export default App241011;
