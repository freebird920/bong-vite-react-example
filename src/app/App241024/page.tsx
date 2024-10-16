import { FormEvent, memo, useId, useState } from "react";

const App241024 = memo(() => {
  const compId = useId();
  function 일차방정식풀어주세요(a: number, b: number) {
    // 0 = a * x + b
    // x = (-1 * b) /a
    if (a == 0) {
      return null;
    }
    let x = (-1 * b) / a;
    return x;
  }
  /**
   * # 이차방정식을푸는데허수를몰라서곤란하기에그냥실근만구해버렸다
   * - **이 함수는?** a * x^2 + b * x + c = 0 의 근을 구하는 멋진 함수입니다.
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @returns
   */
  function 이차방정식을푸는데허수를배우지않아서곤란하기에그냥실근만구해버렸다(
    a: number,
    b: number,
    c: number
  ) {
    // 이차방정식의 판별식 사용해서 경우의 수
    const d = b ** 2 - 4 * a * c;

    const 정수부분 = (-1 * b) / (2 * a);
    const 제곱근부분 = Math.sqrt(d) / (2 * a);

    let result;
    if (d < 0) {
      result = null;
    } else if (d === 0) {
      result = [정수부분];
    } else if (d > 0) {
      result = [정수부분 + 제곱근부분, 정수부분 - 제곱근부분];
    } else {
      throw Error("뭔가 잘못됨");
    }

    return result;
  }

  const [해답, set해답] = useState<number[] | null | undefined>(undefined);
  const [일차방정식해, set일차방정식해] = useState<number | null | undefined>(
    undefined
  );

  const onForm1Submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const a = Number(formData.get("a1"));
    const b = Number(formData.get("b1"));
    const result = 일차방정식풀어주세요(a,b);
    set일차방정식해(result);



  };
  return (
    <>
      <h1>
        이차방정식을푸는데허수를배우지않아서곤란하기에그냥실근만구해버렸다
      </h1>

      <form key={`${compId}-form1`} onSubmit={onForm1Submit}>
        <input required={true} name="a1" />
        <label>*x</label>+
        <input required={true} name="b1" />
        <button type="submit">일차구해보십쇼</button>
      </form>
      <p>{일차방정식해 == undefined && "해보세요"}</p>
      <p>{일차방정식해 == null && "a 영 안됨"}</p>
      <p>{일차방정식해 && 일차방정식해}</p>
      <form
        key={`${compId}-form2`}
        onSubmit={(event) => {
          event.preventDefault(); // 괄호를 추가하여 preventDefault 함수 호출
          const formData = new FormData(event.currentTarget);
          const a = Number(formData.get("a"));
          const b = Number(formData.get("b"));
          const c = Number(formData.get("c"));
          const result =
            이차방정식을푸는데허수를배우지않아서곤란하기에그냥실근만구해버렸다(
              a,
              b,
              c
            );
          set해답(result);
        }}
      >
        <input name="a" type="number" required={true} />
        <label>* x^2 + </label>
        <input name="b" type="number" required={true} />
        <label>* x + </label>
        <input name="c" type="number" required={true} />
        <button type="submit">정답알려주세용</button>
      </form>
      {해답?.map((답: number, index: number) => {
        return <h1 key={index}>{답}</h1>;
      })}
      {해답 === null && <h1>실근이 없습니다</h1>}
    </>
  );
});

App241024.displayName = "App241024";
export default App241024;
