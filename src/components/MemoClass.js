import { Component } from "react";

class MemoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memos: [{ id: 1, text: "내용" }],
      inputText: "",
      id: 2,
    };
  }

  onChange = (e) => {
    this.setState({ inputText: e.target.value });
    console.log(this.state.inputText);
  };

  addmemo = () => {
    this.setState({
      memos: [
        ...this.state.memos,
        { id: this.state.id, text: this.state.inputText },
      ],
    });
    this.setState({ id: this.state.id + 1 });
  };

  // 배열을 삭제하는 함수
  deleteMemo = (id) => {
    const nextMemo = this.state.memos.filter((memo) => memo.id !== id);
    this.setState({ memos: nextMemo });
  };

  render() {
    return (
      <div>
        <h1>메모-클래스형 컴포넌트</h1>
        <input type="text" onChange={this.onChange}></input>
        <button onClick={this.addmemo}>추가</button>
        <ul>
          {
            /** map을 이용한 li 반복 */
            this.state.memos.map((memo) => (
              <li key={memo.id}>
                {memo.text}
                <button
                  // 함수의 이름만 작성했을 때는 함수의 본문(블록)이 들어가지만
                  // 함수의 이름과 ()를 작성했을 경우 실행된 결과 값이 들어간다
                  // 안에 값을 넣어줬을 때는 익명함수로 감싸서 사용
                  onClick={() => {
                    this.deleteMemo(memo.id);
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
  }
}

export default MemoClass;
