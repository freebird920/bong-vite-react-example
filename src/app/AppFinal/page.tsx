// import css
import "./page.css";
import { memo, useCallback, useEffect, useId, useRef, useState } from "react";
import { IndexedService } from "./services/indexedService";
import { BongMemoObjectType } from "./schemas/BongMemoSchema";
import { MemoService } from "./services/memoService";
import DialogModal from "./components/DialogModal";

const MyApp = () => {
  const compId = useId();

  // useRefs
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [memoList, setMemoList] = useState<Array<BongMemoObjectType>>([]);

  // memo functions
  const getAllBongMemos = useCallback(async () => {
    const memoService = MemoService.getInstance();
    const result = await memoService.getAllMemo();
    const sortedResult = result.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    setMemoList(sortedResult);
  }, []);
  const addMemo = async (bongMemo: BongMemoObjectType) => {
    const memoService = MemoService.getInstance();
    const result = await memoService.addNewMemo(bongMemo);
    await getAllBongMemos();
    return result;
  };
  const deleteMemo = async (
    uuid: `${string}-${string}-${string}-${string}-${string}`
  ) => {
    const memoService = MemoService.getInstance();
    const result = await memoService.deleteMemo(uuid);
    await getAllBongMemos();
    return result;
  };
  const addMemoListener = (event: CustomEvent<BongMemoObjectType>) => {
    const newMemo = event.detail;
    addMemo(newMemo);
  };
  const deleteMemoListener = (
    event: CustomEvent<`${string}-${string}-${string}-${string}-${string}`>
  ) => {
    const uuid: `${string}-${string}-${string}-${string}-${string}` =
      event.detail;
    deleteMemo(uuid);
  };

  const onFormSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const title = (form.elements.namedItem("memoTitle") as HTMLInputElement)
        .value;
      const content = (
        form.elements.namedItem("memoContent") as HTMLTextAreaElement
      ).value;
      const date = new Date();
      const newMemo: BongMemoObjectType = {
        id: crypto.randomUUID(),
        date: date,
        content: content,
        title: title,
      };
      handleAddButtonClick(newMemo);

      form.reset();
    },
    []
  );

  // 핸들러
  // 핸들러
  const handleAddButtonClick = useCallback((newMemo: BongMemoObjectType) => {
    const event = new CustomEvent("memoAdded", { detail: newMemo });
    window.dispatchEvent(event);
  }, []);

  const handleDeleteButtonClick = useCallback(
    (uuid: `${string}-${string}-${string}-${string}-${string}`) => {
      const event = new CustomEvent("memoDelete", { detail: uuid });
      window.dispatchEvent(event);
    },
    []
  );
  const handleAllClean = async () => {
    const indexedService = new IndexedService();
    const result = await indexedService.clearStore("bongDb", "bongMemo");
    await getAllBongMemos();
    return result;
  };
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // 높이를 초기화
    textarea.style.height = textarea.scrollHeight + "px"; // 내용에 맞춰 높이 재설정
  };
  useEffect(() => {
    // 메모 로드
    getAllBongMemos();
    // 이벤트리스너 추가
    window.addEventListener("memoAdded", addMemoListener as EventListener);
    window.addEventListener("memoDelete", deleteMemoListener as EventListener);
    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => {
      window.removeEventListener("memoAdded", addMemoListener as EventListener);

      window.removeEventListener(
        "memoDelete",

        deleteMemoListener as EventListener
      );
    };
  }, []);

  return (
    <section className="final-page">
      <h1>Final Test</h1>
      <div>간단한 메모 애플리케이션 만들기</div>
      <div>목표: 상태를 이해하고, 사용할 수 있다.</div>

      <section className="custom-form-div">
        <form
          id={`${compId}-form-memo`}
          onSubmit={onFormSubmit}
          ref={formRef}
        ></form>
        <label htmlFor={`${compId}-memoTitle`}>제목</label>
        <input
          form={`${compId}-form-memo`}
          id={`${compId}-memoTitle`}
          name="memoTitle"
          required={true}
        />
        <label htmlFor={`${compId}-memoContent`}>내용</label>
        <textarea
          required={true}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            switch (e.key) {
              case "Enter":
                if (e.shiftKey) {
                  e.preventDefault;
                  // formRef.current?.submit() ;
                  submitButtonRef.current?.click();
                  // e.currentTarget;
                }
                break;
              case "Escape":
                e.preventDefault;
                formRef.current?.reset();
                break;
              default:
                break;
            }
          }}
          placeholder="내용을 입력하세요."
          form={`${compId}-form-memo`}
          id={`${compId}-memoContent`}
          name="memoContent"
          ref={textareaRef}
          onInput={handleInput}
          style={{ overflow: "hidden", resize: "none" }}
        />
        <button
          form={`${compId}-form-memo`}
          className="custom-form-button"
          type="reset"
        >
          초기화(<kbd>Esc</kbd>)
        </button>
        <button
          type="submit"
          form={`${compId}-form-memo`}
          className="custom-form-button"
          ref={submitButtonRef}
        >
          저장(<kbd>Shift</kbd> + <kbd>Enter</kbd>)
        </button>
      </section>
      <section>
        <h2>메모 리스트</h2>

        <button type="button" onClick={handleAllClean}>
          초기화
        </button>
        <ul className="memo-list-ul">
          {memoList.map((memo: BongMemoObjectType, index: number) => {
            return (
              <li className="memo-list-li" key={`${compId}-list-${index}`}>
                <details>
                  <summary>
                    [{memoList.length - index}] 제목:{memo.title} (자세히)
                  </summary>
                  <p>{memo.id}</p>
                  <p>{memo.date.toLocaleString()}</p>
                  <p>{memo.content}</p>
                </details>
                <DialogModal openButton={<button>수정버튼</button>}>
                  {<div>수졍용</div>}
                </DialogModal>
                <button
                  type="button"
                  onClick={() => {
                    handleDeleteButtonClick(memo.id);
                  }}
                >
                  삭제용
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
const AppFinal = memo(MyApp);
AppFinal.displayName = "AppFinal";
export default AppFinal;
