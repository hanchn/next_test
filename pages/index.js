import React from "react";

const Test = ({ children }) => <div>{children}</div>;

function Son({ children }) {
  return (
    <div>
      <h1>This is my Son !</h1>
      <h2>{children}</h2>
    </div>
  );
}

export default () => {
  return (
    <div>
      <h1> This is Parent</h1>
      <Son children={"test my son"}>
        <Test>{"testMe"}</Test>
      </Son>
    </div>
  );
};
