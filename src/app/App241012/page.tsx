import { memo, useState } from "react";
import "./page.css";

type CoordinateType = {
  x: number;
  y: number;
};

const App241012 = memo(() => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  // 함수의 기울기(a)와 y절편(b)를 정의합니다.
  // const a = 1; // 기울기
  // const b = 0; // y절편

  const xLength = 101;
  const yLength = 101;

  const centerX = Math.floor(xLength / 2);
  const centerY = Math.floor(yLength / 2);

  // 좌표 배열을 함수에 맞게 생성합니다.
  const coordinate: Array<CoordinateType> = [];

  // x 좌표의 범위를 설정합니다.
  const xStart = -50;
  const xEnd = 50;

  for (let x = xStart; x <= xEnd; x++) {
    const y = a * x + b;
    // y 값이 그래프 범위 내에 있는지 확인합니다.
    if (y >= -50 && y <= 50) {
      coordinate.push({ x, y });
    }
  }

  // 그래프를 그리기 위한 2차원 배열을 생성합니다.
  let graphLines = [];

  for (let indexY = 0; indexY < yLength; indexY++) {
    let line = "";
    for (let indexX = 0; indexX < xLength; indexX++) {
      // 화면 좌표를 그래프 좌표로 변환
      const x = indexX - centerX;
      const y = centerY - indexY;

      // 중심점 표시
      if (indexX === centerX && indexY === centerY) {
        line += "★";
      }
      // 좌표 배열에 현재 좌표가 있는지 확인
      else if (coordinate.some((point) => point.x === x && point.y === y)) {
        line += "●"; // 함수의 점
      }
      // x축 표시
      else if (indexY === centerY) {
        line += "☆";
      }
      // y축 표시
      else if (indexX === centerX) {
        line += "☆";
      }
      // 그 외의 점
      else {
        line += "○";
      }
    }
    graphLines.push(line);
  }

  const graphText = graphLines.join("\n");

  // graphText를 줄 단위로 분리
  const lines = graphText.split("\n");

  // 각 문자를 고정된 크기의 div로 감싸는 함수
  const renderGraph = () => {
    return (
      <>
        <div>
          <input
            value={a}
            type="number"
            onChange={(event) => {
              setA(Number(event.currentTarget.value));
            }}
          />
          <input
          type="number"
            value={b}
            onChange={(event) => {
              setB(Number(event.currentTarget.value));
            }}
          />
        </div>
        <div className="graph-container">
          {lines.map((line, rowIndex) => (
            <div className="graph-row" key={rowIndex}>
              {[...line].map((char, colIndex) => (
                <div className="graph-cell" key={colIndex}>
                  {char}
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <h1>{`y = ${a}x + ${b} 그래프 그리기`}</h1>
      <section>{renderGraph()}</section>
    </>
  );
});

App241012.displayName = "App241012";
export default App241012;
