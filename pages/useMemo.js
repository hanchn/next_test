import React, {
  useEffect,
  useState,
  useReducer,
  memo,
  useMemo,
  useCallback,
  useRef
} from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "plus":
      return state + 1;
    default:
      return state;
  }
}

const Son = memo(() => {
  const inpRef = useRef();
  console.log("我们重新渲染了子组件Son！");
  const [count, dispatchCount] = useReducer(countReducer, 0);
  useMemo(() => {
    console.log(`当前的count值为：${count}`);
  }, [count]);
  const [sonInp, setSonInp] = useState("Hello Son !");

  const handleCount = useCallback(
    () =>
      dispatchCount({
        type: "plus"
      }),
    [dispatchCount]
  );

  const handOnChange = useCallback(e => setSonInp(e.target.value, [sonInp]));

  useEffect(() => {
    console.log("输出当前的inpRef： ", inpRef);
  }, []);

  return (
    <div>
      <h2>这是一个子组件的输入框</h2>
      <input ref={inpRef} onChange={handOnChange} value={sonInp} />
      <h2> 点击这个按钮 我们可以进行数据的运算， 当前的值为 {count} </h2>{" "}
      <button onClick={handleCount}> {`点击我得到新的值：${count}`} </button>{" "}
    </div>
  );
});

function Per() {
  const [inp, setInp] = useState("Hello World !");
  return (
    <div>
      <h1> {inp} </h1>{" "}
      <input onChange={e => setInp(e.target.value)} value={inp} /> <br />
      <br />
      <Son />
    </div>
  );
}

export default Per;
