import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const ADD = "ADD";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log("action", action);
  const { type } = action;
  switch (type) {
    case ADD:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

// ============

function Index({ counter, add }) {
  console.log(add);
  return (
    <div>
      <h1>this is index page</h1>
      <h2>{counter}</h2>
      <button onClick={() => add()}>点击我试试</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: num => {
      console.log(111);
      dispatch({ type: "ADD" });
    }
  };
}

const IndexConnect = connect(mapStateToProps, mapDispatchToProps)(Index);

export default () => {
  return (
    <div>
      <Provider store={store}>
        <div>Hello World !</div>
        <IndexConnect />
      </Provider>
    </div>
  );
};
