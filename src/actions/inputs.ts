export interface InputState {
  who: string;
  when: string;
  where: string;
  what: string;
}

export interface AddInput {
  type: "ADD_INPUT";
  input: InputState;
}

export interface ResetRedux {
  type: "RESET_REDUX";
}

export const addInput = (input: InputState): AddInput => ({
  type: "ADD_INPUT",
  input,
});

export const resetRedux = (): ResetRedux => ({
  type: "RESET_REDUX",
});
