import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

// 更改count

// initialState
const initialCount = {
  count: 0
};

// action

const ADD = "ADD";

function add(num = 1) {
  return {
    type: "ADD",
    num
  };
}

function asyncAdd(num = 1) {
  return dispatch => {
    setTimeout(() => {
      dispatch(add(num));
    }, 1000);
  };
}

// countReducer

function countReducer(state = initialCount, action) {
  let { type, num } = action;
  switch (type) {
    case ADD:
      return {
        count: state.count + num
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
    count: initialCount,
    user: initialUser
  },
  applyMiddleware(ReduxThunk)
);

store.subscribe(() => {
  console.log("store.getState", store.getState());
});

const handleClick = function() {
  console.log();
  store.dispatch(asyncAdd());
  console.log("store.getState2 ", store.getState());
};

export default () => (
  <div>
    <button onClick={handleClick}> 点击我测试一下数据的变化 </button>{" "}
  </div>
);
