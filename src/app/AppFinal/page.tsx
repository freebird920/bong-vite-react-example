// import css
import "./page.css";
import { memo, useId, useRef, useState } from "react";

class BongMemo {
  title: string;
  content: string;
  date: Date;
  constructor(title: string, content: string, date: Date) {
    this.title = title;
    this.content = content;
    this.date = date;
  }
}

const AppFinal = memo(() => {
  const compId = useId();
  const textareaRef = useRef(null);
  const [memoList, setMemoList] = useState<Array<BongMemo>>([]);
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // 높이를 초기화
    textarea.style.height = textarea.scrollHeight + "px"; // 내용에 맞춰 높이 재설정
  };

  function onFormKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
    switch (event.key) {
      case "Enter":
        event.preventDefault();
        if (event.shiftKey) {
          console.log("shift + enter");
        }
        break;
      case "Escape":
        event.preventDefault();
        event.currentTarget.reset();
        break;
    }
  }
  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const title = (form.elements.namedItem("memoTitle") as HTMLInputElement)
      .value;
    const content = (
      form.elements.namedItem("memoContent") as HTMLTextAreaElement
    ).value;
    const date = new Date();
    const newMemo = new BongMemo(title, content, date);
    setMemoList((memoList: Array<BongMemo>) => {
      const newMemoList: Array<BongMemo> = [...memoList]; // 기존 리스트 복사
      newMemoList.push(newMemo); // 새 메모 추가
      return newMemoList;
    });

    form.reset();
  }

  return (
    <section className="final-page">
      <h1>Final Test</h1>
      <div>간단한 메모 애플리케이션 만들기</div>
      <div>목표: 상태를 이해하고, 사용할 수 있다.</div>
      <section>
        <form onKeyDown={onFormKeyDown} onSubmit={onFormSubmit}>
          <div style={{ display: "flex" }}>
            <label htmlFor={`${compId}-memoTitle`}>제목</label>
            <input id={`${compId}-memoTitle`} name="memoTitle" />
          </div>
          <div style={{ display: "flex" }}>
            <label htmlFor={`${compId}-memoTitle`}>내용</label>
            <textarea
              id={`${compId}-memoContent`}
              name="memoContent"
              ref={textareaRef}
              onInput={handleInput}
              style={{ overflow: "hidden", resize: "none" }}
            />
          </div>
          <button type="reset">
            초기화(<kbd>Esc</kbd>)
          </button>
          <button type="submit">
            저장(<kbd>Shift</kbd> + <kbd>Enter</kbd>)
          </button>
        </form>
      </section>
      <section>
        <h2>메모 리스트</h2>
        <ul>
          {memoList.map((memo: BongMemo, index: number) => {
            return (
              <li key={index}>
                <h3>{memo.title}</h3>
                <p>{memo.content}</p>
                <p>{memo.date.toLocaleString()}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
});
AppFinal.displayName = "AppFinal";
export default AppFinal;
