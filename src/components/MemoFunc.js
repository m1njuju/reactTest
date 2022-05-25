import { useRef, useState } from "react";

const MemoFunc = () => {
  const inputRef = useRef(null);
  //const [inputId, setInputId] = useState(3);
  const [inputText, setInputText] = useState("");
  const [memos, setMemos] = useState([{ id: 1, text: "내용" }]);
  const [id, setId] = useState(2);

  // input값을 가져오는 함수
  const onChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  // input값을 배열에 추가하는 함수
  /*const addmemo = (e) => {
    if (inputText) {
      const nextMemo = memos.concat({
        id: inputId,
        text: inputText,
      });
      setMemos(nextMemo);
      setInputId(inputId + 1);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };*/

  const addmemo = () => {
    setMemos([...memos, { id: id, text: inputText }]);
    setId(id + 1);
  };

  // 배열을 삭제하는 함수
  const deleteMemo = (id) => {
    const nextMemo = memos.filter((memo) => memo.id !== id);
    setMemos(nextMemo);
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
      <h1>메모-함수형 컴포넌트</h1>
      <input type="text" ref={inputRef} onChange={onChange}></input>
      <button onClick={addmemo}>추가</button>
      <ul>
        {
          /** map을 이용한 li 반복 */
          memos.map((memo) => (
            <li key={memo.id}>
              {memo.text}
              <button
                style={btnStyle}
                // 함수의 이름만 작성했을 때는 함수의 본문(블록)이 들어가지만
                // 함수의 이름과 ()를 작성했을 경우 실행된 결과 값이 들어간다
                // 안에 값을 넣어줬을 때는 익명함수로 감싸서 사용
                onClick={() => {
                  deleteMemo(memo.id);
                }}
              >
                X
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MemoFunc;
