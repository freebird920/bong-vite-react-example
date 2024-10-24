const Bong001 = () => {
  const myArray: string[] = ["봉원", "봉투", "봉삼"];
  const myFriend: string[] = ["친구원", "친구투", "친구쓰리"];
  function printAllArray(myArray: string[]) {
    return myArray.forEach(function (element, index) {
      console.log(index);
      console.log(element);
      return index;
    });
  }
  function printAllArrayMap(myArray: string[]) {
    return myArray.map(function (element, index) {
      console.log(index);
      console.log(element);
      return index;
    });
  }
  return (
    <>
      <h1>10월 24일 수업</h1>
      <pre>const myArray:string[] = ["봉원", "봉투", "봉삼"]</pre>
      <button
        onClick={() => {
          console.log(printAllArray(myArray));
        }}
      >
        눌리면 다 콘솔해버려!
      </button>
      <button
        onClick={() => {
          console.log(printAllArrayMap(myArray));
        }}
      >
        눌리면 다 콘솔해버려! 맵버전
      </button>

      {[<h1>원</h1>, <h1>투</h1>, <h1>쓰리</h1>]}
      {myFriend.map(function (element: string, index: number) {
        return <h1 key={index}>{element}</h1>;
      })}
    </>
  );
};
export default Bong001;
