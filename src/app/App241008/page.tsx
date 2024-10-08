export default function App241008() {
  
  return (
    <>
      <h1>html과 친해지기</h1>

      <h2>목표</h2>
      <p>html 태그를 이해하고, 사용할 수 있다.</p>

      <h2>a 태그 연습</h2>
      <ol>
        <li>
          <a href="https://www.naver.com">네이버</a>
        </li>
        <li>
          <a href="https://www.google.com">구글</a>
        </li>
      </ol>

      <h2>form, input, button</h2>
      <form>
        <input></input>
        <button>전송</button>
      </form>

      <h2>div - 그냥 상자 같은거로 CSS 연습</h2>
      <div>div 안의 글자 아무 서식 없는 상태</div>
      <div style={{ backgroundColor: "gray" }}>
        div 배경에 색깔 넣음
        {`<div style={{ backgroundColor: "gray" }}>내용</div>`}
      </div>
      <div style={{ backgroundColor: "blue" }}>
        div 배경에 색깔 넣음
        {`<div style={{ backgroundColor: "blue" }}>내용</div>`}
      </div>
      <div style={{ backgroundColor: "yellowgreen" }}>
        div 배경에 색깔 넣음
        {`<div style={{ backgroundColor: "yellowgreen" }}>내용</div>`}
      </div>

      <h2>div상자 안의 상자, 바깥 상자는 yellowgreen</h2>
      <div style={{ backgroundColor: "yellowgreen" }}>
        <div style={{ border: "solid" }}>
          div1 {`<div style={{border: "solid"}}>`}
        </div>
        <div>div2</div>
        <div style={{ border: "dashed" }}>
          div3 {`<div style={{border: "dashed"}}>`}
        </div>
      </div>

      <h2>위에거랑 같은 상자, 그런데 가로로 배치 ㄱㄱ</h2>
      <p>{`<div style={{ backgroundColor: "yellowgreen", display: "flex" }}>`}</p>
      <div style={{ backgroundColor: "yellowgreen", display: "flex" }}>
        <div style={{ border: "solid" }}>
          div1 {`<div style={{border: "solid"}}>`}
        </div>
        <div>div2</div>
        <div style={{ border: "dashed" }}>
          div3 {`<div style={{border: "dashed"}}>`}
        </div>
      </div>
    </>
  );
}
