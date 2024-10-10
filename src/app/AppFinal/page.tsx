import { memo, useRef } from "react";
import "./page.css";

const AppFinal = memo(() => {
  const textareaRef = useRef(null);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // 높이를 초기화
    textarea.style.height = textarea.scrollHeight + "px"; // 내용에 맞춰 높이 재설정
  };

  return (
    <section className="final-page">
      <h1>Final Test</h1>
      <div>간단한 메모 애플리케이션 만들기</div>
      <div>목표: 상태를 이해하고, 사용할 수 있다.</div>
      <section>
        <form>
          <textarea
            ref={textareaRef}
            onInput={handleInput}
            style={{ overflow: "hidden", resize: "none" }}
          />
          <button type="button">초기화</button>
          <button type="button">저장</button>
        </form>
      </section>
    </section>
  );
});
AppFinal.displayName = "AppFinal";
export default AppFinal;
