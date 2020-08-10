import React, { useState, useEffect } from "react";
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

type useFormKeys = keyof UseFormInputs;

export const AddInputPage = () => {
  const { register, handleSubmit, reset, errors } = useForm<UseFormInputs>();
  const onSubmit = (data: InputState) => {
    dispatch(addInput(data));
    history.push("/result");
  };

  const { t, i18n } = useTranslation();

  const fields: useFormKeys[] = ["who", "what", "when", "where"];

  const [initializedInput, setInitializedInput] = useState({
    who: false,
    when: false,
    where: false,
    what: false,
  });

  const changeInputValue = (inputName: string) => {
    setInitializedInput({ ...initializedInput, [inputName]: true });
  };

  const result = useSelector((state: InputState) => state);

  useEffect(() => {
    if (result) {
      setInitializedInput({
        who: true,
        when: true,
        where: true,
        what: true,
      });
      reset(result);
    }
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit(onSubmit)} className="input-form">
        <h1>Sentence Game</h1>
        <h1>{t("Welcome to React")} </h1>

        {fields.map((el) => (
          <div className="form-group">
            <input
              type="text"
              name={el}
              ref={register({ required: true })}
              className="form-control"
              id="formGroupExampleInput"
              placeholder={`${el.replace(el[0], el.charAt(0).toUpperCase())}?`}
              onChange={changeInputValue.bind(null, el)}
            />
            {errors[el] && <p>Your input is required</p>}
          </div>
        ))}

        <button
          type="submit"
          hidden={
            !initializedInput.who ||
            !initializedInput.what ||
            !initializedInput.when ||
            !initializedInput.where
              ? true
              : false
          }
          className="btn btn-primary input"
        >
          Generate a sentence!
        </button>
      </form>
    </div>
  );
};
