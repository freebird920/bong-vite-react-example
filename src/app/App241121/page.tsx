import { useState, useEffect, useMemo } from "react";
import "./page.css";
const App = () => {
  const [position, setPosition] = useState([0, 1]); // [row, col]
  const myMap = useMemo(() => {
    return [
      ["", "", "", "", "", ""],
      ["▲", "", "", "", "", ""],
      ["■", "■", "■", "■", "■", "■"],
    ];
  }, []);

  // 키보드 이벤트 등록 및 해제
  useEffect(() => {
    // 플레이어 이동 함수
    const movePlayer = (direction: string) => {
      setPosition(([row, col]) => {
        switch (direction) {
          case "up":
            return [Math.max(0, row - 1), col];
          case "down":
            return [Math.min(myMap.length - 1, row + 1), col];
          case "left":
            return [row, Math.max(0, col - 1)];
          case "right":
            return [row, Math.min(myMap[0].length - 1, col + 1)];
          default:
            return [row, col];
        }
      });
    };
    // 키보드 이벤트 핸들러
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      switch (event.key) {
        case "ArrowUp":
          movePlayer("up");
          break;
        case "ArrowDown":
          movePlayer("down");
          break;
        case "ArrowLeft":
          movePlayer("left");
          break;
        case "ArrowRight":
          movePlayer("right");
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [myMap]);

  return (
    <div className="w-fit grid grid-rows-3 ">
      {myMap.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-6">
          {row.map((cell, cellIndex) => {
            const isPlayerPosition =
              rowIndex === position[0] && cellIndex === position[1];

            return (
              <div
                key={cellIndex}
                className={` w-8 h-8 flex items-center justify-center ${
                  cell === "■" ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {isPlayerPosition ? "★" : cell}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default App;
