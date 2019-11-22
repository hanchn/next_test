import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "../reducer";

const ADD = "ADD";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD:
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
