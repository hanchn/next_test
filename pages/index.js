import { createStore } from "redux";
import { Provider } from "react-redux";

const ADD = "ADD";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default () => {
  return (
    <div>
      <Provider store={store}>
        <div>Hello World !</div>
      </Provider>
    </div>
  );
};
