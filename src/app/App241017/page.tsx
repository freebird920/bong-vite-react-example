import { memo, useRef, useState } from "react";

const App241017 = memo(() => {
  const [result1, setResult1] = useState<number | string | undefined>();
  const button1Ref = useRef<HTMLButtonElement>(null);
  async function getRandomNumber() {
    button1Ref.current!.disabled = true;
    setResult1("로딩 중...");
    const response = await fetch(
      "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
    );
    const randomNumber = await response.text();
    if (isNaN(Number(randomNumber))) throw new Error("IS_NAN");
    return randomNumber;
    button1Ref.current!.disabled = false;
    setResult1(parseInt(randomNumber));
  }
  return (
    <>
      <h1>fetch API를 이용한 http 요청</h1>
      <p>
        {`https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new`}
      </p>
      <p>
        random.org의 API로 get 요청을 보내 1부터 100까지의 난수를 발생시키는
        예제입니다.
      </p>

      <button ref={button1Ref} type="button" onClick={getRandomNumber}>
        get 요청 보내기
      </button>
      <label htmlFor="result1">결과: </label>
      <input
        name="result1"
        id="result1"
        type="text"
        defaultValue={result1}
        readOnly={true}
      />
    </>
  );
});

App241017.displayName = "App241017";
export default App241017;
