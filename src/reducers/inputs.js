const inputReducerDefaultState = {};

export default (state = inputReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return {...state, ...action.input};
    case 'RESET_REDUX':
      return inputReducerDefaultState
    default:
      return state;
  }
};

