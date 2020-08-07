import { InputState, AddInput, ResetRedux } from "../actions/inputs";

const inputReducerDefaultState: InputState = {
  what: "",
  when: "",
  where: "",
  who: "",
};

export default (
  state: InputState = inputReducerDefaultState,
  action: AddInput | ResetRedux
) => {
  switch (action.type) {
    case "ADD_INPUT":
      return { ...state, ...action.input };
    case "RESET_REDUX":
      return inputReducerDefaultState;
    default:
      return state;
  }
};
