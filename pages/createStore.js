import { createStore } from "redux";

const initialState = {
  count: 0
};

const ADD = "ADD";
const MINUS = "MINUS";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1
      };
    case MINUS:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    countReducer: reducer
  }),
  {
    initialState
  }
); // 创建一个store
console.log("store", store);
console.log(store.getState());
function handleClick() {
  store.dispatch({ type: "ADD" }); // store中某个指令
}
store.subscribe(() => {
  console.log(store.getState());
});

export default () => (
  <div>
    <button onClick={handleClick}>点击我试试</button>
  </div>
);
