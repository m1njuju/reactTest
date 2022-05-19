import { useRef, useState } from "react";

const MemoList = () => {
  const inputRef = useRef(null);
  const [inputId, setInputId] = useState(3);
  const [inputText, setInputText] = useState("");
  const [memo, setMemo] = useState([
    { id: 1, text: "내용" },
    { id: 2, text: "메모를 만들었습니다" },
  ]);

  // input값을 가져오는 함수
  const changeText = (e) => {
    setInputText(e.target.value);
  };

  // input값을 배열에 추가하는 함수
  const getText = (e) => {
    if (inputText) {
      const nextMemo = memo.concat({
        id: inputId,
        text: inputText,
      });
      setMemo(nextMemo);
      setInputId(inputId + 1);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  // 배열을 삭제하는 함수
  const deleteMemo = (id) => {
    const nextMemo = memo.filter((m) => m.id !== id);
    setMemo(nextMemo);
  };

  // 스타일
  const btnStyle = {
    borderRadius: "50px",
    backgroundColor: "grey",
    border: "inherit",
    color: "white",
  };

  return (
    <div>
      <h1>메모</h1>
      <input type="text" ref={inputRef} onChange={changeText}></input>
      <button onClick={getText}>추가</button>
      <ul>
        {memo.map((m) => (
          <li key={m.id}>
            {m.text}
            <button
              style={btnStyle}
              onClick={() => {
                deleteMemo(m.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoList;
