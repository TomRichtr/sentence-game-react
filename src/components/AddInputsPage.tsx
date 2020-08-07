import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addInput } from "../actions/inputs";
import { useHistory } from "react-router-dom";
import { InputState } from "../actions/inputs";

interface UseFormInputs {
  who: string;
  when: string;
  what: string;
  where: string;
}

export const AddInputPage = () => {
  const { register, handleSubmit, reset, errors } = useForm<UseFormInputs>();
  const onSubmit = (data: InputState) => {
    dispatch(addInput(data));
    history.push("/result");
  };

  // const [inputValue, setInputValue] = useState<InputState>({
  //   who: "",
  //   what: "",
  //   when: "",
  //   where: "",
  // });

  // const [initializedInput, setInitializedInput] = useState({
  //   who: false,
  //   when: false,
  //   where: false,
  //   what: false,
  // });

  // const changeInputValue = (
  //   inputName: string,
  //   e: ChangeEvent<HTMLInputElement>
  // ) => {
  //   setInputValue({ ...inputValue, [inputName]: e.target.value });
  //   setInitializedInput({ ...initializedInput, [inputName]: true });
  // };

  const result = useSelector((state: InputState) => state);

  useEffect = () => {
    if (result) {
      setInitializedInput({
        who: true,
        when: true,
        where: true,
        what: true,
      });
      reset(result);
      // setInputValue({
      //   who,
      //   when,
      //   where,
      //   what,
      // });
    }
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  // const submitForm = (e: any) => {
  //   e.preventDefault();
  //   dispatch(addInput(inputValue));
  //   history.push("/result");
  // };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit(onSubmit)} className="input-form">
        <h1>Sentence Game</h1>

        <div className="form-group">
          <input
            type="text"
            name="who"
            ref={register}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Who?"
            // value={inputValue.who}
            // onChange={changeInputValue.bind(null, "who")}
          />
        </div>
        <div
          // className={initializedInput.who ? "form-group" : "form-group hidden"}
        >
          <input
            type="text"
            name="what"
            ref={register}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="What?"
            // value={inputValue.what}
            // onChange={changeInputValue.bind(null, "what")}
          />
        </div>
        <div
          // className={initializedInput.what ? "form-group" : "form-group hidden"}
        >
          <input
            type="text"
            name="when"
            ref={register}
            className="form-control"
            id="formGroupExampleInput3"
            placeholder="When?"
            // value={inputValue.when}
            // onChange={changeInputValue.bind(null, "when")}
          />
        </div>
        <div
          // className={initializedInput.when ? "form-group" : "form-group hidden"}
        >
          <input
            type="text"
            name="where"
            ref={register}
            className="form-control"
            id="formGroupExampleInput4"
            placeholder="Where?"
            // value={inputValue.where}
            // onChange={changeInputValue.bind(null, "where")}
          />
        </div>
        <input
          type="submit"
          // hidden={
          //   !initializedInput.who ||
          //   !initializedInput.what ||
          //   !initializedInput.when ||
          //   !initializedInput.where
          //     ? true
          //     : false
          // }
          // disabled={
          //   !inputValue.who ||
          //   !inputValue.what ||
          //   !inputValue.when ||
          //   !inputValue.where
          //     ? true
          //     : false
          // }
          className="btn btn-primary input"
        >
          Generate a sentence!
        </button>
      </form>
    </div>
  );
};
