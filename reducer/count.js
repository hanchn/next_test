const ADD = "ADD";

const initialCounter = {
  count: 0
};

export default (state = initialCounter, action) => {
  const { type } = action;

  switch (type) {
    case ADD:
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};
