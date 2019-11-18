import React, { Component, useState, useEffect, useReducer } from "react";

// class MyEl extends Component {
//   state = {
//     count: 0,
//     setIner: null
//   };

//   componentDidMount() {
//     this.state.setIner = setInterval(() => {
//       this.setState({
//         count: this.state.count + 1
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.state.setIner);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World !</h1>
//         <h2>{this.state.count}</h2>
//       </div>
//     );
//   }
// }

// function MyEl() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const setInter = setInterval(() => {
//       setCount(c => c + 1); // setState 里面的 参数 是一个 但有返回值的函数
//     }, 1000);

//     return () => clearInterval(setInter);
//   }, []);

//   return (
//     <div>
//       <h1>Hello World !</h1>
//       <h2>{count}</h2>
//     </div>
//   );
// }

function countReducer(state, action) {
  switch (action.type) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

function MyEl() {
  // const [count, setCount] = useState(0);

  const [count, dispatchCount] = useReducer(countReducer, 0);

  useEffect(() => {
    const setInter = setInterval(() => {
      // setCount(c => c + 1); // setState 里面的 参数 是一个 但有返回值的函数
      dispatchCount({
        type: "minus"
      });
    }, 1000);

    return () => clearInterval(setInter);
  }, [count]);

  return (
    <div>
      <h1> Hello World! </h1> <h2> {count} </h2>{" "}
    </div>
  );
}

export default MyEl;
