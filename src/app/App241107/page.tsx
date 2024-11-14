import { useRef, useState } from "react";

const App241107 = () => {
  console.log("render");
  const [memoItems, setMemoItems] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <label>쓰는칸</label>
      <input
        ref={inputRef}
        // value={inputValue}
        // onChange={(event) => setInputValue(event.currentTarget.value)}
      />
      <button
        type="button"
        onClick={() => {
          console.log(memoItems);
        }}
      >
        눌려
      </button>
      <button
        onClick={() => {
          const newItem = {
            title: inputRef.current?.value,
            content: "내용",
            created: new Date().toISOString(),
          };
          setMemoItems([...memoItems, newItem]);
        }}
      >
        추가하셈
      </button>
      {memoItems.map((element) => {
        return <div key={element.created}>{element.title}</div>;
      })}
    </>
  );
};
export default App241107;
