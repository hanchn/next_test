import { createStore, combineReducers } from "redux";

// 更改count

// initialState
const initialCount = {
  count: 0
};

// action
const ADD = "ADD";

// countReducer

function countReducer(state = initialCount, action) {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
}

// 修改user

// initialState
const initialUser = {
  user: ["三日"]
};

// action
const ADD_USER = "ADD_USER";

// countReducer

function userReducer(state = initialUser, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        count: [...state.user, "测试"] // 我们会给数组添加一个值
      };
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    count: countReducer,
    user: userReducer
  }),
  {
    initialCount,
    initialUser
  }
);

console.log("store", store);
console.log("store.getState", store.getState());

const handleClick = function() {
  store.dispatch({ type: "ADD" });
  console.log("store.getState2 ", store.getState());
};

export default () => (
  <div>
    <button onClick={handleClick}>点击我测试一下数据的变化</button>
  </div>
);
