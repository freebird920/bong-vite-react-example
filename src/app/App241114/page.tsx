import { ChangeEvent, useCallback, useState } from "react";

const App241114 = () => {
  const [numberA, setNumberA] = useState<number>(0);
  const [numberB, setNumberB] = useState<number>(0);
  const [myAnswer, setMyAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<string>("시~작");
  const [consumedTime, setConsumedTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const startTimer = useCallback(() => {
    const timer = setInterval(() => {
      setConsumedTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const getRandomNumber = useCallback(async () => {
    const randomorgUrl = `https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new`;
    const response = await fetch(randomorgUrl);
    const randomNumber = await response.text();
    if (isNaN(Number(randomNumber))) throw new Error("IS_NAN");
    return Number(randomNumber);
  }, []);

  const writeRandomNumbers = async () => {
    if (!isRunning) {
      startTimer();
    }
    const getNumberA = await getRandomNumber();
    const getNumberB = await getRandomNumber();
    setNumberA(getNumberA);
    setNumberB(getNumberB);
    setConsumedTime(0);
    setIsRunning(true);
  };
  return (
    <>
      <h1>덧셈 대회</h1>
      <div>
        <p>문제입니다.</p>
        <p>
          {numberA ?? "??"} + {numberB ?? "??"} ={" "}
          <input
            placeholder="정답입력바람"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setMyAnswer(event.currentTarget.value)
            }
            value={myAnswer}
          ></input>
        </p>
      </div>
      <div>{consumedTime}초 경과</div>
      <div>{isCorrect}</div>
      <div>
        <div>
          <button
            onClick={async () => {
              if (Number(myAnswer) === numberA + numberB) {
                setIsCorrect(
                  `오 정말 대단하군요.${numberA} + ${numberB} 이거 계산하는데 무려 ${consumedTime}초 걸렸습니다. 다음문제 푸세요`
                );
                await writeRandomNumbers();
              } else {
                setIsCorrect("산수이슈발생");
              }
            }}
          >
            {isRunning ? "제출" : "눌려서 시작"}
          </button>
        </div>
      </div>
    </>
  );
};
export default App241114;
