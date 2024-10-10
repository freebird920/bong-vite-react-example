import { useState } from "react";
import ResultClass from "../../classes/result_class";

export default function App241010() {
  const [count, setCount] = useState(0);

  function myFunction(myName: string): string {
    return `myName is ${myName}`;
  }

  //void 함수는 반환값이 없는 함수의 유형을 말해. void를 반환 타입으로 선언하면 해당 함수는 어떤 값도 반환하지 않고, 단순히 내부의 로직을 실행할 뿐이야.
  function onClickButton(): void {
    setCount(count + 1);
  }

  const myNewFunction: (myName: string) => ResultClass<boolean> = (
    myName: string
  ) => {
    const isMyName = myName === "my name";
    return new ResultClass<boolean>({
      data: isMyName,
      // error: new Error("myName is not correct"),
    });
  };

  if (myNewFunction("shit").isError) {
    throw myNewFunction("shit").error;
  }
  const myWords = myFunction("my name");

  return (
    <>
      <h1>BongCoder 24. 10. 10. 목요일</h1>
      <h2>What is my name?</h2>
      <p>{myWords}</p>

      <h2>Button Test App component</h2>
      <p>저는 버튼을 몇 번 눌렸습니까?</p>
      <p>아래에 보면 숫자가 나올겁니다? </p>
      <p>누른 횟수는 {count}입니다.</p>
      <button onClick={onClickButton}>나는 버튼입니다</button>

      <ButtonTest />
    </>
  );
}

function ButtonTest() {
  const [count, setCount] = useState(0);
  const onClickButton = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Button Test 'ButtonTest' Component</h2>
      <p>저는 버튼을 몇 번 눌렸습니까?</p>
      <p>아래에 보면 숫자가 나올겁니다? </p>
      <p>눌려진 횟수는 {count}입니다.</p>
      <button onClick={onClickButton}>나는 버튼입니다.</button>
    </>
  );
}
