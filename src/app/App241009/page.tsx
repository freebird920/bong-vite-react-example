export default function App241009() {
  function printHello() {
    console.log("Hello");
  }
  let myCounter: any = 0;
  function addCounter() {
    return myCounter++;
  }


  return (
    <>
      <h1>함수, 변수 그리고 console.log 연습</h1>

      <h2>목표</h2>
      <p>함수와 변수를 이해하고, 사용할 수 있다.</p>
      <p>팡?션 써도 괜찮습니다.</p>

      <h2>변수란?</h2>
      <p>변수는 값을 저장하는 것입니다.</p>
      <p>변수는 다음과 같이 선언합니다.</p>
      <p>{`let 변수이름 = 값;`}</p>

      <h2>상수</h2>
      <p>상수는 값을 한번만 저장하는 변수입니다.</p>
      <p>상수는 다음과 같이 선언합니다.</p>
      <p>{`const 상수이름 = 값;`}</p>

      <h2>함수란?</h2>
      <p>함수는 입력값을 받아서 출력값을 내보내는 것입니다.</p>
      <p>함수는 다음과 같이 선언합니다.</p>
      <p>{`function 함수이름(입력값) {`}</p>
      <p>{`  // 함수 내용`}</p>
      <p>{`}`}</p>

      <h2>함수를 선언하는 다른 방법: 화살표 함수</h2>
      <p>화살표 함수는 다음과 같이 선언합니다.</p>
      <p>{`const 함수이름 = (입력값) => {`}</p>
      <p>{`  // 함수 내용`}</p>
      <p>{`}`}</p>

      <h2>익명함수</h2>
      <p>익명함수는 이름이 없는 함수입니다.</p>
      <p>익명함수는 변수에 저장할 수 도 있고 한 번 만 쓸 때 유용합니다..</p>
      <p>익명함수는 다음과 같이 선언합니다.</p>
      <p>{`function(입력값) {`}</p>
      <p>{`  // 함수 내용`}</p>
      <p>{`}`}</p>
      <p>{`(입력값) => {`}</p>
      <p>{`  // 함수 내용`}</p>
      <p>{`}`}</p>

      <h2>console.log</h2>
      <p>console.log는 콘솔에 로그를 출력하는 함수입니다.</p>
      <p>
        브라우저에서 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>i</kbd>입력하면
        디버그 도구가 뜨고 거기서 콘솔을 찾아서 누르세요
      </p>

      <h2>버튼에 기능 넣기</h2>
      <p>
        버튼 태그에 onClick 속성을 지정하면 버튼 눌렸을 때의 동작을 설정할 수
        있다.{" "}
      </p>
      <p>{`<button onClick={함수}> 버튼이름 </button>`}</p>
      <p>
        예를 들어, react 컴포넌트의 return 앞에서 다음과 같이 함수를 만들어서
        넣을 수 있다.
      </p>
      <p>{`function printHello() {`}</p>
      <p>{`<button onClick={printHello}> 버튼이름 </button>`}</p>
      <button onClick={printHello}>누르고 콘솔 확인</button>

      <h2>버튼에 기능 넣기2</h2>
      <p>{`onClick={}`} 안에서 함수를 선언할 수도 있다.</p>
      <p>{`onClick={function(){console.log("Hello2")}}`}</p>
      <button
        onClick={function () {
          console.log("Hello2");
        }}
      >
        누르고 확인
      </button>
      <h2>버튼에 기능 넣기3</h2>
      <p>{`onClick={}`} 안에서 화살표 함수를 쓸 수도 있다. </p>
      <p>{`onClick={()=>{console.log("Hello3")}}`}</p>
      <button
        onClick={() => {
          console.log("Hello3");
        }}
      >
        누르고 확인
      </button>

      <h3>함수 응용</h3>
      <p>{myCounter}</p>
      <button onClick={addCounter}>counter 올리기</button>
      <button
        onClick={() => {
          console.log(myCounter);
        }}
      >
        숫자 확인하기
      </button>
    </>
  );
}
