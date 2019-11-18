import React, { Component, useContext, createContext } from "react";

const MyElContext = createContext({});

function ElA() {
  const { userName } = useContext(MyElContext);
  return (
    <div>
      <h2>这是子组件ElA</h2>
      <h3>{userName}</h3>
    </div>
  );
}

function ElB() {
  const { userName } = useContext(MyElContext);
  return (
    <div>
      <h2>这是子组件ElB</h2>
      <h3>{userName}</h3>
    </div>
  );
}

class MyEl extends Component {
  render() {
    return (
      <div>
        <h1> test my Context </h1>
        <MyElContext.Provider value={{ userName: "三日老师" }}>
          <ElA />
          <ElB />
        </MyElContext.Provider>
      </div>
    );
  }
}

export default MyEl;
